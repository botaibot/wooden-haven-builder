
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HouseCalculator from "@/components/HouseCalculator";
import PageBanner from "@/components/PageBanner";

const Calculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Calculadora del coste de la casa" 
        description="Configure los parámetros de su futura casa y obtenga una estimación preliminar del coste"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

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
