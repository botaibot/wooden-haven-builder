
import React, { useState, useEffect } from "react";
import { Calculator, House, SquareUser, PalmTree, Warehouse } from "lucide-react";
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

// Define the form schema with Zod
const formSchema = z.object({
  houseType: z.string(),
  houseSize: z.number().min(20).max(200),
  materials: z.string(),
  terrace: z.boolean(),
  terraceSize: z.number().min(0).max(100).optional(),
  gazebo: z.boolean(),
  gazeboSize: z.number().min(0).max(50).optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Price constants (base prices in rubles)
const PRICES = {
  HOUSE_BASE_PRICE_PER_SQM: {
    economy: 40000,
    standard: 55000,
    premium: 75000
  },
  MATERIALS: {
    pine: 1,
    cedar: 1.3,
    oak: 1.5
  },
  TERRACE_PRICE_PER_SQM: 25000,
  GAZEBO_PRICE_PER_SQM: 30000
};

const HouseCalculator = () => {
  const { toast } = useToast();
  const [totalPrice, setTotalPrice] = useState(0);

  // Set default form values
  const defaultValues: FormValues = {
    houseType: "standard",
    houseSize: 50,
    materials: "pine",
    terrace: false,
    terraceSize: 0,
    gazebo: false,
    gazeboSize: 0,
  };

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Watch form values for calculations
  const watchAllFields = form.watch();
  
  // Calculate price whenever form values change
  useEffect(() => {
    calculateTotalPrice(watchAllFields);
  }, [watchAllFields]);

  const calculateTotalPrice = (values: FormValues) => {
    // Base house price
    const houseBasePrice = PRICES.HOUSE_BASE_PRICE_PER_SQM[values.houseType as keyof typeof PRICES.HOUSE_BASE_PRICE_PER_SQM] || 0;
    const materialMultiplier = PRICES.MATERIALS[values.materials as keyof typeof PRICES.MATERIALS] || 1;
    const housePrice = values.houseSize * houseBasePrice * materialMultiplier;
    
    // Terrace price
    const terracePrice = values.terrace && values.terraceSize 
      ? values.terraceSize * PRICES.TERRACE_PRICE_PER_SQM 
      : 0;
    
    // Gazebo price
    const gazeboPrice = values.gazebo && values.gazeboSize 
      ? values.gazeboSize * PRICES.GAZEBO_PRICE_PER_SQM 
      : 0;
    
    // Total price
    const calculatedPrice = housePrice + terracePrice + gazeboPrice;
    setTotalPrice(calculatedPrice);
  };

  const onSubmit = (values: FormValues) => {
    toast({
      title: "Предварительный расчет стоимости",
      description: `Общая стоимость: ${totalPrice.toLocaleString()} ₽`,
    });
    
    console.log("Form values:", values);
    console.log("Total price:", totalPrice);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString() + " ₽";
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
              Окончательная цена может отличаться и будет рассчитана после консультации.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* House Type */}
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                            <FormControl>
                              <RadioGroupItem value="economy" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Эконом (40 000 ₽/м²)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                            <FormControl>
                              <RadioGroupItem value="standard" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Стандарт (55 000 ₽/м²)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                            <FormControl>
                              <RadioGroupItem value="premium" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Премиум (75 000 ₽/м²)
                            </FormLabel>
                          </FormItem>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>
                      Выберите комплектацию дома, влияющую на базовую стоимость.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* House Size */}
              <FormField
                control={form.control}
                name="houseSize"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium flex items-center gap-2">
                      <SquareUser className="h-5 w-5" /> Площадь дома
                    </FormLabel>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <FormControl>
                          <Slider
                            value={[value]}
                            min={20}
                            max={200}
                            step={1}
                            onValueChange={(vals) => onChange(vals[0])}
                            className="w-full"
                          />
                        </FormControl>
                        <span className="ml-4 min-w-16 text-right">
                          {value} м²
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>20 м²</span>
                        <span>200 м²</span>
                      </div>
                    </div>
                    <FormDescription>
                      Укажите желаемую площадь дома в квадратных метрах.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Materials */}
              <FormField
                control={form.control}
                name="materials"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium flex items-center gap-2">
                      <Warehouse className="h-5 w-5" /> Материал
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите материал" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pine">Сосна (стандартная цена)</SelectItem>
                        <SelectItem value="cedar">Кедр (+30% к стоимости)</SelectItem>
                        <SelectItem value="oak">Дуб (+50% к стоимости)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Выберите материал для строительства дома.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terrace */}
              <FormField
                control={form.control}
                name="terrace"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-lg font-medium flex items-center gap-2">
                        <PalmTree className="h-5 w-5" /> Терраса
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                    <FormDescription>
                      Добавить террасу к дому (25 000 ₽/м²)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terrace Size (conditional) */}
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

              {/* Gazebo */}
              <FormField
                control={form.control}
                name="gazebo"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-lg font-medium flex items-center gap-2">
                        <PalmTree className="h-5 w-5" /> Беседка
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                    <FormDescription>
                      Добавить беседку (30 000 ₽/м²)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gazebo Size (conditional) */}
              {form.watch("gazebo") && (
                <FormField
                  control={form.control}
                  name="gazeboSize"
                  render={({ field: { value, onChange } }) => (
                    <FormItem>
                      <FormLabel>Площадь беседки</FormLabel>
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
                        Укажите желаемую площадь беседки в квадратных метрах.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Total Price and Submit */}
              <div className="pt-6 border-t">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Предварительная стоимость:</p>
                    <p className="text-2xl font-bold text-wood-dark">{formatCurrency(totalPrice)}</p>
                  </div>
                  <Button type="submit" className="bg-wood text-white hover:bg-wood-dark">
                    Получить расчет
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HouseCalculator;
