
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
                  src="/lovable-uploads/85729617-ae77-4f48-831a-aca0d62cf8c1.png" 
                  alt="Металлическая регулируемая опора" 
                  className="rounded-md shadow-sm"
                />
              </div>
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
            
            <div className="bg-slate-50 p-4 rounded border">
              <h3 className="text-lg font-medium mb-2">Монолитный фундамент</h3>
              <div className="mb-4 h-40 bg-gray-200 flex items-center justify-center rounded-md">
                <p className="text-sm text-gray-500">Схема монолитного фундамента</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Монолитный железобетонный фундамент обеспечивает максимальную надежность и долговечность. Идеален для домов 
                с большой площадью или при сложных грунтах.
              </p>
              <p className="text-sm mt-3">
                Стоимость зависит от многих факторов и рассчитывается индивидуально. Для более крупных домов 
                заливаем бетонные столбы примерно таких же размеров, как и для легкого фундамента.
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

export default FoundationInfoDialog;
