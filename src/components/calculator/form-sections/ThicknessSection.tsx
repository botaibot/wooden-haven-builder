
import React from "react";
import { Ruler } from "lucide-react";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import FrameThicknessDialog from "../FrameThicknessDialog";

interface ThicknessSectionProps {
  form: UseFormReturn<FormValues>;
}

const ThicknessSection = ({ form }: ThicknessSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="thickness"
      render={() => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Ruler className="h-5 w-5" /> Grosor de la estructura
            <FrameThicknessDialog houseType="frame" />
          </FormLabel>
        </FormItem>
      )}
    />
  );
};

export default ThicknessSection;
