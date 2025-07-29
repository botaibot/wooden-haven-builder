
import React from "react";
import { Home } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";


interface HouseTypeSelectorProps {
  form: UseFormReturn<FormValues>;
}

const HouseTypeSelector = ({ form }: HouseTypeSelectorProps) => {
  const watchHouseType = form.watch("houseType");

  return (
    <FormField
      control={form.control}
      name="houseType"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Home className="h-5 w-5" /> Тип дома
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="frame" id="frame" />
                <label htmlFor="frame" className="flex-1 cursor-pointer">
                  <div className="font-medium">Каркасные дома</div>
                  <div className="text-sm text-muted-foreground">
                    Быстрое строительство, отличная теплоизоляция
                  </div>
                </label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="glued_beam" id="glued_beam" />
                <label htmlFor="glued_beam" className="flex-1 cursor-pointer">
                  <div className="font-medium">Дома из клееного бруса</div>
                  <div className="text-sm text-muted-foreground">
                    Экологичность, прочность, красивый внешний вид
                  </div>
                </label>
              </div>
            </RadioGroup>
          </FormControl>


          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default HouseTypeSelector;
