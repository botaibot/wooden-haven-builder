
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
      
      <div className="container mx-auto px-4 relative z-20">
        {/* Two blocks grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Block 1 - MATERIALS (left) */}
          <div className="flex flex-col justify-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wood-dark mb-4">
              Materiales de madera
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Madera estructural C24, OSB, tarima, machihembrado.<br />
              Vigas laminadas GL24, rastreles y accesorios.<br />
              <strong>Importación directa desde Europa.</strong>
            </p>
            <div>
              <Button asChild variant="outline" className="border-wood text-wood hover:bg-wood/10 px-5 py-4 text-base">
                <Link to="/materials" className="flex items-center gap-2">
                  Abrir catálogo de materiales <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Block 2 - CASAS (right) */}
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wood-dark mb-4">
              Casas prefabricadas <span className="text-nature">BOSQUE</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Entramado ligero BOSQUE PLATFORM y madera laminada.<br />
              <strong>Proyectos estándar con precio cerrado o diseños a medida.</strong>
            </p>
            <div>
              <Button asChild className="bg-wood hover:bg-wood-dark text-white px-5 py-4 text-base">
                <Link to="/houses">Ver proyectos de casas</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
