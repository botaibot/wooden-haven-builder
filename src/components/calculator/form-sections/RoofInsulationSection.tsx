
import React from "react";
import { Layers } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import InteractiveHouseImage from "../InteractiveHouseImage";

interface RoofInsulationSectionProps {
  form: UseFormReturn<FormValues>;
}

const RoofInsulationSection = ({ form }: RoofInsulationSectionProps) => {
  const watchHouseType = form.watch("houseType");
  
  return (
    <FormField
      control={form.control}
      name="roofInsulation"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Layers className="h-5 w-5" /> Утепление крыши
          </FormLabel>
          <FormDescription>
            Изучите структуру дома и его элементы на интерактивной схеме ниже
          </FormDescription>
          
          <div className="mt-6 flex justify-center">
            <InteractiveHouseImage houseType={watchHouseType} />
          </div>
          
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoofInsulationSection;
