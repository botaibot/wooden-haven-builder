
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
                <Sun className="h-5 w-5" /> Paneles solares
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
            <FormDescription>
              Añadir kit de paneles solares (1400 €/kW)
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
              <FormLabel>Potencia del sistema (kW)</FormLabel>
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
                    {value ?? 5} kW
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5 kW</span>
                  <span>20 kW</span>
                </div>
              </div>
              <FormDescription>
                <div className="mt-2 space-y-1 bg-slate-50 p-3 rounded-md">
                  <p>Configuración del sistema:</p>
                  <ul className="list-disc pl-5 text-sm mt-1">
                    <li>Paneles solares</li>
                    <li>Inversor (convertidor)</li>
                    <li>Baterías</li>
                    <li>Instalación "llave en mano"</li>
                  </ul>
                  <p className="mt-2 text-sm font-medium">Costo: {formatCurrency(value * 1400)}</p>
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
