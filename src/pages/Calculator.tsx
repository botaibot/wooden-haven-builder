
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HouseCalculator from "@/components/HouseCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative py-16" style={{ backgroundImage: "url('/lovable-uploads/b8b1f515-e933-44d7-b4bd-11b9a68157ab.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Калькулятор стоимости дома</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Настройте параметры вашего будущего дома и получите предварительную оценку стоимости
          </p>
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
