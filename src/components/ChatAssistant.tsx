
import React, { useState, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

// Make.com webhook URL
const WEBHOOK_URL = "https://hook.eu2.make.com/b8rvmk3jo41mbxpuf88jkn1vtt4zw1fe";

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
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [reminderCount, setReminderCount] = useState(0);
  const { toast } = useToast();

  // Проактивные сообщения, которые будут отображаться случайным образом
  const proactiveMessages = [
    "Здравствуйте! Могу я вам помочь с выбором деревянного дома?",
    "Мы подготовили для Вас специальное предложение! Расскажу подробнее. Напишите мне!",
    "У вас остались вопросы? Я здесь, чтобы помочь!",
    "Интересуют наши проекты? Я могу предоставить больше информации.",
    "Хотите узнать о текущих акциях и скидках? Спросите меня!"
  ];

  // Отправка данных в webhook
  const sendToWebhook = async (messageData) => {
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Используем no-cors для обхода CORS-ограничений
        body: JSON.stringify(messageData),
      });
      console.log("Сообщение отправлено в webhook:", messageData);
    } catch (error) {
      console.error("Ошибка при отправке в webhook:", error);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Обновляем время последней активности
    setLastActivity(Date.now());

    // Формируем сообщение пользователя
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: new Date().toISOString(),
    };

    // Добавляем сообщение пользователя в чат
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Отправляем сообщение пользователя в webhook
    sendToWebhook({
      type: "user_message",
      message: userMessage.text,
      timestamp: userMessage.timestamp,
      page: window.location.pathname,
    });

    // Имитация ответа помощника через 1 секунду
    setTimeout(() => {
      const assistantMessage = {
        id: messages.length + 2,
        text: "Спасибо за ваше сообщение! Я подготовлю для вас индивидуальное предложение. Оставьте, пожалуйста, свой контактный номер, и наш менеджер свяжется с вами в ближайшее время.",
        isUser: false,
        timestamp: new Date().toISOString(),
      };

      // Добавляем ответ помощника в чат
      setMessages(prevMessages => [...prevMessages, assistantMessage]);

      // Отправляем ответ помощника в webhook
      sendToWebhook({
        type: "assistant_message",
        message: assistantMessage.text,
        timestamp: assistantMessage.timestamp,
        page: window.location.pathname,
      });
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Обновляем время последней активности пользователя при движении мыши, клике или нажатии клавиш
  useEffect(() => {
    const updateLastActivity = () => setLastActivity(Date.now());
    
    window.addEventListener("mousemove", updateLastActivity);
    window.addEventListener("click", updateLastActivity);
    window.addEventListener("keypress", updateLastActivity);
    
    return () => {
      window.removeEventListener("mousemove", updateLastActivity);
      window.removeEventListener("click", updateLastActivity);
      window.removeEventListener("keypress", updateLastActivity);
    };
  }, []);

  // Проверяем, прошло ли 2 минуты с момента последней активности
  useEffect(() => {
    const checkInactivity = setInterval(() => {
      const currentTime = Date.now();
      const inactiveTime = currentTime - lastActivity;
      
      // Если прошло 2 минуты (120000 мс) и чат не открыт, показываем напоминание
      if (inactiveTime > 120000 && !isOpen && reminderCount < 3) {
        const randomMessage = proactiveMessages[Math.floor(Math.random() * proactiveMessages.length)];
        const timestamp = new Date().toISOString();
        
        // Добавляем проактивное сообщение в чат
        setMessages(prev => [
          ...prev,
          {
            id: prev.length + 1,
            text: randomMessage,
            isUser: false,
            timestamp: timestamp,
          }
        ]);
        
        // Показываем уведомление
        toast({
          title: "Новое сообщение от консультанта",
          description: randomMessage,
          duration: 5000,
        });
        
        // Отправляем проактивное сообщение в webhook
        sendToWebhook({
          type: "proactive_message",
          message: randomMessage,
          timestamp: timestamp,
          page: window.location.pathname,
        });
        
        // Увеличиваем счетчик напоминаний
        setReminderCount(prev => prev + 1);
        
        // Обновляем время последней активности
        setLastActivity(currentTime);
      }
    }, 30000); // Проверяем каждые 30 секунд

    return () => clearInterval(checkInactivity);
  }, [isOpen, lastActivity, reminderCount, toast]);

  // Отправляем информацию о первом посещении страницы
  useEffect(() => {
    sendToWebhook({
      type: "page_visit",
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    });
  }, []);

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
