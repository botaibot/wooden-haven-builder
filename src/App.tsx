
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
import About from "./pages/About";
import Contact from "./pages/Contact";
import Furniture from "./pages/Furniture";
import Calculator from "./pages/Calculator";
import NotFound from "./pages/NotFound";
import ChatAssistant from "@/components/ChatAssistant";
import { CartProvider } from "./context/CartContext";
import { CookieConsentProvider } from "./components/cookie-consent/CookieConsentContext";
import { CookieBanner } from "./components/cookie-consent/CookieBanner";

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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/furniture" element={<Furniture />} />
              <Route path="/calculator" element={<Calculator />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Добавляем ChatAssistant глобально */}
            <ChatAssistant />
            {/* Добавляем CookieBanner глобально */}
            <CookieBanner />
          </BrowserRouter>
        </CookieConsentProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
