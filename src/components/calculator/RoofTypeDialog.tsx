import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";

interface RoofTypeDialogProps {
  type: "simple" | "volado" | "moderno" | "alto";
  children: React.ReactNode;
}

const ROOF_DETAILS = {
  simple: {
    title: "Techo Simple",
    description: "Классическая двускатная крыша",
    content: {
      text: "Простая двускатная крыша — это самый экономичный и практичный вариант кровли. Обеспечивает надежную защиту от осадков и легко обслуживается.",
      details: "Конструкция состоит из двух скатов, расположенных под углом. Минимальный свес 20 см по периметру обеспечивает защиту стен от дождя. Подходит для большинства климатических условий.",
      pricing: "Стоимость: 100 € за м²",
      consumption: "Расчет: площадь дома × 100 €",
      note: "Оптимальное соотношение цены и качества"
    },
    image: "/lovable-uploads/roof-simple.jpg"
  },
  volado: {
    title: "Techo Volado",
    description: "Крыша с увеличенными свесами",
    content: {
      text: "Крыша с увеличенными свесами обеспечивает дополнительную защиту стен и создает затененные зоны вокруг дома. Идеальна для солнечных регионов.",
      details: "Увеличенные свесы кровли (50-80 см) защищают фасад от осадков и солнца, создают дополнительное пространство для террасы. Более сложная конструкция требует усиленного каркаса.",
      pricing: "Стоимость: 150 € за м²",
      consumption: "Расчет: площадь дома × 150 €",
      note: "Рекомендуется для жаркого климата"
    },
    image: "/lovable-uploads/roof-volado.jpg"
  },
  moderno: {
    title: "Estilo Moderno",
    description: "Современная архитектурная крыша",
    content: {
      text: "Современный дизайн кровли с уникальными архитектурными решениями. Плоская или односкатная крыша с минималистичным дизайном.",
      details: "Современная крыша может включать террасу на крыше, большие свесы, интересные углы наклона. Требует качественной гидроизоляции и профессионального монтажа. Создает уникальный внешний вид здания.",
      pricing: "Стоимость: 200 € за м²",
      consumption: "Расчет: площадь дома × 200 €",
      note: "Премиальный дизайн для современных домов"
    },
    image: "/lovable-uploads/roof-moderno.jpg"
  },
  alto: {
    title: "Techo Alto",
    description: "Высокая крыша с мансардой",
    content: {
      text: "Высокая крыша позволяет создать полноценный второй этаж или мансарду. Увеличивает жилое пространство без расширения фундамента.",
      details: "Крутые скаты крыши (45-60°) создают просторное подкровельное пространство, которое можно использовать как жилое помещение. Требует дополнительного утепления и окон в крыше.",
      pricing: "Стоимость: 150 € за м²",
      consumption: "Расчет: площадь дома × 150 €",
      note: "Максимальное использование пространства"
    },
    image: "/lovable-uploads/roof-alto.jpg"
  }
};

const RoofTypeDialog = ({ type, children }: RoofTypeDialogProps) => {
  const details = ROOF_DETAILS[type];

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
              <span className="font-medium">Важно:</span> Выбор типа крыши влияет не только на внешний вид дома, 
              но и на его функциональность. Для получения наиболее точной оценки рекомендуем 
              проконсультироваться с нашими специалистами.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RoofTypeDialog;
