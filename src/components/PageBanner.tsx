
import React from "react";

interface PageBannerProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const PageBanner = ({ title, description, backgroundImage }: PageBannerProps) => {
  return (
    <div 
      className="relative py-16" 
      style={{ 
        backgroundImage: `url('${backgroundImage}')`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
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
    </div>
  );
};

export default PageBanner;
