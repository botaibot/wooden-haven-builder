import { useEffect } from "react";
import { useCookieConsent } from "./CookieConsent.jsx";

function AnalyticsAndPixels(){
  const { allow } = useCookieConsent();

  useEffect(() => {
    // Meta Pixel - только с согласием на marketing cookies
    if (allow("marketing")) {
      !(function(f,b,e,v,n,t,s){
        if(f.fbq)return;
        n=f.fbq=function(){
          n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
        };
        if(!f._fbq)f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version="2.0";
        n.queue=[];
        t=b.createElement(e);
        t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      })(window, document, "script", "https://connect.facebook.net/es_ES/fbevents.js");
      
      window.fbq("init","TU_PIXEL_ID"); 
      window.fbq("track","PageView");
      
      console.log("✅ Meta Pixel cargado con consentimiento");
    }
  }, [allow]);

  return null;
}

export default AnalyticsAndPixels;
