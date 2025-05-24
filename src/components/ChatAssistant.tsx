
import React, { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}

const ChatAssistant = () => {
  useEffect(() => {
    // Проверяем, что скрипт Voiceflow еще не загружен
    if (!window.voiceflow) {
      // Используем обновленный скрипт для загрузки Voiceflow
      (function(d, t) {
        var v = d.createElement(t) as HTMLScriptElement, s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          if (window.voiceflow) {
            window.voiceflow.chat.load({
              verify: { projectID: '682f6b5853e18e5eb719bb91' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
          }
        };
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
        v.type = "text/javascript";
        s.parentNode!.insertBefore(v, s);
      })(document, 'script');
    }
  }, []);

  // Возвращаем null, так как виджет Voiceflow сам управляет своим отображением
  return null;
};

export default ChatAssistant;
