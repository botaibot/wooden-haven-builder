import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Furniture = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative py-16" style={{ backgroundImage: "url('/lovable-uploads/705016e4-5ccb-4d56-8491-26cbb6ec8d72.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Мебель</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Деревянная мебель ручной работы для вашего дома
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Наши мебельные коллекции</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Add furniture cards here */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Furniture;
