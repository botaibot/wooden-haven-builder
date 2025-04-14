
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  text: string;
  isUser: boolean;
}

const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <Avatar className="h-8 w-8 border border-nature-light mr-2">
          <AvatarImage src="/lovable-uploads/b1de1130-1bc6-43ca-bdc5-31d236f8d8e9.png" alt="Аватар помощника" />
          <AvatarFallback className="bg-nature text-white">К</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isUser
            ? "bg-nature text-white rounded-tr-none"
            : "bg-white shadow-sm rounded-tl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
