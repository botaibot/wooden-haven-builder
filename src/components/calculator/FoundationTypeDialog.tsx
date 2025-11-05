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
    title: "Soporte metálico ajustable",
    description: "Características y particularidades del soporte metálico",
    content: {
      text: "Espesor de metal 6 mm. Los soportes metálicos ajustables son la opción básica y más económica. Permite instalar rápidamente la casa en el terreno preparado y ajustar la altura si es necesario.",
      details: "Para casas pequeñas de hasta 30m², se excava tierra para soportes metálicos de 50×50×50 cm, se hace un relleno de grava y arena, se coloca un bloque de hormigón al cual se atornillan los soportes.",
      pricing: "Costo por soporte: 100 € (con instalación)",
      consumption: "Consumo aproximado: 7 soportes cada 10 m² de superficie",
      note: "Incluido en la configuración básica"
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
              <span className="font-medium">Importante:</span> La elección del tipo de cimentación depende de las características del suelo y las particularidades de su terreno. Para obtener la evaluación más precisa, recomendamos consultar con nuestros especialistas.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FoundationTypeDialog;
