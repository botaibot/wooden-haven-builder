
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import RoofInfoDialog from "./RoofInfoDialog";
import FloorInfoDialog from "./FloorInfoDialog";
import FoundationInfoDialog from "./FoundationInfoDialog";
import FrameThicknessDialog from "./FrameThicknessDialog";

interface HouseVisualizationProps {
  houseType: string;
}

const HouseVisualization = ({ houseType }: HouseVisualizationProps) => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Конструкция дома</h3>
        <p className="text-sm text-gray-600">Нажмите на элементы для подробной информации</p>
      </div>
      
      <div className="relative w-full max-w-md mx-auto">
        {/* Фоновое изображение дома */}
        <img 
          src="/lovable-uploads/91ae336b-7848-48df-b3c7-bdaf65b1669d.png" 
          alt="Схема дома" 
          className="w-full h-auto rounded-lg shadow-sm"
        />
        
        {/* Интерактивные кнопки для разных элементов */}
        
        {/* Кровля */}
        <div className="absolute top-[10%] right-[20%]">
          <RoofInfoDialog />
        </div>

        {/* Стены/Каркас */}
        <div className="absolute top-[40%] left-[10%]">
          <FrameThicknessDialog houseType={houseType} />
        </div>

        {/* Полы */}
        <div className="absolute bottom-[30%] right-[25%]">
          <FloorInfoDialog />
        </div>

        {/* Фундамент */}
        <div className="absolute bottom-[5%] left-[30%]">
          <FoundationInfoDialog />
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Все элементы конструкции соответствуют европейским стандартам качества
        </p>
      </div>
    </div>
  );
};

export default HouseVisualization;
