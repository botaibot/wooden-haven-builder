
import { useState, useEffect, useCallback, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

// Placeholder URL - needs to be replaced with your actual WebSocket server URL
const WEBSOCKET_URL = 'wss://your-websocket-server.com';

export const useWebSocket = (onMessageReceived: (message: string) => void) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const { toast } = useToast();
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 3;
  const errorShown = useRef(false);

  const connect = useCallback(() => {
    try {
      // Skip connection if we've already shown the error message
      if (errorShown.current && reconnectAttempts.current >= maxReconnectAttempts) {
        return;
      }

      reconnectAttempts.current += 1;
      const ws = new WebSocket(WEBSOCKET_URL);

      ws.onopen = () => {
        console.log('WebSocket соединение установлено');
        reconnectAttempts.current = 0;
        errorShown.current = false;
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
        
        // Only show error toast once, not repeatedly
        if (!errorShown.current && reconnectAttempts.current >= maxReconnectAttempts) {
          errorShown.current = true;
          toast({
            title: "Ошибка соединения",
            description: "Не удалось установить соединение с сервером. Функциональность чата ограничена.",
            variant: "destructive"
          });
        }
      };

      ws.onclose = () => {
        console.log('WebSocket соединение закрыто');
        
        // Only attempt to reconnect if we haven't reached the maximum attempts
        if (reconnectAttempts.current < maxReconnectAttempts) {
          console.log(`Попытка переподключения ${reconnectAttempts.current}/${maxReconnectAttempts}...`);
          setTimeout(connect, 3000);
        } else if (!errorShown.current) {
          errorShown.current = true;
          console.log('Достигнуто максимальное количество попыток переподключения');
        }
      };

      setSocket(ws);
    } catch (error) {
      console.error('Ошибка при создании WebSocket:', error);
      if (!errorShown.current) {
        errorShown.current = true;
        toast({
          title: "Ошибка соединения",
          description: "Не удалось установить соединение с сервером. Функциональность чата ограничена.",
          variant: "destructive"
        });
      }
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
      return true;
    } else {
      if (!errorShown.current) {
        errorShown.current = true;
        toast({
          title: "Ошибка отправки",
          description: "Не удалось отправить сообщение, проверьте соединение",
          variant: "destructive"
        });
      }
      return false;
    }
  }, [socket, toast]);

  return { 
    sendMessage,
    isConnected: socket?.readyState === WebSocket.OPEN 
  };
};
