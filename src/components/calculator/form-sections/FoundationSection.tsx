
import React from "react";
import { Home } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import FoundationInfoDialog from "../FoundationInfoDialog";
import { formatCurrency } from "../constants";

interface FoundationSectionProps {
  form: UseFormReturn<FormValues>;
  metalSupportsCount: number;
  metalSupportsCost: number;
}

const FoundationSection = ({ form, metalSupportsCount, metalSupportsCost }: FoundationSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="foundation"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Home className="h-5 w-5" /> Тип фундамента
            <FoundationInfoDialog />
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип фундамента" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="adjustable_metal">Регулируемая металлическая опора</SelectItem>
              <SelectItem value="monolithic">Монолитный фундамент (по запросу)</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>
            {field.value === "adjustable_metal" && (
              <div className="mt-2 space-y-1">
                <p>Базовая комплектация включает регулируемые металлические опоры толщиной 6 мм.</p>
                <p><strong>Необходимое количество:</strong> {metalSupportsCount} шт.</p>
                <p><strong>Стоимость опор:</strong> {formatCurrency(metalSupportsCost)}</p>
                <p className="text-xs text-muted-foreground">(примерно 7 опор на каждые 10 м² площади, 60 € за опору + 40 € за установку)</p>
              </div>
            )}
            {field.value === "monolithic" && (
              <span className="text-amber-600">
                Стоимость монолитного фундамента зависит от многих факторов и требует индивидуального расчета. 
                Пожалуйста, проконсультируйтесь с нашими специалистами.
              </span>
            )}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FoundationSection;
