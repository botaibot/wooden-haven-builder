
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
        houseType: formValues.houseType === "frame" ? "Casa de entramado ligero" : "Casa de madera laminada",
        dimensions: `${formValues.width} × ${formValues.length} m`,
        houseArea: `${(formValues.width * formValues.length).toFixed(1)} m²`,
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
          power: `${formValues.solarPower} kW`,
          cost: formatCurrency(formValues.solarPower * 1400)
        } : { enabled: false },
        fireProtection: formValues.fireProtection ? {
          enabled: true,
          points: 20,
          cost: formatCurrency(800)
        } : { enabled: false },
        totalArea: `${totalArea.toFixed(1)} m²`,
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
        title: "Solicitud enviada",
        description: "Los datos del cálculo preliminar han sido enviados al gerente. Nos pondremos en contacto para proporcionar un cálculo detallado.",
      });
      
      // Вызываем оригинальный onSubmit для совместимости
      onSubmit();
      
    } catch (error) {
      console.error("Error al enviar el cálculo detallado:", error);
      toast({
        title: "Error",
        description: "No se pudieron enviar los datos. Por favor, inténtelo más tarde o contáctenos directamente.",
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
            <p className="text-sm font-medium text-muted-foreground">Costo preliminar:</p>
            <p className="text-2xl font-bold text-wood-dark">{formatCurrency(totalPrice)}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Casa de entramado ligero con techo, sin ventanas, puertas, fontanería, electricidad, suministro de agua
            </p>
          </div>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
            >
              {isDetailsOpen ? "Ocultar detalles" : "Mostrar detalles"}
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Tipo de casa:</div>
            <div>
              {formValues.houseType === "frame"
                ? "Casa de entramado ligero"
                : "Casa de madera laminada"}
            </div>

            <div className="text-muted-foreground">Costo base:</div>
            <div>
              {formValues.houseType === "frame" ? "550 €" : "800 €"} por m²
            </div>

            <div className="text-muted-foreground">Dimensiones de la casa:</div>
            <div>
              {formValues.width} × {formValues.length} m
            </div>

            <div className="text-muted-foreground">Superficie de la casa:</div>
            <div>
              {(formValues.width * formValues.length).toFixed(1)} m²
            </div>

            <div className="text-muted-foreground">Aislamiento de techo:</div>
            <div>
              {getRoofInsulationLabel(formValues.roofInsulation)}
            </div>

            <div className="text-muted-foreground">Tipo de cimentación:</div>
            <div>
              {getFoundationLabel(formValues.foundation)}
            </div>

            {formValues.foundation === "adjustable_metal" && (
              <>
                <div className="text-muted-foreground">Soportes metálicos:</div>
                <div>{metalSupportsCount} uds. ({formatCurrency(metalSupportsCost)})</div>
              </>
            )}

            {formValues.terrace && (
              <>
                <div className="text-muted-foreground">Superficie de terraza:</div>
                <div>{formValues.terraceSize} m²</div>
              </>
            )}

            {formValues.canopy && (
              <>
                <div className="text-muted-foreground">Superficie de marquesina:</div>
                <div>{formValues.canopySize} m²</div>
              </>
            )}

            {formValues.solarPanels && (
              <>
                <div className="text-muted-foreground">Paneles solares:</div>
                <div>{formValues.solarPower} kW ({formatCurrency(formValues.solarPower * 1400)})</div>
              </>
            )}

            {formValues.fireProtection && (
              <>
                <div className="text-muted-foreground">Protección antiincendios:</div>
                <div>20 puntos ({formatCurrency(800)})</div>
              </>
            )}

            <div className="text-muted-foreground">Superficie total:</div>
            <div>
              {totalArea.toFixed(1)} m²
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t text-xs text-muted-foreground">
            <p>El costo indicado incluye casa de entramado ligero con techo. No incluye: ventanas, puertas, fontanería, electricidad, suministro de agua.</p>
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
          {isSubmitting ? "Enviando..." : "Obtener cálculo detallado"}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => setIsOrderFormOpen(true)}
          className="border-wood text-wood hover:bg-wood/10 w-full sm:w-auto"
        >
          Enviar cálculo al gerente
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
