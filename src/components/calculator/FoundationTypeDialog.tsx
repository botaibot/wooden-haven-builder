import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";

interface FoundationTypeDialogProps {
  type: "adjustable_metal" | "strip" | "monolithic";
  children: React.ReactNode;
}

const FOUNDATION_DETAILS = {
  adjustable_metal: {
    title: "Регулируемая металлическая опора",
    description: "Характеристики и особенности металлической опоры",
    content: {
      text: "Толщина металла 6 мм. Регулируемые металлические опоры — базовый и самый экономичный вариант. Позволяет быстро установить дом на подготовленной площадке и при необходимости регулировать высоту.",
      details: "Для маленьких домов до 30м² выкапывается земля под металлические опоры размером 50×50×50 см, делается подсыпка щебня и песка, укладывается бетонный блок, к которому прикручиваются опоры.",
      pricing: "Стоимость одной опоры: 100 € (с установкой)",
      consumption: "Примерный расход: 7 опор на каждые 10 м² площади пола",
      note: "Входит в базовую комплектацию"
    },
    image: "/lovable-uploads/85729617-ae77-4f48-831a-aca0d62cf8c1.png"
  },
  strip: {
    title: "Zapata corrida",
    description: "Fundación resistente y fiable para construcciones duraderas",
    content: {
      text: "La zapata corrida es una estructura de hormigón armado que recorre el perímetro del edificio y bajo los muros portantes. Proporciona una distribución uniforme de la carga y alta estabilidad.",
      details: "La fundación se coloca alrededor del perímetro de la casa más una franja en el centro para mayor resistencia. La profundidad de colocación depende del tipo de suelo y las condiciones climáticas.",
      pricing: "Costo: 300 € por metro lineal",
      consumption: "Cálculo: perímetro de la casa + una franja central por el lado menor",
      note: "Recomendado para residencia permanente"
    },
    image: "/lovable-uploads/zapata-corrida.jpeg"
  },
  monolithic: {
    title: "Losa monolítica",
    description: "Base extremadamente resistente y estable",
    content: {
      text: "La losa monolítica es una base continua de hormigón armado bajo toda el área de la casa. Proporciona máxima estabilidad y distribución uniforme de la carga sobre el suelo.",
      details: "Ideal para suelos complejos, proporciona protección contra heladas y humedad. La construcción monolítica elimina la aparición de grietas y deformaciones.",
      pricing: "Costo: 500 € por m²",
      consumption: "Cálculo: área de la casa × 500 €",
      note: "Opción óptima para construcción permanente"
    },
    image: "/lovable-uploads/losa-monolitica.jpeg"
  }
};

const FoundationTypeDialog = ({ type, children }: FoundationTypeDialogProps) => {
  const details = FOUNDATION_DETAILS[type];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{details.title}</DialogTitle>
          <DialogDescription>{details.description}</DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded border">
                <h3 className="text-lg font-medium mb-2">{details.title}</h3>
                <p className="text-sm text-muted-foreground">{details.content.text}</p>
                <p className="text-sm mt-3">{details.content.details}</p>
                <p className="text-sm font-medium mt-3 text-primary">{details.content.note}</p>
                <div className="mt-4 space-y-1">
                  <p className="text-sm font-medium">{details.content.pricing}</p>
                  <p className="text-sm text-muted-foreground">{details.content.consumption}</p>
                </div>
              </div>
              
              <div>
                <img 
                  src={details.image}
                  alt={details.title}
                  className="rounded-md shadow-sm w-full h-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            
            <p className="text-sm bg-amber-50 p-3 rounded">
              <span className="font-medium">Важно:</span> Выбор типа фундамента зависит от особенностей грунта и 
              характеристик вашего участка. Для получения наиболее точной оценки рекомендуем 
              проконсультироваться с нашими специалистами.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FoundationTypeDialog;
