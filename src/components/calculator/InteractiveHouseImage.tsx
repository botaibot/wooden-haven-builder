
import React from "react";
import { Button } from "@/components/ui/button";
import RoofInfoDialog from "./RoofInfoDialog";
import FloorInfoDialog from "./FloorInfoDialog";
import FoundationInfoDialog from "./FoundationInfoDialog";
import FrameThicknessDialog from "./FrameThicknessDialog";

interface InteractiveHouseImageProps {
  houseType: string;
}

const InteractiveHouseImage = ({ houseType }: InteractiveHouseImageProps) => {
  return (
    <div className="relative inline-block">
      <img 
        src="/lovable-uploads/f970ba98-1128-4b9a-8186-fd09325c62ad.png" 
        alt="Интерактивная схема дома" 
        className="w-full max-w-2xl h-auto rounded-lg shadow-lg border border-gray-200"
      />
      
      {/* Кнопка для кровли */}
      <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2">
        <RoofInfoDialog />
      </div>
      
      {/* Кнопка для каркаса/бруса */}
      <div className="absolute top-[45%] left-[60%] transform -translate-x-1/2">
        <FrameThicknessDialog houseType={houseType} />
      </div>
      
      {/* Кнопка для полов */}
      <div className="absolute bottom-[35%] left-[40%] transform -translate-x-1/2">
        <FloorInfoDialog />
      </div>
      
      {/* Кнопка для фундамента */}
      <div className="absolute bottom-[15%] left-[50%] transform -translate-x-1/2">
        <FoundationInfoDialog />
      </div>
    </div>
  );
};

export default InteractiveHouseImage;
