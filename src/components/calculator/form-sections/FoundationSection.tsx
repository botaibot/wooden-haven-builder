
import React from "react";
import { Home } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import FoundationTypeDialog from "../FoundationTypeDialog";
import { formatCurrency, getFoundationLabel, PRICES } from "../constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface FoundationSectionProps {
  form: UseFormReturn<FormValues>;
  foundationCost: number;
}

const FoundationSection = ({ form, foundationCost }: FoundationSectionProps) => {
  const width = form.watch("width");
  const length = form.watch("length");
  const houseArea = width * length;

  const calculateFoundationPrice = (type: string) => {
    if (type === "adjustable_metal") {
      const supports = Math.ceil(houseArea / 10 * PRICES.METAL_SUPPORT.units_per_10sqm);
      return supports * PRICES.METAL_SUPPORT.price_per_unit;
    } else if (type === "strip") {
      const perimeter = (width + length) * 2;
      const middleStrip = Math.min(width, length);
      const totalMeters = perimeter + middleStrip;
      return totalMeters * PRICES.STRIP_FOUNDATION.price_per_meter;
    } else if (type === "monolithic") {
      return houseArea * PRICES.MONOLITHIC_FOUNDATION.price_per_sqm;
    }
    return 0;
  };

  return (
    <FormField
      control={form.control}
      name="foundation"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Home className="h-5 w-5" /> Tipo de fundación
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {(["adjustable_metal", "strip", "monolithic"] as const).map((type) => {
                const price = calculateFoundationPrice(type);
                return (
                  <div key={type}>
                    <RadioGroupItem
                      value={type}
                      id={type}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={type}
                      className="flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer transition-all"
                    >
                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold">{getFoundationLabel(type)}</div>
                          <FoundationTypeDialog type={type} />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary mt-2">
                        + {formatCurrency(price)}
                      </div>
                    </Label>
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

export default FoundationSection;
