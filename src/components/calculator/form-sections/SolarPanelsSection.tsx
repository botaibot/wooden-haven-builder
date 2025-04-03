
import React from "react";
import { Sun } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import { formatCurrency } from "../constants";

interface SolarPanelsSectionProps {
  form: UseFormReturn<FormValues>;
}

const SolarPanelsSection = ({ form }: SolarPanelsSectionProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="solarPanels"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <Sun className="h-5 w-5" /> Солнечные панели
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
            <FormDescription>
              Добавить комплект солнечных панелей (1400 €/кВт)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {form.watch("solarPanels") && (
        <FormField
          control={form.control}
          name="solarPower"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Мощность системы (кВт)</FormLabel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Slider
                      value={[value ?? 5]}
                      min={5}
                      max={20}
                      step={1}
                      onValueChange={(vals) => onChange(vals[0])}
                      className="w-full"
                    />
                  </FormControl>
                  <span className="ml-4 min-w-16 text-right">
                    {value ?? 5} кВт
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5 кВт</span>
                  <span>20 кВт</span>
                </div>
              </div>
              <FormDescription>
                <div className="mt-2 space-y-1 bg-slate-50 p-3 rounded-md">
                  <p>Комплектация системы:</p>
                  <ul className="list-disc pl-5 text-sm mt-1">
                    <li>Солнечные панели</li>
                    <li>Инвертор (преобразователь)</li>
                    <li>Аккумуляторы</li>
                    <li>Монтаж "под ключ"</li>
                  </ul>
                  <p className="mt-2 text-sm font-medium">Стоимость: {formatCurrency(value * 1400)}</p>
                </div>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
};

export default SolarPanelsSection;
