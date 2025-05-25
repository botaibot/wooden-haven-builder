
import React from "react";
import { Layers } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import RoofInfoDialog from "../RoofInfoDialog";

interface RoofInsulationSectionProps {
  form: UseFormReturn<FormValues>;
}

const RoofInsulationSection = ({ form }: RoofInsulationSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="roofInsulation"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Layers className="h-5 w-5" /> Утепление крыши
            <RoofInfoDialog />
          </FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoofInsulationSection;
