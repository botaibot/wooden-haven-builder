
import React from "react";
import { ShieldCheck } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import { PRICES, formatCurrency } from "../constants";

interface FireProtectionSectionProps {
  form: UseFormReturn<FormValues>;
}

const FireProtectionSection = ({ form }: FireProtectionSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="fireProtection"
      render={({ field }) => (
        <FormItem className="border p-4 rounded-lg bg-red-50/30">
          <div className="flex flex-row items-center justify-between">
            <FormLabel className="text-lg font-medium flex items-center gap-2 cursor-pointer">
              <ShieldCheck className="h-5 w-5 text-red-600" /> 
              <span>Противопожарная подготовка</span>
            </FormLabel>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </div>
          
          {field.value && (
            <div className="mt-3 bg-white p-3 rounded-md border border-red-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {PRICES.FIRE_PROTECTION.points} точек (розетки и выключатели)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Защита от короткого замыкания и перегрузок
                  </p>
                </div>
                <p className="font-semibold text-lg">
                  {formatCurrency(PRICES.FIRE_PROTECTION.base_price)}
                </p>
              </div>
            </div>
          )}
          
          <FormDescription className="mt-2">
            <div className="text-sm">
              <p className="font-medium text-red-800 mb-1">Защитите свой дом от пожара!</p>
              <p>Новейшая технология предотвращения возгораний включает:</p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li>Автоматические выключатели с защитой от перегрузок</li>
                <li>Термостойкая проводка с двойной изоляцией</li>
                <li>Датчики температуры в местах потенциальных перегревов</li>
                <li>Защита электрической сети от скачков напряжения</li>
              </ul>
            </div>
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FireProtectionSection;
