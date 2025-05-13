
export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
}

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  accepted: boolean;
  rejected: boolean;
  timestamp: number;
}

export interface CookieConsentContextType {
  consent: CookieConsent;
  showBanner: boolean;
  showSettings: boolean;
  toggleSettings: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (preferences: Partial<CookieConsent>) => void;
}
