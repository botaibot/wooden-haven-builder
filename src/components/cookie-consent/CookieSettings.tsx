
import React, { useState } from "react";
import { useCookieConsent } from "./CookieConsentContext";
import { cookieCategories } from "./cookieConsentUtils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CookieConsent } from "./CookieConsentTypes";

export const CookieSettings: React.FC = () => {
  const { consent, savePreferences, acceptAll } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState<CookieConsent>({...consent});

  const handleToggle = (categoryId: string, checked: boolean) => {
    setLocalPreferences(prev => ({
      ...prev,
      [categoryId]: checked
    }));
  };

  const handleSave = () => {
    savePreferences(localPreferences);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {cookieCategories.map((category) => (
          <div key={category.id} className="flex items-start justify-between space-y-1 pt-2">
            <div className="space-y-1">
              <div className="flex items-center">
                <Label 
                  htmlFor={`cookie-${category.id}`} 
                  className="font-medium text-base"
                >
                  {category.name}
                  {category.required && (
                    <span className="ml-2 text-xs bg-muted text-muted-foreground px-1 py-0.5 rounded">
                      Обязательные
                    </span>
                  )}
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
            <Switch
              id={`cookie-${category.id}`}
              checked={localPreferences[category.id as keyof CookieConsent] as boolean}
              onCheckedChange={(checked) => handleToggle(category.id, checked)}
              disabled={category.required}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline" onClick={handleSave}>
          Сохранить настройки
        </Button>
        <Button onClick={acceptAll}>
          Принять все
        </Button>
      </div>
    </div>
  );
};
