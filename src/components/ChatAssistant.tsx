
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useMakeIntegration } from "@/hooks/useMakeIntegration";
import { useUserIdentification, getCalculatorChoice } from "@/hooks/useUserIdentification";
import ChatMessage from "./chat/ChatMessage";
import ChatInput from "./chat/ChatInput";

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
  const userId = useUserIdentification();

  const handleAddMessage = (text: string) => {
    const newAssistantMessage = {
      id: messages.length + 1,
      text,
      isUser: false,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prevMessages => [...prevMessages, newAssistantMessage]);
  };

  useMakeIntegration(isOpen, handleAddMessage);

  const sendToWebhook = async (messageData: any) => {
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

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    sendToWebhook({
      type: "user_message",
      message: userMessage.text,
      timestamp: userMessage.timestamp,
      page: window.location.pathname,
    });
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

          <div className="h-64 overflow-y-auto p-3 bg-muted/30 flex flex-col gap-3">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id}
                text={message.text}
                isUser={message.isUser}
              />
            ))}
          </div>

          <ChatInput
            value={newMessage}
            onChange={setNewMessage}
            onSend={handleSendMessage}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatAssistant;
