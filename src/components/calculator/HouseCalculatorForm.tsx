
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
import FloorInfoDialog from "./FloorInfoDialog";

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
    <>
      <HouseTypeSelector form={form} />
      <DimensionsSection form={form} />
      <ThicknessSection form={form} />
      <RoofInsulationSection form={form} />
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Дополнительная информация</h3>
        <FloorInfoDialog />
      </div>
      
      <FoundationSection 
        form={form} 
        metalSupportsCount={metalSupportsCount} 
        metalSupportsCost={metalSupportsCost} 
      />
      <SolarPanelsSection form={form} />
      <OutdoorSpacesSection form={form} />
      <FireProtectionSection form={form} />
    </>
  );
};

export default HouseCalculatorForm;
