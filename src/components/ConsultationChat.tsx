
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Phone } from "lucide-react";

const ConsultationChat = () => {
  const [showConsultationOptions, setShowConsultationOptions] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'OPEN_CONSULTATION_CHAT') {
        setShowConsultationOptions(true);
        console.log('Consultation chat opened:', event.data.message);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleTelegramClick = () => {
    window.open('https://t.me/your_telegram_bot', '_blank');
    setShowConsultationOptions(false);
  };

  const handleWhatsAppClick = () => {
    try {
      const whatsappUrl = 'https://wa.me/34651715998?text=Hola%20quiero%20hacer%20un%20pedido';
      window.location.href = whatsappUrl;
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
    }
    setShowConsultationOptions(false);
  };

  const handleOnlineClick = () => {
    console.log('Opening online chat...');
    setShowConsultationOptions(false);
  };

  if (!showConsultationOptions) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl border p-4 max-w-sm">
      <h3 className="text-lg font-bold text-wood-dark mb-4 text-center">
        Elija el método de consulta
      </h3>
      
      <div className="space-y-3">
        <Button
          onClick={handleTelegramClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
        >
          <Bot size={20} />
          <span>Telegram</span>
        </Button>
        
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          <span>WhatsApp</span>
        </Button>
        
        <Button
          onClick={handleOnlineClick}
          className="w-full bg-wood hover:bg-wood-dark text-white flex items-center justify-center gap-2"
        >
          <MessageSquare size={20} />
          <span>En línea en el sitio</span>
        </Button>
        
        <Button
          onClick={() => setShowConsultationOptions(false)}
          variant="outline"
          className="w-full text-gray-600"
        >
          Cerrar
        </Button>
      </div>
    </div>
  );
};

export default ConsultationChat;
