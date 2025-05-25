
import React from "react";
import { LayoutGrid } from "lucide-react";
import { FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface FloorSectionProps {
  form: UseFormReturn<FormValues>;
}

const FloorSection = ({ form }: FloorSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="thickness"
      render={() => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <LayoutGrid className="h-5 w-5" /> Толщина полов
          </FormLabel>
          <FormDescription>
            Подробная информация о конструкции полов доступна в визуализации справа
          </FormDescription>
        </FormItem>
      )}
    />
  );
};

export default FloorSection;
