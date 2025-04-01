
import React, { useState } from "react";
import { HouseData } from "@/data/housesData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FloorPlanSectionProps {
  house: HouseData;
}

const FloorPlanSection = ({ house }: FloorPlanSectionProps) => {
  const [activeFloor, setActiveFloor] = useState(1);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-4 bg-gray-50">
        <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg bg-white border border-gray-200">
          <img 
            src={house.floorPlanImage} 
            alt="План этажа" 
            className="w-full h-full object-contain"
          />
        </AspectRatio>
      </div>

      <div className="p-6 md:p-6">
        <h2 className="text-2xl font-bold text-wood-darkest mb-6">ПЛАН БУДУЩЕГО ДОМА</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-2xl font-bold text-nature-dark">{house.area}</p>
            <p className="text-gray-600">общая площадь</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-nature-dark">{house.dimensions}</p>
            <p className="text-gray-600">линейные размеры</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-nature-dark">{house.floors}</p>
            <p className="text-gray-600">этажа</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Спальни</span>
            <span className="font-medium">{house.bedrooms}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Санузлы</span>
            <span className="font-medium">{house.bathrooms}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Балкон</span>
            <span className="font-medium">{house.balcony ? 'Есть' : 'Нет'}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Терраса</span>
            <span className="font-medium">{house.terrace ? 'Есть' : 'Нет'}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Крыльцо</span>
            <span className="font-medium">{house.porch ? 'Есть' : 'Нет'}</span>
          </div>
        </div>
        
        {house.floors > 1 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-center space-x-4">
              {Array.from({ length: house.floors }, (_, i) => i + 1).map((floor) => (
                <Button 
                  key={floor}
                  className={activeFloor === floor ? "bg-wood-dark text-white" : "bg-gray-200 text-gray-800"}
                  onClick={() => setActiveFloor(floor)}
                >
                  {floor} этаж
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloorPlanSection;
