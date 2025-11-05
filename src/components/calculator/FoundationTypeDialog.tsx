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
    title: "Ленточный фундамент",
    description: "Прочный и надежный фундамент для долговечных построек",
    content: {
      text: "Ленточный фундамент представляет собой железобетонную конструкцию, проходящую по периметру здания и под несущими стенами. Обеспечивает равномерное распределение нагрузки и высокую устойчивость.",
      details: "Фундамент закладывается по периметру дома плюс одна лента посередине для дополнительной прочности. Глубина заложения зависит от типа грунта и климатических условий.",
      pricing: "Стоимость: 300 € за погонный метр",
      consumption: "Расчет: периметр дома + одна центральная лента по меньшей стороне",
      note: "Рекомендуется для постоянного проживания"
    },
    image: "/lovable-uploads/foundation-strip.jpg"
  },
  monolithic: {
    title: "Монолитная подушка",
    description: "Максимально прочное и стабильное основание",
    content: {
      text: "Монолитная плита — это сплошное железобетонное основание под всей площадью дома. Обеспечивает максимальную устойчивость и равномерное распределение нагрузки на грунт.",
      details: "Идеально подходит для сложных грунтов, обеспечивает защиту от промерзания и влаги. Монолитная конструкция исключает появление трещин и деформаций.",
      pricing: "Стоимость: 500 € за м²",
      consumption: "Расчет: площадь дома × 500 €",
      note: "Оптимальный выбор для капитального строительства"
    },
    image: "/lovable-uploads/foundation-monolithic.jpg"
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
