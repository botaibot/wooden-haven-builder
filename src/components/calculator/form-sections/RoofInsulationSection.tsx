
import React from "react";
import { Layers } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";
import RoofInfoDialog from "../RoofInfoDialog";

interface RoofInsulationSectionProps {
  form: UseFormReturn<FormValues>;
}

const RoofInsulationSection = ({ form }: RoofInsulationSectionProps) => {
  return (
    <FormField
      control={form.control}
      name="roofInsulation"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium flex items-center gap-2">
            <Layers className="h-5 w-5" /> Утепление крыши
            <RoofInfoDialog />
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип утепления" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="polystyrene_40mm" className="py-3">
                <div className="space-y-1">
                  <div className="font-medium">Пенополистирол 80 мм</div>
                  <div className="text-xs text-muted-foreground">Легкий, экономичный материал (входит в базовую комплектацию)</div>
                </div>
              </SelectItem>
              <SelectItem value="rockwool_60mm" className="py-3">
                <div className="space-y-1">
                  <div className="font-medium">Каменная вата 80 мм</div>
                  <div className="text-xs text-muted-foreground">Огнестойкий, экологичный материал (входит в базовую комплектацию)</div>
                </div>
              </SelectItem>
              <SelectItem value="custom" className="py-3">
                <div className="space-y-1">
                  <div className="font-medium">Индивидуальная толщина (по запросу)</div>
                  <div className="text-xs text-muted-foreground">Индивидуальный расчет для максимальной энергоэффективности</div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>
            {field.value === "polystyrene_40mm" && (
              <div className="mt-2 text-sm space-y-1 bg-slate-50 p-3 rounded-md">
                <p className="font-medium">Преимущества пенополистирола:</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Низкая стоимость материала</li>
                  <li>Легкий вес, не создает нагрузку на конструкцию</li>
                  <li>Простота монтажа и обработки</li>
                </ul>
              </div>
            )}
            {field.value === "rockwool_60mm" && (
              <div className="mt-2 text-sm space-y-1 bg-slate-50 p-3 rounded-md">
                <p className="font-medium">Преимущества каменной ваты:</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Отличная шумоизоляция (особенно от звуков дождя)</li>
                  <li>Пожаробезопасность - не поддерживает горение</li>
                  <li>Экологически чистый материал</li>
                </ul>
              </div>
            )}
            {field.value === "custom" && (
              <span className="text-amber-600 block mt-2">
                Для нестандартной толщины утеплителя необходим индивидуальный расчет. 
                Свяжитесь с менеджером для уточнения стоимости.
              </span>
            )}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoofInsulationSection;
