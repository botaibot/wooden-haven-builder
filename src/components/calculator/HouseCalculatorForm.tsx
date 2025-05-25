
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";
import HouseTypeSelector from "./HouseTypeSelector";
import DimensionsSection from "./form-sections/DimensionsSection";
import ThicknessSection from "./form-sections/ThicknessSection";
import RoofInsulationSection from "./form-sections/RoofInsulationSection";
import FoundationSection from "./form-sections/FoundationSection";
import SolarPanelsSection from "./form-sections/SolarPanelsSection";
import OutdoorSpacesSection from "./form-sections/OutdoorSpacesSection";
import FireProtectionSection from "./form-sections/FireProtectionSection";
import FloorSection from "./form-sections/FloorSection";
import HouseVisualization from "./HouseVisualization";

interface HouseCalculatorFormProps {
  form: UseFormReturn<FormValues>;
  metalSupportsCount: number;
  metalSupportsCost: number;
}

const HouseCalculatorForm = ({ form, metalSupportsCount, metalSupportsCost }: HouseCalculatorFormProps) => {
  const watchHouseType = form.watch("houseType");
  
  useEffect(() => {
    // Reset thickness when house type changes
    if (watchHouseType === "frame") {
      form.setValue("thickness", "120mm");
    } else {
      form.setValue("thickness", "100mm");
    }
  }, [watchHouseType, form]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Левая колонка - форма */}
      <div className="lg:col-span-2 space-y-8">
        <HouseTypeSelector form={form} />
        <DimensionsSection form={form} />
        <ThicknessSection form={form} />
        <RoofInsulationSection form={form} />
        <FloorSection form={form} />
        <FoundationSection 
          form={form} 
          metalSupportsCount={metalSupportsCount} 
          metalSupportsCost={metalSupportsCost} 
        />
        <SolarPanelsSection form={form} />
        <OutdoorSpacesSection form={form} />
        <FireProtectionSection form={form} />
      </div>

      {/* Правая колонка - визуализация */}
      <div className="lg:col-span-1">
        <div className="sticky top-4">
          <HouseVisualization houseType={watchHouseType} />
        </div>
      </div>
    </div>
  );
};

export default HouseCalculatorForm;
