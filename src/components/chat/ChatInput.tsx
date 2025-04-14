
import React from 'react';
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const ChatInput = ({ value, onChange, onSend }: ChatInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-3 border-t flex gap-2 bg-white rounded-b-xl">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Напишите сообщение..."
        className="resize-none min-h-[44px] max-h-24"
      />
      <Button 
        onClick={onSend} 
        className="h-11 bg-nature-dark hover:bg-nature"
        disabled={!value.trim()}
        size="icon"
      >
        <Send size={18} />
        <span className="sr-only">Отправить</span>
      </Button>
    </div>
  );
};

export default ChatInput;
