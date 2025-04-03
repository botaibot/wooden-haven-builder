
import React from "react";
import { Ruler } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
            {form.watch("houseType") === "frame" && (
              <div className="text-sm mt-2">
                <p>Базовая комплектация каркасного дома включает:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Внутренняя обшивка: фанера 12 мм</li>
                  <li>Утеплитель: полистирол (стены, потолок — 80 мм, пол — 50 мм)</li>
                  <li>Влаговетрозащита Würth</li>
                  <li>Обрешётка 48 мм</li>
                  <li>Имитация бруса 19 мм (machihembrado) или OSB 18 мм</li>
                </ul>
              </div>
            )}
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
