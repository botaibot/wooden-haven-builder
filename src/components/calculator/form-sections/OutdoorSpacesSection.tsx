
import React, { useState } from "react";
import { TreePalm, Calculator } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import MaterialCalculator from "@/components/MaterialCalculator";

interface OutdoorSpacesSectionProps {
  form: UseFormReturn<FormValues>;
}

const OutdoorSpacesSection = ({ form }: OutdoorSpacesSectionProps) => {
  const [terraceWidth, setTerraceWidth] = useState<number>(0);
  const [terraceLength, setTerraceLength] = useState<number>(0);
  const [canopyWidth, setCanopyWidth] = useState<number>(0);
  const [canopyLength, setCanopyLength] = useState<number>(0);

  const calculateTerraceArea = () => {
    const area = terraceWidth * terraceLength;
    if (area > 0) {
      form.setValue("terraceSize", area);
    }
  };

  const calculateCanopyArea = () => {
    const area = canopyWidth * canopyLength;
    if (area > 0) {
      form.setValue("canopySize", area);
    }
  };

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
        <>
          <div className="bg-green-50/30 p-4 rounded-md border border-green-100 mb-4">
            <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
              <Calculator className="h-4 w-4" /> Расчет площади террасы
            </h4>
            <p className="text-xs mb-3">Площадь = Длина × Ширина</p>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-xs block mb-1">Длина (м)</label>
                <Input 
                  type="number" 
                  min="0" 
                  step="0.1" 
                  value={terraceLength || ''} 
                  onChange={(e) => setTerraceLength(parseFloat(e.target.value) || 0)}
                  className="h-8"
                />
              </div>
              <div>
                <label className="text-xs block mb-1">Ширина (м)</label>
                <Input 
                  type="number" 
                  min="0" 
                  step="0.1" 
                  value={terraceWidth || ''} 
                  onChange={(e) => setTerraceWidth(parseFloat(e.target.value) || 0)}
                  className="h-8"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs">
                {terraceLength > 0 && terraceWidth > 0 ? `${terraceLength} × ${terraceWidth} = ${(terraceLength * terraceWidth).toFixed(1)} м²` : ''}
              </span>
              <Button size="sm" onClick={calculateTerraceArea}>Применить</Button>
            </div>
          </div>
          
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
        </>
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
        <>
          <div className="bg-green-50/30 p-4 rounded-md border border-green-100 mb-4">
            <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
              <Calculator className="h-4 w-4" /> Расчет площади навеса
            </h4>
            <p className="text-xs mb-3">Площадь = Длина × Ширина</p>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-xs block mb-1">Длина (м)</label>
                <Input 
                  type="number" 
                  min="0" 
                  step="0.1" 
                  value={canopyLength || ''} 
                  onChange={(e) => setCanopyLength(parseFloat(e.target.value) || 0)}
                  className="h-8"
                />
              </div>
              <div>
                <label className="text-xs block mb-1">Ширина (м)</label>
                <Input 
                  type="number" 
                  min="0" 
                  step="0.1" 
                  value={canopyWidth || ''} 
                  onChange={(e) => setCanopyWidth(parseFloat(e.target.value) || 0)}
                  className="h-8"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs">
                {canopyLength > 0 && canopyWidth > 0 ? `${canopyLength} × ${canopyWidth} = ${(canopyLength * canopyWidth).toFixed(1)} м²` : ''}
              </span>
              <Button size="sm" onClick={calculateCanopyArea}>Применить</Button>
            </div>
          </div>
        
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
        </>
      )}
    </>
  );
};

export default OutdoorSpacesSection;
