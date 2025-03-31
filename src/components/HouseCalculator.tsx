
import React, { useState, useEffect } from "react";
import { Calculator, House, SquareUser, TreePalm, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const formSchema = z.object({
  houseType: z.enum(["frame", "glued_beam"]),
  width: z.number().min(3).max(15),
  length: z.number().min(3).max(20),
  thickness: z.string(),
  terrace: z.boolean(),
  terraceSize: z.number().min(0).max(100).optional(),
  canopy: z.boolean(),
  canopySize: z.number().min(0).max(50).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const PRICES = {
  BASE_PRICE_PER_SQM: {
    frame: 550,
    glued_beam: 800
  },
  TERRACE_PRICE_PER_SQM: 300,
  CANOPY_PRICE_PER_SQM: 300
};

const HouseCalculator = () => {
  const { toast } = useToast();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalArea, setTotalArea] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const defaultValues: FormValues = {
    houseType: "frame",
    width: 6,
    length: 8,
    thickness: "standard",
    terrace: false,
    terraceSize: 0,
    canopy: false,
    canopySize: 0,
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const watchAllFields = form.watch();
  const watchHouseType = form.watch("houseType");
  
  useEffect(() => {
    calculateTotalPrice(watchAllFields);
  }, [watchAllFields]);

  useEffect(() => {
    // Reset thickness when house type changes
    if (watchHouseType === "frame") {
      form.setValue("thickness", "standard");
    } else {
      form.setValue("thickness", "100mm");
    }
  }, [watchHouseType, form]);

  const calculateTotalPrice = (values: FormValues) => {
    const houseArea = values.width * values.length;
    const basePrice = PRICES.BASE_PRICE_PER_SQM[values.houseType];
    
    // Apply thickness multiplier if needed
    let thicknessMultiplier = 1;
    if (values.houseType === "glued_beam" && values.thickness === "200mm") {
      thicknessMultiplier = 1.2; // 20% increase for thicker beams
    } else if (values.houseType === "frame" && values.thickness === "250mm") {
      thicknessMultiplier = 1.15; // 15% increase for thicker frame
    }
    
    const housePrice = houseArea * basePrice * thicknessMultiplier;
    
    const terracePrice = values.terrace && values.terraceSize 
      ? values.terraceSize * PRICES.TERRACE_PRICE_PER_SQM 
      : 0;
    
    const canopyPrice = values.canopy && values.canopySize 
      ? values.canopySize * PRICES.CANOPY_PRICE_PER_SQM 
      : 0;
    
    const calculatedPrice = housePrice + terracePrice + canopyPrice;
    
    setTotalArea(houseArea + (values.terraceSize || 0) + (values.canopySize || 0));
    setTotalPrice(calculatedPrice);
  };

  const onSubmit = (values: FormValues) => {
    toast({
      title: "Предварительный расчет стоимости",
      description: `Общая стоимость: ${formatCurrency(totalPrice)}`,
    });
    
    console.log("Form values:", values);
    console.log("Total price:", totalPrice);
    console.log("Total area:", totalArea);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString() + " €";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-wood-dark flex items-center gap-2 mb-4">
              <Calculator className="h-6 w-6" /> 
              Калькулятор стоимости дома
            </h2>
            <p className="text-muted-foreground">
              Укажите параметры вашего будущего дома, чтобы получить предварительную оценку стоимости.
              Окончательная цена может отличаться и будет рассчитана после консультации со специалистом.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                            <SelectItem value="standard">Стандарт (200 мм)</SelectItem>
                            <SelectItem value="250mm">Усиленный (250 мм, +15% к стоимости)</SelectItem>
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
                      Добавить террасу к дому (300 €/м²)
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
                      Добавить навес (300 €/м²)
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

              <div className="pt-6 border-t">
                <Collapsible 
                  open={isDetailsOpen} 
                  onOpenChange={setIsDetailsOpen}
                  className="mb-4"
                >
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Предварительная стоимость:</p>
                      <p className="text-2xl font-bold text-wood-dark">{formatCurrency(totalPrice)}</p>
                    </div>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-sm"
                      >
                        {isDetailsOpen ? "Скрыть детали" : "Показать детали"}
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Тип дома:</div>
                      <div>
                        {form.watch("houseType") === "frame" 
                          ? "Каркасный дом" 
                          : "Дом из клееного бруса"}
                      </div>
                      
                      <div className="text-muted-foreground">Базовая стоимость:</div>
                      <div>
                        {formatCurrency(PRICES.BASE_PRICE_PER_SQM[form.watch("houseType")])} за м²
                      </div>
                      
                      <div className="text-muted-foreground">Размеры дома:</div>
                      <div>
                        {form.watch("width")} × {form.watch("length")} м
                      </div>
                      
                      <div className="text-muted-foreground">Площадь дома:</div>
                      <div>
                        {(form.watch("width") * form.watch("length")).toFixed(1)} м²
                      </div>
                      
                      {form.watch("terrace") && (
                        <>
                          <div className="text-muted-foreground">Площадь террасы:</div>
                          <div>{form.watch("terraceSize")} м²</div>
                        </>
                      )}
                      
                      {form.watch("canopy") && (
                        <>
                          <div className="text-muted-foreground">Площадь навеса:</div>
                          <div>{form.watch("canopySize")} м²</div>
                        </>
                      )}
                      
                      <div className="text-muted-foreground">Общая площадь:</div>
                      <div>
                        {totalArea.toFixed(1)} м²
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Button type="submit" className="bg-wood text-white hover:bg-wood-dark w-full md:w-auto">
                  Получить детальный расчет
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HouseCalculator;
