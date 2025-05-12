
import React, { useState } from "react";
import { MessageCircle, X, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

const ContactButton = ({ 
  icon: Icon, 
  label, 
  onClick, 
  className = "" 
}: { 
  icon: React.ElementType; 
  label: string; 
  onClick: () => void;
  className?: string;
}) => (
  <Button 
    variant="outline" 
    className={`flex items-center gap-2 w-full mb-2 hover:bg-muted ${className}`}
    onClick={onClick}
  >
    <Icon size={18} />
    <span>{label}</span>
  </Button>
);

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const handleContactClick = (method: string) => {
    let action = "";
    
    switch(method) {
      case "email":
        window.location.href = "mailto:info@ecohouse.com";
        action = "отправку email";
        break;
      case "whatsapp":
        window.open("https://wa.me/37125625333", "_blank");
        action = "переход в WhatsApp";
        break;
      case "telegram":
        window.open("https://t.me/ecohouse_bot", "_blank");
        action = "переход в Telegram";
        break;
      default:
        break;
    }
    
    toast({
      title: "Переход к контакту",
      description: `Выполняется ${action}`,
    });
    
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            className="rounded-full h-14 w-14 p-0 bg-nature-dark hover:bg-nature shadow-lg"
            aria-label="Открыть чат с помощником"
          >
            <MessageCircle size={26} />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 sm:w-96 p-0 rounded-xl shadow-lg" 
          sideOffset={16}
          align="end"
        >
          <div className="p-3 border-b bg-white flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <span className="font-medium">Карл</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-4 bg-muted/30">
            <div className="flex items-start gap-3 mb-6">
              <Avatar className="h-10 w-10 border border-nature-light">
                <AvatarImage src="/lovable-uploads/b1de1130-1bc6-43ca-bdc5-31d236f8d8e9.png" alt="Аватар помощника" />
                <AvatarFallback className="bg-nature text-white">К</AvatarFallback>
              </Avatar>
              <div className="bg-white p-3 rounded-lg rounded-tl-none">
                <p className="text-gray-800">Привет! Чем я могу вам помочь? Выберите удобный способ связи:</p>
              </div>
            </div>
            
            <div className="pl-12">
              <ContactButton 
                icon={Mail} 
                label="Написать на Email" 
                onClick={() => handleContactClick("email")} 
                className="bg-blue-50 hover:bg-blue-100 border-blue-200"
              />
              
              <ContactButton 
                icon={Phone} 
                label="Написать в WhatsApp" 
                onClick={() => handleContactClick("whatsapp")} 
                className="bg-green-50 hover:bg-green-100 border-green-200"
              />
              
              <ContactButton 
                icon={Send} 
                label="Написать в Telegram" 
                onClick={() => handleContactClick("telegram")} 
                className="bg-sky-50 hover:bg-sky-100 border-sky-200"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatAssistant;
