
import { CookieConsent, CookieCategory } from './CookieConsentTypes';

// Срок действия согласия (6 месяцев)
export const CONSENT_EXPIRY_DAYS = 180;

// Ключ для хранения в localStorage
export const CONSENT_STORAGE_KEY = 'cookie-consent-preferences';

// Категории cookies
export const cookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Необходимые',
    description: 'Эти файлы cookie необходимы для работы сайта и не могут быть отключены.',
    required: true
  },
  {
    id: 'analytics',
    name: 'Аналитические',
    description: 'Эти файлы cookie помогают нам анализировать использование сайта для улучшения пользовательского опыта.',
    required: false
  },
  {
    id: 'marketing',
    name: 'Маркетинговые',
    description: 'Эти файлы cookie используются для отображения релевантной рекламы и маркетинговых кампаний.',
    required: false
  },
  {
    id: 'preferences',
    name: 'Настройки',
    description: 'Эти файлы cookie позволяют сайту запоминать ваши предпочтения и настройки.',
    required: false
  }
];

// Значения по умолчанию
export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  accepted: false,
  rejected: false,
  timestamp: 0
};

// Проверка, истек ли срок действия согласия
export const isConsentExpired = (timestamp: number): boolean => {
  const expiryMs = CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
  return Date.now() > timestamp + expiryMs;
};

// Получение сохраненного согласия
export const getSavedConsent = (): CookieConsent | null => {
  try {
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    
    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent) as CookieConsent;
      
      // Проверка срока действия
      if (isConsentExpired(parsedConsent.timestamp)) {
        return null;
      }
      
      return parsedConsent;
    }
  } catch (error) {
    console.error('Error reading cookie consent from localStorage:', error);
  }
  
  return null;
};

// Сохранение согласия
export const saveConsent = (consent: CookieConsent): void => {
  try {
    // Обновляем timestamp
    const consentToSave = {
      ...consent,
      timestamp: Date.now()
    };
    
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentToSave));
  } catch (error) {
    console.error('Error saving cookie consent to localStorage:', error);
  }
};
