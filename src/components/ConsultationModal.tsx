
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Phone } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const handleTelegramClick = () => {
    window.open('https://t.me/your_telegram_bot', '_blank');
    onClose();
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your_whatsapp_number', '_blank');
    onClose();
  };

  const handleOnlineClick = () => {
    // Здесь можно добавить логику для открытия онлайн-чата
    console.log('Opening online chat...');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-wood-dark">
            Выберите способ консультации
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <Button
            onClick={handleTelegramClick}
            className="w-full h-16 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-3 text-lg"
          >
            <Bot size={24} />
            <span>Telegram</span>
          </Button>
          
          <Button
            onClick={handleWhatsAppClick}
            className="w-full h-16 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-3 text-lg"
          >
            <Phone size={24} />
            <span>WhatsApp</span>
          </Button>
          
          <Button
            onClick={handleOnlineClick}
            className="w-full h-16 bg-wood hover:bg-wood-dark text-white flex items-center justify-center gap-3 text-lg"
          >
            <MessageSquare size={24} />
            <span>Онлайн на сайте</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
