
import React from "react";
import { House } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface HouseTypeSelectorProps {
  form: UseFormReturn<FormValues>;
}

const HouseTypeSelector = ({ form }: HouseTypeSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name="houseType"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <House className="h-5 w-5" /> Тип дома
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                  <FormControl>
                    <RadioGroupItem value="frame" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Каркасный дом (от 550 €/м²)
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                  <FormControl>
                    <RadioGroupItem value="glued_beam" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Дом из клееного бруса (от 800 €/м²)
                  </FormLabel>
                </FormItem>
              </div>
            </RadioGroup>
          </FormControl>
          <FormDescription>
            Выберите тип конструкции вашего будущего дома.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default HouseTypeSelector;
