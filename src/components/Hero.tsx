
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
        {/* Левая колонка с текстом */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wood-dark mb-4 animate-fade-in">
            Деревянные дома из клееного бруса и каркасные <br />
            <span className="text-nature">на Канарских островах</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Строительство экологичных деревянных домов и продажа высококачественных строительных материалов на Канарских островах. Более 6 лет опыта работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild className="bg-wood hover:bg-wood-dark text-white px-8 py-6 text-lg">
              <Link to="/houses">Наши проекты домов</Link>
            </Button>
            <Button asChild variant="outline" className="border-wood text-wood hover:bg-wood/10 px-8 py-6 text-lg">
              <Link to="/contact" className="flex items-center gap-2">
                Связаться с нами <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Правая колонка с изображением */}
        <div className="relative h-[400px] md:h-auto overflow-hidden rounded-xl shadow-xl">
          <img 
            src="/lovable-uploads/18ed6fd7-42fa-44a8-83a0-f5c39131b3aa.png" 
            alt="Деревянные дома Bosque Nórdico в горах Канарских островов - экологичное строительство из клееного бруса"
            title="Деревянные дома в горах Тенерифе"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
