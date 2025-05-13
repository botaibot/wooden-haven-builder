
import React, { createContext, useState, useContext, useEffect } from "react";
import { CookieConsent, CookieConsentContextType } from "./CookieConsentTypes";
import { defaultConsent, getSavedConsent, saveConsent } from "./cookieConsentUtils";

// Создаем контекст
const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Инициализация при загрузке страницы
  useEffect(() => {
    const savedConsent = getSavedConsent();
    
    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  // Принять все cookies
  const acceptAll = () => {
    const newConsent: CookieConsent = {
      ...consent,
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      accepted: true,
      rejected: false,
      timestamp: Date.now()
    };
    
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Отклонить все необязательные cookies
  const rejectNonEssential = () => {
    const newConsent: CookieConsent = {
      ...consent,
      necessary: true, // Необходимые всегда включены
      analytics: false,
      marketing: false,
      preferences: false,
      accepted: false,
      rejected: true,
      timestamp: Date.now()
    };
    
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Сохранить пользовательские настройки
  const savePreferences = (preferences: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      ...consent,
      ...preferences,
      accepted: true,
      rejected: false,
      timestamp: Date.now()
    };
    
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Переключить отображение настроек
  const toggleSettings = () => {
    setShowSettings(!showSettings);
    if (!showSettings) {
      setShowBanner(true);
    }
  };

  const value: CookieConsentContextType = {
    consent,
    showBanner,
    showSettings,
    toggleSettings,
    acceptAll,
    rejectNonEssential,
    savePreferences
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

// Хук для использования контекста
export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  
  return context;
};
