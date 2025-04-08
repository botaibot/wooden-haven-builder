
import React, { useEffect, lazy, Suspense } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";
import HouseTypeSelector from "./HouseTypeSelector";
import DimensionsSection from "./form-sections/DimensionsSection";
import ThicknessSection from "./form-sections/ThicknessSection";
import RoofInsulationSection from "./form-sections/RoofInsulationSection";
import FoundationSection from "./form-sections/FoundationSection";
import SolarPanelsSection from "./form-sections/SolarPanelsSection";
import OutdoorSpacesSection from "./form-sections/OutdoorSpacesSection";

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
      <FoundationSection 
        form={form} 
        metalSupportsCount={metalSupportsCount} 
        metalSupportsCost={metalSupportsCost} 
      />
      <SolarPanelsSection form={form} />
      <OutdoorSpacesSection form={form} />
    </>
  );
};

export default HouseCalculatorForm;
