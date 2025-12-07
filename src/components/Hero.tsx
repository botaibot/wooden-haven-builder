
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import materialsHeroImage from "@/assets/materials-hero.jpg";

const Hero = () => {
  return (
    <>
      {/* Desktop version - side by side */}
      <div className="hidden lg:flex relative min-h-[80vh] items-center">
        {/* Two-column background */}
        <div className="absolute inset-0 grid grid-cols-2">
          {/* Left side - Materials background */}
          <div 
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${materialsHeroImage})`
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(246, 242, 236, 0.35) 0%, rgba(246, 242, 236, 0.2) 60%, rgba(246, 242, 236, 0.05) 100%)'
              }}
            />
          </div>
          
          {/* Right side - Houses background */}
          <div 
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/lovable-uploads/033cd954-5a49-4079-855a-68de317dc094.png")'
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(270deg, rgba(246, 242, 236, 0.35) 0%, rgba(246, 242, 236, 0.2) 60%, rgba(246, 242, 236, 0.05) 100%)'
              }}
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          {/* Hidden H1 for SEO */}
          <h1 className="sr-only">
            Casas prefabricadas de madera y materiales de construcción en las Islas Canarias - Bosque Nórdico
          </h1>
          
          {/* Two blocks grid */}
          <div className="grid grid-cols-2 gap-16">
            
            {/* Block 1 - MATERIALS (left) */}
            <div className="flex flex-col justify-center animate-fade-in p-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wood-dark mb-4" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.8)' }}>
                Materiales de madera
              </h2>
              <p className="text-2xl text-nature-dark mb-6" style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.9), 0 0 15px rgba(255,255,255,0.8)' }}>
                Madera estructural C24, OSB, tarima, machihembrado.<br />
                Vigas laminadas GL24, rastreles y accesorios.<br />
                <strong>Importación directa desde Europa.</strong>
              </p>
              <div>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white border-none px-6 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-amber hover:animate-none">
                  <Link to="/materials" className="flex items-center gap-2">
                    Abrir catálogo de materiales <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Block 2 - CASAS (right) */}
            <div className="flex flex-col justify-start animate-fade-in p-6" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
                Casas prefabricadas
              </h2>
              <p className="text-xl text-white mb-6" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)' }}>
                Entramado ligero BOSQUE PLATFORM y madera laminada.<br />
                <strong>Proyectos estándar con precio cerrado o diseños a medida.</strong>
              </p>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-emerald hover:animate-none">
                  <Link to="/houses" className="flex items-center gap-2">
                    Ver proyectos de casas <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile version - stacked with separate backgrounds */}
      <div className="lg:hidden">
        {/* Hidden H1 for SEO */}
        <h1 className="sr-only">
          Casas prefabricadas de madera y materiales de construcción en las Islas Canarias - Bosque Nórdico
        </h1>

        {/* Block 1 - MATERIALS */}
        <div 
          className="relative min-h-[50vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${materialsHeroImage})`
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(246, 242, 236, 0.4) 0%, rgba(246, 242, 236, 0.25) 100%)'
            }}
          />
          <div className="container mx-auto px-4 relative z-20 py-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.8)' }}>
                Materiales de madera
              </h2>
              <p className="text-lg text-nature-dark mb-6" style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.9), 0 0 15px rgba(255,255,255,0.8)' }}>
                Madera estructural C24, OSB, tarima, machihembrado.<br />
                Vigas laminadas GL24, rastreles y accesorios.<br />
                <strong>Importación directa desde Europa.</strong>
              </p>
              <div>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white border-none px-6 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-amber hover:animate-none">
                  <Link to="/materials" className="flex items-center gap-2">
                    Abrir catálogo de materiales <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2 - CASAS */}
        <div 
          className="relative min-h-[50vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/lovable-uploads/033cd954-5a49-4079-855a-68de317dc094.png")'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(246, 242, 236, 0.4) 0%, rgba(246, 242, 236, 0.25) 100%)'
            }}
          />
          <div className="container mx-auto px-4 relative z-20 py-8">
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
                Casas prefabricadas
              </h2>
              <p className="text-lg text-white mb-6" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)' }}>
                Entramado ligero BOSQUE PLATFORM y madera laminada.<br />
                <strong>Proyectos estándar con precio cerrado o diseños a medida.</strong>
              </p>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-emerald hover:animate-none">
                  <Link to="/houses" className="flex items-center gap-2">
                    Ver proyectos de casas <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
