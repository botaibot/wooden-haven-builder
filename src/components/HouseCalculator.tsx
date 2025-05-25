import React, { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { PRICES, formatCurrency } from "./calculator/constants";
import { FormValues, calculatorFormSchema } from "./calculator/types";
import HouseCalculatorForm from "./calculator/HouseCalculatorForm";
import PriceDetails from "./calculator/PriceDetails";
import InteractiveFrameHouseSchema from "./calculator/InteractiveFrameHouseSchema";
import { saveCalculatorChoice } from "@/hooks/useUserIdentification";

const HouseCalculator = () => {
  const { toast } = useToast();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalArea, setTotalArea] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [metalSupportsCount, setMetalSupportsCount] = useState(0);
  const [metalSupportsCost, setMetalSupportsCost] = useState(0);

  const defaultValues: FormValues = {
    houseType: "frame",
    width: 6,
    length: 8,
    thickness: "120mm",
    terrace: false,
    terraceSize: 0,
    canopy: false,
    canopySize: 0,
    roofInsulation: "polystyrene_40mm",
    foundation: "adjustable_metal",
    solarPanels: false,
    solarPower: 5,
    fireProtection: false,
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(calculatorFormSchema),
    defaultValues,
  });

  const watchAllFields = form.watch();
  
  useEffect(() => {
    calculateTotalPrice(watchAllFields);
  }, [watchAllFields]);

  const calculateTotalPrice = (values: FormValues) => {
    const houseArea = values.width * values.length;
    const basePrice = PRICES.BASE_PRICE_PER_SQM[values.houseType];
    
    // Apply thickness multiplier if needed
    let thicknessMultiplier = 1;
    if (values.houseType === "glued_beam" && values.thickness === "200mm") {
      thicknessMultiplier = 1.2; // 20% increase for thicker beams
    } else if (values.houseType === "frame" && values.thickness === "195mm") {
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
    const foundationPrice = values.foundation !== "monolithic" 
      ? houseArea * PRICES.FOUNDATION[values.foundation]
      : 0; // Monolithic foundation is priced by request
    
    // Calculate metal supports count and cost for adjustable metal foundation
    const supports = Math.ceil(houseArea / 10 * PRICES.METAL_SUPPORT.units_per_10sqm);
    const supportsCost = supports * (PRICES.METAL_SUPPORT.price_per_unit + PRICES.METAL_SUPPORT.additional_costs);
    
    setMetalSupportsCount(supports);
    setMetalSupportsCost(supportsCost);
    
    // Calculate solar panels cost
    const solarPanelsPrice = values.solarPanels 
      ? Math.max(values.solarPower, PRICES.SOLAR_PANELS.min_power) * PRICES.SOLAR_PANELS.price_per_kw
      : 0;
    
    // Calculate fire protection cost
    const fireProtectionPrice = values.fireProtection 
      ? PRICES.FIRE_PROTECTION.base_price
      : 0;
    
    const calculatedPrice = housePrice + terracePrice + canopyPrice + roofInsulationPrice + 
      foundationPrice + (values.foundation === "monolithic" ? 0 : solarPanelsPrice) + fireProtectionPrice;
    
    setTotalArea(houseArea + (values.terraceSize || 0) + (values.canopySize || 0));
    setTotalPrice(calculatedPrice);
    
    // Сохраняем выбор пользователя при каждом изменении
    saveCalculatorChoice({
      formValues: values,
      totalPrice: calculatedPrice,
      totalArea: houseArea + (values.terraceSize || 0) + (values.canopySize || 0),
      metalSupportsCount: supports,
      metalSupportsCost: supportsCost,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });
  };

  const onSubmit = () => {
    toast({
      title: "Предварительный расчет стоимости",
      description: `Общая стоимость: ${formatCurrency(totalPrice)}`,
    });
    
    console.log("Form values:", watchAllFields);
    console.log("Total price:", totalPrice);
    console.log("Total area:", totalArea);
    console.log("Metal supports:", metalSupportsCount);
    console.log("Metal supports cost:", metalSupportsCost);
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
              <HouseCalculatorForm 
                form={form} 
                metalSupportsCount={metalSupportsCount} 
                metalSupportsCost={metalSupportsCost} 
              />
              
              <PriceDetails 
                isDetailsOpen={isDetailsOpen}
                setIsDetailsOpen={setIsDetailsOpen}
                totalPrice={totalPrice}
                totalArea={totalArea}
                metalSupportsCount={metalSupportsCount}
                metalSupportsCost={metalSupportsCost}
                formValues={watchAllFields}
                onSubmit={onSubmit}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HouseCalculator;
