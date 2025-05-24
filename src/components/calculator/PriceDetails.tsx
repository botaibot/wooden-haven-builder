
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import { formatCurrency, getFoundationLabel, getRoofInsulationLabel } from "./constants";
import { FormValues } from "./types";
import OrderDetailsForm from "./OrderDetailsForm";

interface PriceDetailsProps {
  isDetailsOpen: boolean;
  setIsDetailsOpen: (open: boolean) => void;
  totalPrice: number;
  totalArea: number;
  metalSupportsCount: number;
  metalSupportsCost: number;
  formValues: FormValues;
  onSubmit: () => void;
}

const PriceDetails = ({
  isDetailsOpen,
  setIsDetailsOpen,
  totalPrice,
  totalArea,
  metalSupportsCount,
  metalSupportsCost,
  formValues,
  onSubmit,
}: PriceDetailsProps) => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleDetailedCalculation = async () => {
    setIsSubmitting(true);
    
    const webhookUrl = 'https://hook.eu2.make.com/5cwhtg1q0ri4qpvw3ihaueqonng7g8a0';
    
    // Формируем детальные данные расчета
    const calculationData = {
      type: "detailed_calculation_request",
      calculationDetails: {
        houseType: formValues.houseType === "frame" ? "Каркасный дом" : "Дом из клееного бруса",
        dimensions: `${formValues.width} × ${formValues.length} м`,
        houseArea: `${(formValues.width * formValues.length).toFixed(1)} м²`,
        thickness: formValues.thickness,
        roofInsulation: getRoofInsulationLabel(formValues.roofInsulation),
        foundation: getFoundationLabel(formValues.foundation),
        metalSupports: formValues.foundation === "adjustable_metal" ? {
          count: metalSupportsCount,
          cost: formatCurrency(metalSupportsCost)
        } : null,
        terrace: formValues.terrace ? {
          enabled: true,
          size: `${formValues.terraceSize} м²`
        } : { enabled: false },
        canopy: formValues.canopy ? {
          enabled: true,
          size: `${formValues.canopySize} м²`
        } : { enabled: false },
        solarPanels: formValues.solarPanels ? {
          enabled: true,
          power: `${formValues.solarPower} кВт`,
          cost: formatCurrency(formValues.solarPower * 1400)
        } : { enabled: false },
        fireProtection: formValues.fireProtection ? {
          enabled: true,
          points: 20,
          cost: formatCurrency(800)
        } : { enabled: false },
        totalArea: `${totalArea.toFixed(1)} м²`,
        totalPrice: formatCurrency(totalPrice),
        basePrice: formValues.houseType === "frame" ? "550 €" : "800 €",
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        pageUrl: window.location.href
      }
    };
    
    try {
      console.log("Отправка детального расчета на Make.com webhook:", calculationData);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(calculationData),
      });
      
      toast({
        title: "Запрос отправлен",
        description: "Данные предварительного расчета переданы менеджеру. Мы свяжемся с вами для предоставления детального расчета.",
      });
      
      // Вызываем оригинальный onSubmit для совместимости
      onSubmit();
      
    } catch (error) {
      console.error("Ошибка при отправке детального расчета:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить данные. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
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
            <p className="text-xs text-muted-foreground mt-1">
              Каркасный дом с крышей, без окон, дверей, сантехники, электрики, водоснабжения
            </p>
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
              {formValues.houseType === "frame"
                ? "Каркасный дом"
                : "Дом из клееного бруса"}
            </div>

            <div className="text-muted-foreground">Базовая стоимость:</div>
            <div>
              {formValues.houseType === "frame" ? "550 €" : "800 €"} за м²
            </div>

            <div className="text-muted-foreground">Размеры дома:</div>
            <div>
              {formValues.width} × {formValues.length} м
            </div>

            <div className="text-muted-foreground">Площадь дома:</div>
            <div>
              {(formValues.width * formValues.length).toFixed(1)} м²
            </div>

            <div className="text-muted-foreground">Утепление крыши:</div>
            <div>
              {getRoofInsulationLabel(formValues.roofInsulation)}
            </div>

            <div className="text-muted-foreground">Тип фундамента:</div>
            <div>
              {getFoundationLabel(formValues.foundation)}
            </div>

            {formValues.foundation === "adjustable_metal" && (
              <>
                <div className="text-muted-foreground">Металлические опоры:</div>
                <div>{metalSupportsCount} шт. ({formatCurrency(metalSupportsCost)})</div>
              </>
            )}

            {formValues.terrace && (
              <>
                <div className="text-muted-foreground">Площадь террасы:</div>
                <div>{formValues.terraceSize} м²</div>
              </>
            )}

            {formValues.canopy && (
              <>
                <div className="text-muted-foreground">Площадь навеса:</div>
                <div>{formValues.canopySize} м²</div>
              </>
            )}

            {formValues.solarPanels && (
              <>
                <div className="text-muted-foreground">Солнечные панели:</div>
                <div>{formValues.solarPower} кВт ({formatCurrency(formValues.solarPower * 1400)})</div>
              </>
            )}

            {formValues.fireProtection && (
              <>
                <div className="text-muted-foreground">Противопожарная защита:</div>
                <div>20 точек ({formatCurrency(800)})</div>
              </>
            )}

            <div className="text-muted-foreground">Общая площадь:</div>
            <div>
              {totalArea.toFixed(1)} м²
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t text-xs text-muted-foreground">
            <p>В указанную стоимость входит каркасный дом с крышей. Не включены: окна, двери, сантехника, электрика, водоснабжение.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          type="submit" 
          onClick={handleDetailedCalculation}
          disabled={isSubmitting}
          className="bg-wood text-white hover:bg-wood-dark w-full sm:w-auto"
        >
          {isSubmitting ? "Отправка..." : "Получить детальный расчет"}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => setIsOrderFormOpen(true)}
          className="border-wood text-wood hover:bg-wood/10 w-full sm:w-auto"
        >
          Отправить расчет менеджеру
        </Button>
      </div>
      
      <OrderDetailsForm 
        open={isOrderFormOpen} 
        onOpenChange={setIsOrderFormOpen} 
        formValues={formValues} 
        totalPrice={totalPrice} 
        totalArea={totalArea} 
      />
    </div>
  );
};

export default PriceDetails;
