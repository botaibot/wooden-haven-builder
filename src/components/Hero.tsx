
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/033cd954-5a49-4079-855a-68de317dc094.png")'
        }}
      />
      
      {/* Gradient overlay - light on left where text is, transparent on right where image shows */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(246, 242, 236, 0.95) 0%, rgba(246, 242, 236, 0.8) 40%, rgba(246, 242, 236, 0.3) 70%, transparent 100%)'
        }}
      />
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
        {/* Левая колонка с текстом */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wood-dark mb-4 animate-fade-in">
            Casas de madera y materiales de construcción <br />
            <span className="text-nature">para el clima de las Islas Canarias</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <strong>Estructuras de entramado ligero y madera laminada.</strong><br />
            Materiales directamente de fabricantes europeos.<br />
            Proyectos, entrega y soporte — en todas las islas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild className="bg-wood hover:bg-wood-dark text-white px-5 py-4 text-base">
              <Link to="/houses">Ver proyectos de casas</Link>
            </Button>
            <Button asChild variant="outline" className="border-wood text-wood hover:bg-wood/10 px-5 py-4 text-base">
              <Link to="/materials" className="flex items-center gap-2">
                Abrir catálogo de materiales <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Правая колонка - теперь пустая, так как фон занимает всю область */}
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
};

export default Hero;
