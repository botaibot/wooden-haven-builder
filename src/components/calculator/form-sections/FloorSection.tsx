
import React from "react";
import { LayoutGrid } from "lucide-react";
import { FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import FloorInfoDialog from "../FloorInfoDialog";

interface FloorSectionProps {
  form: UseFormReturn<FormValues>;
}

const FloorSection = ({ form }: FloorSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="thickness" // Using the existing thickness field
      render={() => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <LayoutGrid className="h-5 w-5" /> Толщина полов
            <FloorInfoDialog />
          </FormLabel>
          <FormDescription>
            <div className="text-sm mt-2">
              <p>1 Клеёный брус 120 мм x 120 мм</p>
              <p>2 Балка класса C24 195 мм x 45 мм</p>
              <p>3 Опорная рейка 48 мм x 48 мм</p>
              <p>4 OSB 9 мм или 12 мм</p>
              <p>5 Пенополистирольная панель</p>
              <p>6 OSB 22 мм</p>
            </div>
          </FormDescription>
        </FormItem>
      )}
    />
  );
};

export default FloorSection;
