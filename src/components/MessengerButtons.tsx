import React from "react";
import whatsappIcon from "@/assets/whatsapp.png";
import telegramIcon from "@/assets/telegram.png";
import botIcon from "@/assets/bot.png";

const MessengerButtons = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34659946234', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/casamodulbot', '_blank');
  };

  const handleBotClick = () => {
    console.log('Bot clicked - webhook будет здесь');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden"
        aria-label="WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover" />
      </button>
      
      <button
        onClick={handleTelegramClick}
        className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden"
        aria-label="Telegram"
      >
        <img src={telegramIcon} alt="Telegram" className="w-full h-full object-cover" />
      </button>
      
      <button
        onClick={handleBotClick}
        className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden"
        aria-label="Bot"
      >
        <img src={botIcon} alt="Bot" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};

export default MessengerButtons;
