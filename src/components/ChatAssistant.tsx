
import React, { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Привет! Спроси меня, что тебя интересует, и я сделаю предложение 😊",
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Добавляем сообщение пользователя
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        isUser: true,
      },
    ]);
    setNewMessage("");

    // Имитация ответа помощника через 1 секунду
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: "Спасибо за ваше сообщение! Я подготовлю для вас индивидуальное предложение. Оставьте, пожалуйста, свой контактный номер, и наш менеджер свяжется с вами в ближайшее время.",
          isUser: false,
        },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
          {/* Заголовок чата */}
          <div className="p-3 border-b bg-white flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-nature-light">
                <AvatarImage src="/lovable-uploads/b1de1130-1bc6-43ca-bdc5-31d236f8d8e9.png" alt="Аватар помощника" />
                <AvatarFallback className="bg-nature text-white">Д</AvatarFallback>
              </Avatar>
              <span className="font-medium">Динар</span>
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

          {/* Область сообщений */}
          <div className="h-64 overflow-y-auto p-3 bg-muted/30 flex flex-col gap-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-nature text-white rounded-tr-none"
                      : "bg-white shadow-sm rounded-tl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Область ввода */}
          <div className="p-3 border-t flex gap-2 bg-white rounded-b-xl">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Напишите сообщение..."
              className="resize-none min-h-[44px] max-h-24"
            />
            <Button 
              onClick={handleSendMessage} 
              className="h-11 bg-nature-dark hover:bg-nature"
              disabled={!newMessage.trim()}
              size="icon"
            >
              <Send size={18} />
              <span className="sr-only">Отправить</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatAssistant;
