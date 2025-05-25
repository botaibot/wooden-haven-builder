
import React from "react";
import { Ruler } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Ruler className="h-5 w-5" /> Толщина {form.watch("houseType") === "frame" ? "каркаса" : "бруса"}
            <FrameThicknessDialog houseType={form.watch("houseType")} />
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Выберите толщину" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {form.watch("houseType") === "frame" ? (
                <>
                  <SelectItem value="120mm">Базовая версия (120 мм)</SelectItem>
                  <SelectItem value="195mm">Усиленный (195 мм, +15% к стоимости)</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="100mm">Стандарт (100 мм)</SelectItem>
                  <SelectItem value="200mm">Усиленный (200 мм, +20% к стоимости)</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
          <FormDescription>
            {form.watch("houseType") === "glued_beam" && (
              <span className="text-amber-600">Уточните с менеджером возможность изготовления из бруса 200мм (требуется дополнительное время на доставку).</span>
            )}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ThicknessSection;
