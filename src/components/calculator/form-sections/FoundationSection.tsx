
import React from "react";
import { Home } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import FoundationInfoDialog from "../FoundationInfoDialog";
import { formatCurrency } from "../constants";

interface FoundationSectionProps {
  form: UseFormReturn<FormValues>;
  foundationCost: number;
}

const FoundationSection = ({ form, foundationCost }: FoundationSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="foundation"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Home className="h-5 w-5" /> Тип фундамента
            <FoundationInfoDialog />
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип фундамента" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="adjustable_metal">Металлические опоры</SelectItem>
              <SelectItem value="strip">Ленточный фундамент</SelectItem>
              <SelectItem value="monolithic">Монолитная подушка</SelectItem>
            </SelectContent>
          </Select>
          {foundationCost > 0 && (
            <div className="mt-2 flex justify-end">
              <p className="text-lg font-semibold text-primary">
                + {formatCurrency(foundationCost)}
              </p>
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FoundationSection;
