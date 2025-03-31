
import React from "react";
import { HouseData } from "@/data/housesData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PriceSectionProps {
  house: HouseData;
}

const PriceSection = ({ house }: PriceSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h3 className="text-xl font-semibold p-6 border-b border-gray-200">Стоимость строительства</h3>
      <div className="p-6 space-y-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-bold text-xl mb-2">Силовой каркас</h4>
          <p className="text-xl text-wood-dark font-bold">{house.frameCost}</p>
          <p className="text-sm text-gray-600 mt-1">Базовая комплектация, без отделки</p>
        </div>
        
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-bold text-xl mb-2">Тёплый контур</h4>
          <p className="text-xl text-wood-dark font-bold">{house.warmContourCost}</p>
          <p className="text-sm text-gray-600 mt-1">С утеплением и базовыми коммуникациями</p>
        </div>
        
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-bold text-xl mb-2">Под ключ</h4>
          <p className="text-xl text-wood-dark font-bold">{house.turnkeyCost}</p>
          <p className="text-sm text-gray-600 mt-1">Полностью готовый дом с отделкой</p>
        </div>
        
        <Button asChild className="w-full bg-nature-dark hover:bg-nature-dark/90">
          <Link to="/contact" className="flex items-center justify-center gap-2">
            Оставить заявку
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PriceSection;
