
import React from "react";
import { useCookieConsent } from "./CookieConsentContext";
import { Button } from "@/components/ui/button";

export const PrivacySettingsButton: React.FC = () => {
  const { toggleSettings } = useCookieConsent();

  return (
    <Button 
      variant="ghost" 
      onClick={toggleSettings}
      className="text-gray-300 hover:text-nature-light transition-colors"
    >
      Настройки конфиденциальности
    </Button>
  );
};
