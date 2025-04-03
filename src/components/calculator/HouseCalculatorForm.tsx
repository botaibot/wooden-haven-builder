
import React, { useEffect } from "react";
import { Ruler, Layers, Home, TreePalm, SquareUser } from "lucide-react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { UseFormReturn } from "react-hook-form";
import { PRICES, formatCurrency } from "./constants";
import { FormValues } from "./types";
import RoofInfoDialog from "./RoofInfoDialog";
import FoundationInfoDialog from "./FoundationInfoDialog";
import HouseTypeSelector from "./HouseTypeSelector";

interface HouseCalculatorFormProps {
  form: UseFormReturn<FormValues>;
  metalSupportsCount: number;
  metalSupportsCost: number;
}

const HouseCalculatorForm = ({ form, metalSupportsCount, metalSupportsCost }: HouseCalculatorFormProps) => {
  const watchHouseType = form.watch("houseType");
  
  useEffect(() => {
    // Reset thickness when house type changes
    if (watchHouseType === "frame") {
      form.setValue("thickness", "120mm");
    } else {
      form.setValue("thickness", "100mm");
    }
  }, [watchHouseType, form]);

  return (
    <>
      <HouseTypeSelector form={form} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="width"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <SquareUser className="h-5 w-5" /> Ширина дома (м)
              </FormLabel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Slider
                      value={[value]}
                      min={3}
                      max={15}
                      step={0.5}
                      onValueChange={(vals) => onChange(vals[0])}
                      className="w-full"
                    />
                  </FormControl>
                  <span className="ml-4 min-w-16 text-right">
                    {value} м
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3 м</span>
                  <span>15 м</span>
                </div>
              </div>
              <FormDescription>
                Укажите желаемую ширину дома.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="length"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium flex items-center gap-2">
                <SquareUser className="h-5 w-5" /> Длина дома (м)
              </FormLabel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Slider
                      value={[value]}
                      min={3}
                      max={20}
                      step={0.5}
                      onValueChange={(vals) => onChange(vals[0])}
                      className="w-full"
                    />
                  </FormControl>
                  <span className="ml-4 min-w-16 text-right">
                    {value} м
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3 м</span>
                  <span>20 м</span>
                </div>
              </div>
              <FormDescription>
                Укажите желаемую длину дома.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="bg-slate-50 p-4 rounded-md border border-slate-100">
        <h3 className="text-md font-medium mb-2">Площадь дома: {(form.watch("width") * form.watch("length")).toFixed(1)} м²</h3>
      </div>

      <FormField
        control={form.control}
        name="thickness"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium flex items-center gap-2">
              <Ruler className="h-5 w-5" /> Толщина {form.watch("houseType") === "frame" ? "каркаса" : "бруса"}
            </FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите толщину" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {form.watch("houseType") === "frame" ? (
                  <>
                    <SelectItem value="120mm">Базовая версия (120 мм)</SelectItem>
                    <SelectItem value="195mm">Усиленный (195 мм, +15% к стоимости)</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="100mm">Стандарт (100 мм)</SelectItem>
                    <SelectItem value="200mm">Усиленный (200 мм, +20% к стоимости)</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
            <FormDescription>
              {form.watch("houseType") === "frame" && (
                <div className="text-sm mt-2">
                  <p>Базовая комплектация каркасного дома включает:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Внутренняя обшивка: фанера 12 мм</li>
                    <li>Утеплитель: полистирол (стены, потолок — 80 мм, пол — 50 мм)</li>
                    <li>Влаговетрозащита Würth</li>
                    <li>Обрешётка 48 мм</li>
                    <li>Имитация бруса 19 мм (machihembrado) или OSB 18 мм</li>
                  </ul>
                </div>
              )}
              {form.watch("houseType") === "glued_beam" && (
                <span className="text-amber-600">Уточните с менеджером возможность изготовления из бруса 200мм (требуется дополнительное время на доставку).</span>
              )}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

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
                <SelectItem value="polystyrene_40mm">Пенополистирол 40 мм</SelectItem>
                <SelectItem value="rockwool_60mm">Каменная вата 60 мм</SelectItem>
                <SelectItem value="custom">Индивидуальная толщина (по запросу)</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              {field.value === "custom" && (
                <span className="text-amber-600">
                  Для нестандартной толщины утеплителя необходим индивидуальный расчет. 
                  Свяжитесь с менеджером для уточнения стоимости.
                </span>
              )}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

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
                <SelectItem value="adjustable_metal">Регулируемая металлическая опора</SelectItem>
                <SelectItem value="monolithic">Монолитный фундамент (по запросу)</SelectItem>
                <SelectItem value="screw_piles">Винтовые сваи (+150 €/м²)</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              {field.value === "adjustable_metal" && (
                <div className="mt-2 space-y-1">
                  <p>Базовая комплектация включает регулируемые металлические опоры толщиной 6 мм.</p>
                  <p><strong>Необходимое количество:</strong> {metalSupportsCount} шт.</p>
                  <p><strong>Стоимость опор:</strong> {formatCurrency(metalSupportsCost)}</p>
                  <p className="text-xs text-muted-foreground">(примерно 7 опор на каждые 10 м² площади, 60 € за опору + 40 € за установку)</p>
                </div>
              )}
              {field.value === "monolithic" && (
                <span className="text-amber-600">
                  Стоимость монолитного фундамента зависит от многих факторов и требует индивидуального расчета. 
                  Пожалуйста, проконсультируйтесь с нашими специалистами.
                </span>
              )}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

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

export default HouseCalculatorForm;
