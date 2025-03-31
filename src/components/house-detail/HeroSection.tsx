
import React from "react";
import { HouseData } from "@/data/housesData";

interface HeroSectionProps {
  house: HouseData;
}

const HeroSection = ({ house }: HeroSectionProps) => {
  return (
    <div className="relative h-[60vh] lg:h-[70vh]">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <img 
        src={house.images[0]} 
        alt={house.title} 
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{house.title}</h1>
          <p className="text-2xl text-white/90">{house.area}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
