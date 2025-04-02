
import React, { useState, useEffect } from "react";
import { Calculator, House, SquareUser, TreePalm, Ruler, Home, Layers } from "lucide-react";
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import MaterialCalculator from "./MaterialCalculator";

const formSchema = z.object({
  houseType: z.enum(["frame", "glued_beam"]),
  width: z.number().min(3).max(15),
  length: z.number().min(3).max(20),
  thickness: z.string(),
  terrace: z.boolean(),
  terraceSize: z.number().min(0).max(100).optional(),
  canopy: z.boolean(),
  canopySize: z.number().min(0).max(50).optional(),
  roofInsulation: z.enum(["polystyrene_40mm", "rockwool_60mm", "custom"]),
  foundation: z.enum(["adjustable_metal", "monolithic", "screw_piles"]),
});

type FormValues = z.infer<typeof formSchema>;

const PRICES = {
  BASE_PRICE_PER_SQM: {
    frame: 550,
    glued_beam: 800
  },
  TERRACE_PRICE_PER_SQM: 300,
  CANOPY_PRICE_PER_SQM: 300,
  ROOF_INSULATION: {
    polystyrene_40mm: 0, // базовая комплектация
    rockwool_60mm: 0,    // базовая комплектация
    custom: 100          // наценка за индивидуальный расчет
  },
  FOUNDATION: {
    adjustable_metal: 0, // базовая комплектация
    monolithic: 250,     // наценка за монолитный фундамент
    screw_piles: 150     // наценка за винтовые сваи
  }
};

const RoofInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о кровле
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Информация о кровельном пироге</DialogTitle>
          <DialogDescription>
            Структура и состав кровельного пирога
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Стандартный кровельный пирог</h3>
            <div className="space-y-2">
              <div className="bg-slate-200 p-3 rounded">
                <p className="font-medium">Слой 1: Кровельное покрытие</p>
                <p className="text-sm text-muted-foreground">Защита от осадков и внешних воздействий</p>
              </div>
              <div className="bg-amber-100 p-3 rounded">
                <p className="font-medium">Слой 2: Гидроизоляция</p>
                <p className="text-sm text-muted-foreground">Дополнительная защита от влаги</p>
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <p className="font-medium">Слой 3: Утеплитель</p>
                <p className="text-sm text-muted-foreground">Теплоизоляция (40мм пенополистирол или 60мм каменная вата)</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded">
                <p className="font-medium">Слой 4: Пароизоляция</p>
                <p className="text-sm text-muted-foreground">Защита от конденсата</p>
              </div>
              <div className="bg-green-100 p-3 rounded">
                <p className="font-medium">Слой 5: Обрешетка</p>
                <p className="text-sm text-muted-foreground">Основа для кровельного покрытия</p>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <p className="font-medium">Слой 6: Стропильная система</p>
                <p className="text-sm text-muted-foreground">Несущая конструкция крыши</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/d6c44543-84ac-4faf-8d04-ec7ec80d9303.png" 
              alt="Металлическая регулируемая опора" 
              className="rounded-md shadow-md mb-4"
            />
            <h3 className="text-lg font-medium">Регулируемая металлическая опора</h3>
            <p className="text-sm text-muted-foreground">
              Толщина металла 6 мм. Регулируемые металлические опоры обеспечивают надежную основу для вашего дома, 
              позволяя установить его на любой поверхности и выровнять по уровню даже на неровном участке.
            </p>
            <p className="text-sm mt-4 bg-amber-50 p-3 rounded">
              <span className="font-medium">Важно:</span> При увеличении толщины утеплителя кровли свыше базовых значений 
              требуется индивидуальный расчет. Пожалуйста, обратитесь к менеджеру для получения точной информации.
            </p>
            <MaterialCalculator width={1000} length={2000} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const FoundationInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о фундаменте
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Типы фундамента</DialogTitle>
          <DialogDescription>
            Характеристики и особенности различных типов фундамента
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded border">
              <h3 className="text-lg font-medium mb-2">Регулируемая металлическая опора</h3>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/d6c44543-84ac-4faf-8d04-ec7ec80d9303.png" 
                  alt="Металлическая регулируемая опора" 
                  className="rounded-md shadow-sm"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Толщина металла 6 мм. Регулируемые металлические опоры — базовый и самый экономичный вариант. 
                Позволяет быстро установить дом на подготовленной площадке и при необходимости регулировать высоту.
              </p>
              <p className="text-sm font-medium mt-2">Входит в базовую комплектацию</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded border">
              <h3 className="text-lg font-medium mb-2">Монолитный фундамент</h3>
              <div className="mb-4 h-40 bg-gray-200 flex items-center justify-center rounded-md">
                <p className="text-sm text-gray-500">Схема монолитного фундамента</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Монолитный железобетонный фундамент обеспечивает максимальную надежность и долговечность. Идеален для домов 
                с большой площадью или при сложных грунтах.
              </p>
              <p className="text-sm font-medium mt-2">Дополнительно: +250 €/м²</p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded border">
            <h3 className="text-lg font-medium mb-2">Винтовые сваи</h3>
            <div className="mb-4 h-40 bg-gray-200 flex items-center justify-center rounded-md">
              <p className="text-sm text-gray-500">Схема фундамента на винтовых сваях</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Винтовые сваи — оптимальное решение для участков со сложным рельефом или слабыми грунтами. Быстрый монтаж, 
              отсутствие земляных работ и возможность установки в любое время года.
            </p>
            <p className="text-sm font-medium mt-2">Дополнительно: +150 €/м²</p>
          </div>
          
          <p className="text-sm bg-amber-50 p-3 rounded">
            <span className="font-medium">Важно:</span> Выбор типа фундамента зависит от особенностей грунта и 
            характеристик вашего участка. Для получения наиболее точной оценки рекомендуем 
            проконсультироваться с нашими специалистами.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
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
    roofInsulation: "polystyrene_40mm",
    foundation: "adjustable_metal",
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
    
    // Calculate roof insulation cost
    const roofInsulationPrice = houseArea * PRICES.ROOF_INSULATION[values.roofInsulation];
    
    // Calculate foundation cost
    const foundationPrice = houseArea * PRICES.FOUNDATION[values.foundation];
    
    const calculatedPrice = housePrice + terracePrice + canopyPrice + roofInsulationPrice + foundationPrice;
    
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

  const getRoofInsulationLabel = (value: string) => {
    switch(value) {
      case "polystyrene_40mm": return "Пенополистирол 40 мм";
      case "rockwool_60mm": return "Каменная вата 60 мм";
      case "custom": return "Индивидуальная толщина (по запросу)";
      default: return value;
    }
  };

  const getFoundationLabel = (value: string) => {
    switch(value) {
      case "adjustable_metal": return "Регулируемая металлическая опора";
      case "monolithic": return "Монолитный фундамент (+250 €/м²)";
      case "screw_piles": return "Винтовые сваи (+150 €/м²)";
      default: return value;
    }
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
                        <SelectItem value="monolithic">Монолитный фундамент (+250 €/м²)</SelectItem>
                        <SelectItem value="screw_piles">Винтовые сваи (+150 €/м²)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Базовая комплектация включает регулируемые металлические опоры толщиной 6 мм.
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
                      
                      <div className="text-muted-foreground">Утепление крыши:</div>
                      <div>
                        {getRoofInsulationLabel(form.watch("roofInsulation"))}
                      </div>
                      
                      <div className="text-muted-foreground">Тип фундамента:</div>
                      <div>
                        {getFoundationLabel(form.watch("foundation"))}
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
