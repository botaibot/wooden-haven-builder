
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <DialogTitle>Регулируемая металлическая опора</DialogTitle>
          <DialogDescription>
            Характеристики и особенности металлической опоры
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded border">
                <h3 className="text-lg font-medium mb-2">Регулируемая металлическая опора</h3>
                <p className="text-sm text-muted-foreground">
                  Толщина металла 6 мм. Регулируемые металлические опоры — базовый и самый экономичный вариант. 
                  Позволяет быстро установить дом на подготовленной площадке и при необходимости регулировать высоту.
                </p>
                <p className="text-sm mt-3">
                  Для маленьких домов до 30м² выкапывается земля под металлические опоры размером 50×50×50 см, делается 
                  подсыпка щебня и песка, укладывается бетонный блок, к которому прикручиваются опоры.
                </p>
                <p className="text-sm font-medium mt-2">Входит в базовую комплектацию</p>
                <p className="text-sm mt-2">Стоимость одной опоры: 60 € + 40 € (работа, материалы)</p>
                <p className="text-sm mt-1">Примерный расход: 7 опор на каждые 10 м² площади пола</p>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/85729617-ae77-4f48-831a-aca0d62cf8c1.png" 
                  alt="Металлическая регулируемая опора" 
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

export default FoundationInfoDialog;
