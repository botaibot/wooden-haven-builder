
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HouseCalculator from "@/components/HouseCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="/lovable-uploads/b8b1f515-e933-44d7-b4bd-11b9a68157ab.png" 
          alt="Калькулятор стоимости дома" 
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Калькулятор стоимости дома</h1>
            <p className="text-xl text-white/90 mb-6">
              Настройте параметры вашего будущего дома и получите предварительную оценку стоимости
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <HouseCalculator />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;
