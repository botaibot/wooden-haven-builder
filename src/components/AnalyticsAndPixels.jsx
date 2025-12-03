import { useEffect } from "react";
import { useCookieConsent } from "./CookieConsent.jsx";

function AnalyticsAndPixels(){
  const { allow } = useCookieConsent();

  useEffect(() => {
    if (allow("analytics")) {
      // Google Tag Manager
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WLS67DPK');
      
      console.log("✅ Google Tag Manager cargado con consentimiento");
    }
    
    if (allow("marketing")) {
      // Meta Pixel
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