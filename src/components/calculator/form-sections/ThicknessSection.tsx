
import React from "react";
import { Ruler } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface ThicknessSectionProps {
  form: UseFormReturn<FormValues>;
}

const ThicknessSection = ({ form }: ThicknessSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="thickness"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Ruler className="h-5 w-5" /> Толщина {form.watch("houseType") === "frame" ? "каркаса" : "бруса"}
          </FormLabel>
          <FormDescription>
            Стандартная толщина: 200 мм
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ThicknessSection;
