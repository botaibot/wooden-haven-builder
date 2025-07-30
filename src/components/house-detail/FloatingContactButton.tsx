
import React from "react";
import { Phone } from "lucide-react";

const FloatingContactButton = () => {
  return (
    <a href="tel:+34659946234" className="fixed bottom-6 right-6 bg-wood-dark text-white p-4 rounded-full shadow-lg hover:bg-wood-darkest transition-colors z-50">
      <Phone size={24} />
    </a>
  );
};

export default FloatingContactButton;
