
import React from "react";
import { useCookieConsent } from "./CookieConsentContext";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CookieSettings } from "./CookieSettings";

export const CookieBanner: React.FC = () => {
  const { 
    showBanner, 
    showSettings, 
    toggleSettings, 
    acceptAll, 
    rejectNonEssential 
  } = useCookieConsent();
  
  if (!showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {showBanner && !showSettings && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-background border-t border-border p-4 shadow-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Политика использования файлов cookie</h3>
              <p className="text-muted-foreground text-sm">
                Мы используем файлы cookie для персонализации контента и рекламы, предоставления функций соцсетей и анализа трафика. 
                Вы можете настроить использование cookie или принять все. 
                Подробнее читайте в нашей <a href="#" className="text-primary hover:underline">Политике конфиденциальности</a>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
              <Button variant="outline" onClick={toggleSettings}>
                Настроить
              </Button>
              <Button variant="outline" onClick={rejectNonEssential}>
                Только необходимые
              </Button>
              <Button onClick={acceptAll}>
                Принять все
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showSettings} onOpenChange={(open) => {
        if (!open) toggleSettings();
      }}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Настройки файлов cookie</DialogTitle>
            <DialogDescription>
              Настройте, какие типы файлов cookie вы хотите разрешить
            </DialogDescription>
          </DialogHeader>
          <CookieSettings />
        </DialogContent>
      </Dialog>
    </>
  );
};
