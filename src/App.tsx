
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Houses from "./pages/Houses";
import HouseDetail from "./pages/HouseDetail";
import HouseSelection from "./pages/HouseSelection";
import Materials from "./pages/Materials";
import BosquePlatform from "./pages/BosquePlatform";

import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Stories from "./pages/Stories";
import NotFound from "./pages/NotFound";
import MessengerButtons from "@/components/MessengerButtons";
import { CartProvider } from "./context/CartContext";
import { CookieConsentProvider } from "./components/CookieConsent.jsx";
import AnalyticsAndPixels from "./components/AnalyticsAndPixels.jsx";
import Privacidad from "./pages/Privacidad.jsx";

// Компонент для прокрутки вверх при изменении маршрута
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <CookieConsentProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/houses" element={<Houses />} />
              <Route path="/houses/:id" element={<HouseDetail />} />
              <Route path="/house-selection" element={<HouseSelection />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/bosque-platform" element={<BosquePlatform />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/privacidad" element={<Privacidad />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Кнопки мессенджеров глобально */}
            <MessengerButtons />
            {/* Аналитика и пиксели с управлением согласия */}
            <AnalyticsAndPixels />
          </BrowserRouter>
        </CookieConsentProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
