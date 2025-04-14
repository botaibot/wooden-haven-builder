
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface MakeMessage {
  source: 'make';
  message: string;
  timestamp?: string;
}

export const useMakeIntegration = (isOpen: boolean, onMessageReceived: (message: string) => void) => {
  const { toast } = useToast();

  const handleMakeResponse = (event: MessageEvent) => {
    try {
      if (event.data && typeof event.data === 'object' && event.data.source === 'make') {
        console.log("Получен ответ от Make:", event.data);
        const responseText = event.data.message;
        
        if (responseText) {
          onMessageReceived(responseText);
          
          if (!isOpen) {
            toast({
              title: "Новое сообщение от Карла",
              description: responseText,
              duration: 5000,
            });
          }
        }
      }
    } catch (error) {
      console.error("Ошибка при обработке ответа от Make:", error);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMakeResponse);
    return () => {
      window.removeEventListener('message', handleMakeResponse);
    };
  }, [isOpen]);
};
