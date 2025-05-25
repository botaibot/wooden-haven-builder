
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
    <div className="bg-gradient-to-b from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Конструкция дома</h3>
        <p className="text-sm text-gray-600">Изучите элементы конструкции</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Левая колонка - описание и кнопки */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Кровля
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Многослойная структура с качественной изоляцией и вентиляцией
            </p>
            <RoofInfoDialog />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {houseType === "frame" ? "Каркас" : "Клееный брус"}
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              {houseType === "frame" 
                ? "Деревянный каркас с утеплением и отделкой"
                : "Экологичный клееный брус высокого качества"
              }
            </p>
            <FrameThicknessDialog houseType={houseType} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Полы
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Теплые и прочные полы с качественной изоляцией
            </p>
            <FloorInfoDialog />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              Фундамент
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Регулируемые металлические опоры для быстрой установки
            </p>
            <FoundationInfoDialog />
          </div>
        </div>

        {/* Правая колонка - увеличенная картинка */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src="/lovable-uploads/3b9272a3-6878-4ead-a217-7733d15c341f.png" 
            alt="Схема дома" 
            className="w-full max-w-lg h-auto rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Все элементы конструкции соответствуют европейским стандартам качества
        </p>
      </div>
    </div>
  );
};

export default HouseVisualization;
