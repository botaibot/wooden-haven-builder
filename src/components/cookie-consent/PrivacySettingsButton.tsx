
import React from "react";
import { Button } from "@/components/ui/button";

export const PrivacySettingsButton: React.FC = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const win = window as any;
      if (win.openCookieSettings) {
        win.openCookieSettings();
      }
    }
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleClick}
      className="text-gray-300 hover:text-nature-light transition-colors"
    >
      Configuración de privacidad
    </Button>
  );
};
