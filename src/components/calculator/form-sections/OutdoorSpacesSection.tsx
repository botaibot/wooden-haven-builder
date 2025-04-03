
import React from "react";
import { TreePalm } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface OutdoorSpacesSectionProps {
  form: UseFormReturn<FormValues>;
}

const OutdoorSpacesSection = ({ form }: OutdoorSpacesSectionProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="terrace"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <TreePalm className="h-5 w-5" /> Терраса
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
            <FormDescription>
              Добавить террасу к дому (200 €/м²)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {form.watch("terrace") && (
        <FormField
          control={form.control}
          name="terraceSize"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Площадь террасы</FormLabel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Slider
                      value={[value ?? 10]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(vals) => onChange(vals[0])}
                      className="w-full"
                    />
                  </FormControl>
                  <span className="ml-4 min-w-16 text-right">
                    {value ?? 0} м²
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 м²</span>
                  <span>100 м²</span>
                </div>
              </div>
              <FormDescription>
                Укажите желаемую площадь террасы в квадратных метрах.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="canopy"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <TreePalm className="h-5 w-5" /> Навес
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
            <FormDescription>
              Добавить навес (200 €/м²)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {form.watch("canopy") && (
        <FormField
          control={form.control}
          name="canopySize"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Площадь навеса</FormLabel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Slider
                      value={[value ?? 5]}
                      min={0}
                      max={50}
                      step={1}
                      onValueChange={(vals) => onChange(vals[0])}
                      className="w-full"
                    />
                  </FormControl>
                  <span className="ml-4 min-w-16 text-right">
                    {value ?? 0} м²
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 м²</span>
                  <span>50 м²</span>
                </div>
              </div>
              <FormDescription>
                Укажите желаемую площадь навеса в квадратных метрах.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
};

export default OutdoorSpacesSection;
