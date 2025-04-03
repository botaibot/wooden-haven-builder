
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MaterialCalculator from "../MaterialCalculator";

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

export default RoofInfoDialog;
