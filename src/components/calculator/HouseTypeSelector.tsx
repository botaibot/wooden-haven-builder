
import React from "react";
import { Home, TreePine } from "lucide-react";
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
        <FormItem className="space-y-3">
          <FormLabel className="text-lg font-medium">Тип дома</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50">
                <RadioGroupItem value="frame" id="frame" />
                <label
                  htmlFor="frame"
                  className="flex items-center gap-2 cursor-pointer flex-1"
                >
                  <Home className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Каркасный дом</div>
                    <div className="text-sm text-muted-foreground">
                      Быстрое строительство, отличная теплоизоляция
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50">
                <RadioGroupItem value="glued_beam" id="glued_beam" />
                <label
                  htmlFor="glued_beam"
                  className="flex items-center gap-2 cursor-pointer flex-1"
                >
                  <TreePine className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Дом из клееного бруса</div>
                    <div className="text-sm text-muted-foreground">
                      Экологичность, долговечность, красивый внешний вид
                    </div>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </FormControl>
          <FormDescription>
            Выберите тип конструкции дома. Каждый тип имеет свои особенности и преимущества.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default HouseTypeSelector;
