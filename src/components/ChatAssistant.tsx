
import React, { useState, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { useUserIdentification, getCalculatorChoice } from "@/hooks/useUserIdentification";

const WEBHOOK_URL = "https://hook.eu2.make.com/b8rvmk3jo41mbxpuf88jkn1vtt4zw1fe";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Привет! Меня зовут Карл. Спроси меня, что тебя интересует по деревянным домам 😊",
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [reminderCount, setReminderCount] = useState(0);
  const { toast } = useToast();
  const userId = useUserIdentification();

  const proactiveMessages = [
    "Здравствуйте! Я Карл, могу помочь с выбором деревянного дома?",
    "У нас есть специальное предложение для вас! Расскажу подробнее. Напишите мне!",
    "У вас остались вопросы? Я, Карл, здесь, чтобы помочь!",
    "Интересуют наши проекты? Могу предоставить больше информации.",
    "Хотите узнать о текущих акциях и скидках? Спросите меня!"
  ];

  const sendToWebhook = async (messageData) => {
    try {
      const calculatorChoice = getCalculatorChoice();
      
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", 
        body: JSON.stringify({
          ...messageData,
          userId,
          calculatorChoice,
          assistantName: "Карл"
        }),
      });
      console.log("Сообщение отправлено в webhook:", messageData);
    } catch (error) {
      console.error("Ошибка при отправке в webhook:", error);
    }
  };

  const getAssistantResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    const calculatorChoice = getCalculatorChoice();
    
    if (lowerCaseMessage.includes("привет") || lowerCaseMessage.includes("здравствуй")) {
      return `Здравствуйте! Меня зовут Карл, я помогу вам с выбором деревянного дома. Вы уже выбрали ${calculatorChoice ? `дом с площадью ${calculatorChoice.totalArea}м² за ${calculatorChoice.totalPrice}€` : "параметры дома в калькуляторе"}?`;
    } 
    else if (lowerCaseMessage.includes("цен") || lowerCaseMessage.includes("стоимость") || lowerCaseMessage.includes("стоит")) {
      return `Стоимость дома зависит от многих параметров. ${calculatorChoice ? `По вашему выбору в калькуляторе, предварительная стоимость составляет ${calculatorChoice.totalPrice}€.` : "Воспользуйтесь нашим калькулятором для расчета предварительной стоимости."} Могу я еще чем-то помочь?`;
    }
    else if (lowerCaseMessage.includes("контакт") || lowerCaseMessage.includes("телефон") || lowerCaseMessage.includes("звон") || lowerCaseMessage.includes("позвон")) {
      return "Оставьте свой номер телефона, и наш менеджер свяжется с вами в ближайшее время для обсуждения деталей.";
    }
    else if (lowerCaseMessage.includes("время") || lowerCaseMessage.includes("срок")) {
      return "Время строительства деревянного дома обычно занимает от 3 до 6 месяцев в зависимости от сложности проекта и сезона. Хотите узнать подробнее о нашем процессе строительства?";
    }
    else {
      return `Спасибо за ваше сообщение! ${calculatorChoice ? `Я вижу, что вы интересуетесь домом площадью ${calculatorChoice.totalArea}м².` : ""} Чем еще я могу вам помочь? Вы можете спросить о сроках строительства, материалах или оставить контактные данные для связи с менеджером.`;
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setLastActivity(Date.now());

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    const calculatorChoice = getCalculatorChoice();

    sendToWebhook({
      type: "user_message",
      message: userMessage.text,
      timestamp: userMessage.timestamp,
      page: window.location.pathname,
      userId,
      calculatorChoice,
      assistantName: "Карл"
    });

    const responseText = getAssistantResponse(userMessage.text);

    setTimeout(() => {
      const assistantMessage = {
        id: messages.length + 2,
        text: responseText,
        isUser: false,
        timestamp: new Date().toISOString(),
      };

      setMessages(prevMessages => [...prevMessages, assistantMessage]);

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

  // Добавляем функцию handleMakeResponse для обработки ответов из Make
  const handleMakeResponse = (event) => {
    try {
      // Проверяем, что событие содержит данные и они от Make
      if (event.data && typeof event.data === 'object' && event.data.source === 'make') {
        console.log("Получен ответ от Make:", event.data);
        
        // Извлекаем сообщение из данных
        const responseText = event.data.message;
        
        if (responseText) {
          // Добавляем сообщение в чат
          const assistantMessage = {
            id: messages.length + 1,
            text: responseText,
            isUser: false,
            timestamp: new Date().toISOString(),
          };
          
          setMessages(prevMessages => [...prevMessages, assistantMessage]);
          
          // Если чат не открыт, показываем уведомление
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

  useEffect(() => {
    const checkInactivity = setInterval(() => {
      const currentTime = Date.now();
      const inactiveTime = currentTime - lastActivity;
      
      if (inactiveTime > 120000 && !isOpen && reminderCount < 3) {
        const randomMessage = proactiveMessages[Math.floor(Math.random() * proactiveMessages.length)];
        const timestamp = new Date().toISOString();
        
        setMessages(prev => [
          ...prev,
          {
            id: prev.length + 1,
            text: randomMessage,
            isUser: false,
            timestamp: timestamp,
          }
        ]);
        
        toast({
          title: "Новое сообщение от Карла",
          description: randomMessage,
          duration: 5000,
        });
        
        sendToWebhook({
          type: "proactive_message",
          message: randomMessage,
          timestamp: timestamp,
          page: window.location.pathname,
        });
        
        setReminderCount(prev => prev + 1);
        
        setLastActivity(currentTime);
      }
    }, 30000);

    return () => clearInterval(checkInactivity);
  }, [isOpen, lastActivity, reminderCount, toast]);

  useEffect(() => {
    window.addEventListener('message', handleMakeResponse);
    return () => {
      window.removeEventListener('message', handleMakeResponse);
    };
  }, [messages]);

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
          <div className="p-3 border-b bg-white flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-nature-light">
                <AvatarImage src="/lovable-uploads/b1de1130-1bc6-43ca-bdc5-31d236f8d8e9.png" alt="Аватар помощника" />
                <AvatarFallback className="bg-nature text-white">К</AvatarFallback>
              </Avatar>
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
