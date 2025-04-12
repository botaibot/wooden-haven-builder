
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
          <FormDescription className="mt-2 text-sm space-y-1 bg-slate-50 p-3 rounded-md">
            <div className="space-y-1">
              <p>1. Viga del Techo 140 mm x 60 mm o 160 mm x 60 mm</p>
              <p>2. Machihembrado 19 mm</p>
              <p>3. Barrera de Vapor WURTH</p>
              <p>4. Rastrelos 95 mm x 45 mm</p>
              <p>5. Lana de Roca</p>
              <p>6. Barrera de Vapor WURTH</p>
              <p>7. Rastrelos 48 mm x 48 mm</p>
              <p>8. OSB 18 mm</p>
              <p>9. Barrera de humedad/viento WURTH</p>
              <p>10. Tegola</p>
            </div>
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoofInsulationSection;
