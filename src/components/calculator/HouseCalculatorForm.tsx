
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

interface HouseCalculatorFormProps {
  form: UseFormReturn<FormValues>;
  foundationCost: number;
}

const HouseCalculatorForm = ({ form, foundationCost }: HouseCalculatorFormProps) => {
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
      <FloorSection form={form} />
      <FoundationSection 
        form={form} 
        foundationCost={foundationCost}
      />
      <SolarPanelsSection form={form} />
      <OutdoorSpacesSection form={form} />
      <FireProtectionSection form={form} />
    </>
  );
};

export default HouseCalculatorForm;
