
import React from "react";

interface PageBannerProps {
  title: string;
  description: string;
  backgroundImage: string;
  backgroundPosition?: string;
}

const PageBanner = ({ title, description, backgroundImage, backgroundPosition = "center" }: PageBannerProps) => {
  return (
    <div 
      className="relative py-16" 
      style={{ 
        backgroundImage: `url('${backgroundImage}')`, 
        backgroundSize: "cover", 
        backgroundPosition: backgroundPosition, 
        backgroundRepeat: "no-repeat" 
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">{title}</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
          {description}
        </p>
      </div>
      <img 
        src={backgroundImage}
        alt="Fondo de banner - casas de madera Bosque Nórdico en las Islas Canarias"
        title="Banner de página - proyectos de construcción de madera"
        className="hidden"
      />
    </div>
  );
};

export default PageBanner;
