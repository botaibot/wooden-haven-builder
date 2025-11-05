import React from "react";
import { Home, Info } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import { formatCurrency, getRoofTypeLabel, PRICES } from "../constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import RoofTypeDialog from "../RoofTypeDialog";

interface RoofTypeSectionProps {
  form: UseFormReturn<FormValues>;
  roofCost: number;
}

const RoofTypeSection = ({ form, roofCost }: RoofTypeSectionProps) => {
  const houseArea = form.watch("width") * form.watch("length");

  return (
    <FormField
      control={form.control}
      name="roofType"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Home className="h-5 w-5" /> Tipo de techo
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {(["simple", "volado", "moderno", "alto"] as const).map((type) => {
                const price = houseArea * PRICES.ROOF_TYPE[type];
                return (
                  <div key={type}>
                    <RadioGroupItem
                      value={type}
                      id={type}
                      className="peer sr-only"
                    />
                    <RoofTypeDialog type={type}>
                      <Label
                        htmlFor={type}
                        className="flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer transition-all min-h-[120px]"
                      >
                        <div className="w-full">
                          <div className="font-semibold">{getRoofTypeLabel(type)}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {PRICES.ROOF_TYPE[type]}€ por m²
                          </div>
                        </div>
                        <div className="w-full flex items-end justify-between mt-2">
                          <div className="text-lg font-bold text-primary">
                            + {formatCurrency(price)}
                          </div>
                          <div 
                            className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Info className="h-3 w-3" />
                            Подробнее
                          </div>
                        </div>
                      </Label>
                    </RoofTypeDialog>
                  </div>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoofTypeSection;
