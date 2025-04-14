
import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';

const WEBSOCKET_URL = 'wss://your-websocket-server.com'; // Замените на ваш WebSocket URL

export const useWebSocket = (onMessageReceived: (message: string) => void) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const { toast } = useToast();

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(WEBSOCKET_URL);

      ws.onopen = () => {
        console.log('WebSocket соединение установлено');
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.message) {
            onMessageReceived(data.message);
          }
        } catch (error) {
          console.error('Ошибка при обработке сообщения:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket ошибка:', error);
        toast({
          title: "Ошибка соединения",
          description: "Не удалось установить соединение с сервером",
          variant: "destructive"
        });
      };

      ws.onclose = () => {
        console.log('WebSocket соединение закрыто, переподключение...');
        setTimeout(connect, 3000); // Попытка переподключения через 3 секунды
      };

      setSocket(ws);
    } catch (error) {
      console.error('Ошибка при создании WebSocket:', error);
    }
  }, [onMessageReceived, toast]);

  useEffect(() => {
    connect();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [connect]);

  const sendMessage = useCallback((message: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ message }));
    } else {
      console.error('WebSocket не подключен');
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить сообщение, проверьте соединение",
        variant: "destructive"
      });
    }
  }, [socket, toast]);

  return { sendMessage };
};
