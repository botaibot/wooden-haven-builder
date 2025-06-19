
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
            🏡 Деревянные дома и строительные материалы <br />
            <span className="text-nature">для климата Канарских островов</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <strong>Каркасные и клеёные конструкции.</strong><br />
            Материалы напрямую от европейских производителей.<br />
            Проекты, доставка и поддержка — по всем островам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild className="bg-wood hover:bg-wood-dark text-white px-6 py-5 text-base">
              <Link to="/houses">Посмотреть проекты домов</Link>
            </Button>
            <Button asChild variant="outline" className="border-wood text-wood hover:bg-wood/10 px-6 py-5 text-base">
              <Link to="/materials" className="flex items-center gap-2">
                Открыть каталог материалов <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Правая колонка с изображением */}
        <div className="relative h-[400px] md:h-auto overflow-hidden rounded-xl shadow-xl">
          <img 
            src="/lovable-uploads/a4b5c717-bc71-4cea-9f55-48e6636fed50.png" 
            alt="Casas de madera Bosque Nórdico en las montañas de las Islas Canarias - construcción ecológica con madera laminada encolada"
            title="Casas de madera en las montañas de Tenerife - Bosque Nórdico"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
