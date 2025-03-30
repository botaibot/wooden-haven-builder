
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Здравствуйте! Мы подготовили для Вас специальное предложение! 😊",
      isUser: false,
    },
    {
      id: 2,
      text: "Расскажу подробнее. Напишите мне!)",
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
          text: "Спасибо за ваше сообщение! Наш менеджер свяжется с вами в ближайшее время.",
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
    <>
      {/* Кнопка открытия чата */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 bg-nature-dark hover:bg-nature shadow-lg"
        aria-label="Открыть чат с помощником"
      >
        <MessageCircle size={26} />
      </Button>

      {/* Диалоговое окно чата */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[400px] p-0 gap-0 overflow-hidden rounded-lg">
          <DialogHeader className="p-4 border-b bg-white">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-nature-light">
                <AvatarImage src="/lovable-uploads/b1de1130-1bc6-43ca-bdc5-31d236f8d8e9.png" alt="Аватар помощника" />
                <AvatarFallback className="bg-nature text-white">Д</AvatarFallback>
              </Avatar>
              <DialogTitle>Динар</DialogTitle>
            </div>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Закрыть</span>
            </DialogClose>
          </DialogHeader>

          {/* Область сообщений */}
          <div className="h-80 overflow-y-auto p-4 bg-muted/30 flex flex-col gap-3">
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
          <div className="p-3 border-t flex gap-2 bg-white">
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
            >
              <MessageCircle size={20} />
              <span className="sr-only">Отправить</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatAssistant;
