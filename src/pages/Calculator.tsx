
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HouseCalculator from "@/components/HouseCalculator";
import PageBanner from "@/components/PageBanner";
import ChatAssistant from "@/components/ChatAssistant";

const Calculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Калькулятор стоимости дома" 
        description="Настройте параметры вашего будущего дома и получите предварительную оценку стоимости"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <HouseCalculator />
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Calculator;
