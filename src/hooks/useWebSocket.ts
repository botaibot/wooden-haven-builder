
import { useState, useEffect, useCallback, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

// Используем проверочный URL, который не вызывает лишних ошибок
const WEBSOCKET_URL = 'wss://echo.websocket.org';

export const useWebSocket = (onMessageReceived: (message: string) => void) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const { toast } = useToast();
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 3;
  const errorShown = useRef(false);
  const connectingRef = useRef(false);

  const connect = useCallback(() => {
    // Предотвращаем множественные попытки соединения
    if (connectingRef.current) {
      return;
    }

    try {
      // Пропускаем соединение, если мы уже показали сообщение об ошибке
      if (errorShown.current && reconnectAttempts.current >= maxReconnectAttempts) {
        return;
      }

      connectingRef.current = true;
      reconnectAttempts.current += 1;
      
      console.log(`Попытка соединения с WebSocket ${reconnectAttempts.current}/${maxReconnectAttempts}`);
      
      const ws = new WebSocket(WEBSOCKET_URL);

      ws.onopen = () => {
        console.log('WebSocket соединение установлено');
        reconnectAttempts.current = 0;
        errorShown.current = false;
        connectingRef.current = false;
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
        connectingRef.current = false;
        
        // Показываем сообщение об ошибке только один раз
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
        connectingRef.current = false;
        
        // Предпринимаем попытку переподключения только если не достигли максимума
        if (reconnectAttempts.current < maxReconnectAttempts) {
          console.log(`Попытка переподключения ${reconnectAttempts.current}/${maxReconnectAttempts}...`);
          setTimeout(connect, 5000); // Увеличиваем интервал между попытками
        } else if (!errorShown.current) {
          errorShown.current = true;
          console.log('Достигнуто максимальное количество попыток переподключения');
        }
      };

      setSocket(ws);
    } catch (error) {
      console.error('Ошибка при создании WebSocket:', error);
      connectingRef.current = false;
      
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
