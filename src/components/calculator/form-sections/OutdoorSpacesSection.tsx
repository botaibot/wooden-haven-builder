
import React, { useState, useEffect } from "react";
import { TreePalm, Calculator } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface OutdoorSpacesSectionProps {
  form: UseFormReturn<FormValues>;
}

const OutdoorSpacesSection = ({ form }: OutdoorSpacesSectionProps) => {
  const [terraceWidth, setTerraceWidth] = useState<number>(0);
  const [terraceLength, setTerraceLength] = useState<number>(0);
  const [canopyWidth, setCanopyWidth] = useState<number>(0);
  const [canopyLength, setCanopyLength] = useState<number>(0);

  // Automatically calculate terrace area when dimensions change
  useEffect(() => {
    if (form.watch("terrace") && terraceWidth > 0 && terraceLength > 0) {
      const area = terraceWidth * terraceLength;
      form.setValue("terraceSize", area);
    }
  }, [terraceWidth, terraceLength, form.watch("terrace")]);

  // Automatically calculate canopy area when dimensions change
  useEffect(() => {
    if (form.watch("canopy") && canopyWidth > 0 && canopyLength > 0) {
      const area = canopyWidth * canopyLength;
      form.setValue("canopySize", area);
    }
  }, [canopyWidth, canopyLength, form.watch("canopy")]);

  return (
    <>
      <FormField
        control={form.control}
        name="terrace"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <TreePalm className="h-5 w-5" /> Terraza
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
            <FormDescription>
              Añadir terraza a la casa (200 €/m²)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {form.watch("terrace") && (
        <div className="bg-green-50/30 p-4 rounded-md border border-green-100 mb-4">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Calculator className="h-4 w-4" /> Cálculo de superficie de terraza
          </h4>
          <p className="text-xs mb-3">Superficie = Largo × Ancho</p>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-xs block mb-1">Largo (m)</label>
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
              <label className="text-xs block mb-1">Ancho (m)</label>
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
            <span className="text-sm font-medium">
              {terraceLength > 0 && terraceWidth > 0 
                ? `Total: ${(terraceLength * terraceWidth).toFixed(1)} m²` 
                : 'Indique dimensiones para calcular superficie'}
            </span>
          </div>
        </div>
      )}

      <FormField
        control={form.control}
        name="canopy"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <TreePalm className="h-5 w-5" /> Marquesina
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
            <FormDescription>
              Añadir marquesina (200 €/m²)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {form.watch("canopy") && (
        <div className="bg-green-50/30 p-4 rounded-md border border-green-100 mb-4">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Calculator className="h-4 w-4" /> Cálculo de superficie de marquesina
          </h4>
          <p className="text-xs mb-3">Superficie = Largo × Ancho</p>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-xs block mb-1">Largo (m)</label>
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
              <label className="text-xs block mb-1">Ancho (m)</label>
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
            <span className="text-sm font-medium">
              {canopyLength > 0 && canopyWidth > 0 
                ? `Total: ${(canopyLength * canopyWidth).toFixed(1)} m²` 
                : 'Indique dimensiones para calcular superficie'}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default OutdoorSpacesSection;
