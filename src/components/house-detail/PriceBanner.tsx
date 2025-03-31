
import React from "react";
import { HouseData } from "@/data/housesData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PriceBannerProps {
  house: HouseData;
}

const PriceBanner = ({ house }: PriceBannerProps) => {
  return (
    <div className="relative mt-12">
      <img 
        src={house.images[0]} 
        alt={house.title}
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
              <div className="flex flex-col items-center">
                <span className="font-bold">СИЛОВОЙ КАРКАС</span>
                <span>{house.frameCost}</span>
              </div>
            </Button>
            
            <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
              <div className="flex flex-col items-center">
                <span className="font-bold">ТЁПЛЫЙ КОНТУР</span>
                <span>{house.warmContourCost}</span>
              </div>
            </Button>
            
            <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
              <div className="flex flex-col items-center">
                <span className="font-bold">ПОД КЛЮЧ</span>
                <span>{house.turnkeyCost}</span>
              </div>
            </Button>
            
            <Button asChild className="bg-nature-dark hover:bg-nature-dark/90 text-white text-lg rounded-full px-8 py-6">
              <Link to="/contact" className="flex flex-col items-center">
                <span className="font-bold">ОСТАВИТЬ ЗАЯВКУ</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBanner;
