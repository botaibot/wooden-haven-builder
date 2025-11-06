
import React from "react";
import { HouseData } from "@/data/housesData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Euro } from "lucide-react";

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
          {house.id !== 6 && house.id !== 8 && <p className="text-2xl text-white/90 mb-6">{house.area}</p>}
          
          {house.id !== 6 && house.id !== 8 && (
            <div className="flex flex-col md:flex-row gap-4 justify-start">
              <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
                <div className="flex flex-col items-center">
                  <span className="font-bold">СИЛОВОЙ КАРКАС</span>
                  <span className="flex items-center gap-1">
                    {house.frameCost} <Euro size={18} />
                  </span>
                </div>
              </Button>
              
              <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
                <div className="flex flex-col items-center">
                  <span className="font-bold">ТЁПЛЫЙ КОНТУР</span>
                  <span className="flex items-center gap-1">
                    {house.warmContourCost} <Euro size={18} />
                  </span>
                </div>
              </Button>
              
              <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
                <div className="flex flex-col items-center">
                  <span className="font-bold">ПОД КЛЮЧ</span>
                  <span className="flex items-center gap-1">
                    {house.turnkeyCost} <Euro size={18} />
                  </span>
                </div>
              </Button>
              
              <Button asChild className="bg-nature-dark hover:bg-nature-dark/90 text-white text-lg rounded-full px-8 py-6">
                <Link to="/contact" className="flex flex-col items-center">
                  <span className="font-bold">ОСТАВИТЬ ЗАЯВКУ</span>
                </Link>
              </Button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
