
import React from "react";
import { ArrowRight, Package, Home } from "lucide-react";
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
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(246, 242, 236, 0.95) 0%, rgba(246, 242, 236, 0.85) 50%, rgba(246, 242, 236, 0.7) 100%)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        {/* Two blocks grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Block 1 - MATERIALS (left) */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-wood/10 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-nature" />
              <span className="text-sm font-semibold text-nature uppercase tracking-wider">Materiales</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-6">
              Materiales de madera
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">•</span>
                Madera estructural C24, OSB, tarima, machihembrado.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">•</span>
                Vigas laminadas GL24, rastreles y accesorios.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">•</span>
                Importación directa desde Europa.
              </li>
            </ul>
            <Button asChild variant="outline" className="border-nature text-nature hover:bg-nature/10 px-6 py-5 text-base w-full sm:w-auto">
              <Link to="/materials" className="flex items-center gap-2">
                Abrir catálogo de materiales <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Block 2 - CASAS (right) */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-wood/10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-8 h-8 text-wood" />
              <span className="text-sm font-semibold text-wood uppercase tracking-wider">Casas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-6">
              Casas prefabricadas BOSQUE
            </h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-wood mt-1">•</span>
                Entramado ligero BOSQUE PLATFORM y madera laminada.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wood mt-1">•</span>
                Proyectos estándar con precio cerrado o diseños a medida.
              </li>
            </ul>
            <Button asChild className="bg-wood hover:bg-wood-dark text-white px-6 py-5 text-base w-full sm:w-auto">
              <Link to="/houses" className="flex items-center gap-2">
                Ver proyectos de casas <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
