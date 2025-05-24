
import React, { useEffect } from "react";

const ChatAssistant = () => {
  useEffect(() => {
    // Проверяем, что скрипт Voiceflow еще не загружен
    if (!window.voiceflow) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = function() {
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
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      script.type = "text/javascript";
      document.head.appendChild(script);
    }
  }, []);

  // Возвращаем null, так как виджет Voiceflow сам управляет своим отображением
  return null;
};

export default ChatAssistant;
