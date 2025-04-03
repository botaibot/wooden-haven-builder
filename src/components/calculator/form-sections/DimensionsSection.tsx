
import React from "react";
import { Home, HouseLine } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface DimensionsSectionProps {
  form: UseFormReturn<FormValues>;
}

const DimensionsSection = ({ form }: DimensionsSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="width"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <Home className="h-5 w-5" /> Ширина дома (м)
              </FormLabel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Slider
                      value={[value]}
                      min={3}
                      max={15}
                      step={0.5}
                      onValueChange={(vals) => onChange(vals[0])}
                      className="w-full"
                    />
                  </FormControl>
                  <span className="ml-4 min-w-16 text-right">
                    {value} м
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3 м</span>
                  <span>15 м</span>
                </div>
              </div>
              <FormDescription>
                Укажите желаемую ширину дома.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="length"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <HouseLine className="h-5 w-5" /> Длина дома (м)
              </FormLabel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Slider
                      value={[value]}
                      min={3}
                      max={20}
                      step={0.5}
                      onValueChange={(vals) => onChange(vals[0])}
                      className="w-full"
                    />
                  </FormControl>
                  <span className="ml-4 min-w-16 text-right">
                    {value} м
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3 м</span>
                  <span>20 м</span>
                </div>
              </div>
              <FormDescription>
                Укажите желаемую длину дома.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="bg-slate-50 p-4 rounded-md border border-slate-100">
        <h3 className="text-md font-medium mb-2">Площадь дома: {(form.watch("width") * form.watch("length")).toFixed(1)} м²</h3>
      </div>
    </>
  );
};

export default DimensionsSection;
