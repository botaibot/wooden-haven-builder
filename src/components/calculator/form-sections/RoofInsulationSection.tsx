
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
          <FormDescription>
            <div className="text-sm mt-2">
              <p>1. Балка крыши 140 мм x 60 мм или 160 мм x 60 мм</p>
              <p>2. Шпунтованная доска 19 мм</p>
              <p>3. Пароизоляция WURTH</p>
              <p>4. Обрешётка 95 мм x 45 мм</p>
              <p>5. Каменная вата</p>
              <p>6. Пароизоляция WURTH</p>
              <p>7. Обрешётка 48 мм x 48 мм</p>
              <p>8. OSB 18 мм</p>
              <p>9. Ветрозащита/влагозащита WURTH</p>
              <p>10. Черепица (Tegola)</p>
            </div>
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoofInsulationSection;
