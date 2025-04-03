
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Info } from "lucide-react";
import MaterialCalculator from "../MaterialCalculator";
import { ROOF_INSULATION_DETAILS } from "./constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const RoofInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о кровле
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>Информация о кровельном пироге</DialogTitle>
          <DialogDescription>
            Структура и состав кровельного пирога, виды утепления и их характеристики
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="structure" className="mt-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger value="structure">Структура кровли</TabsTrigger>
            <TabsTrigger value="polystyrene">Пенополистирол</TabsTrigger>
            <TabsTrigger value="rockwool">Каменная вата</TabsTrigger>
            <TabsTrigger value="custom">Индивидуальный расчет</TabsTrigger>
          </TabsList>
          
          <TabsContent value="structure" className="space-y-4">
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
          </TabsContent>
          
          {Object.entries(ROOF_INSULATION_DETAILS).map(([key, details]) => (
            <TabsContent key={key} value={key === "polystyrene_40mm" ? "polystyrene" : key === "rockwool_60mm" ? "rockwool" : "custom"} className="space-y-6">
              <div className="bg-muted/40 rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-2">{details.title}</h3>
                <p className="text-muted-foreground mb-4">{details.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <div className="bg-green-100 p-1 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      Преимущества
                    </h4>
                    <ul className="space-y-2">
                      {details.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3">Лучший выбор для:</h4>
                    <ul className="space-y-2">
                      {details.bestFor.map((use, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-blue-100 mt-0.5 flex-shrink-0"></div>
                          <span className="text-sm">{use}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {details.limitations && (
                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-3">Ограничения:</h4>
                        <ul className="space-y-2">
                          {details.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Info className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {(key === "polystyrene_40mm" || key === "rockwool_60mm") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 bg-slate-50 p-4 rounded-md">
                    <div>
                      <h4 className="text-md font-medium mb-2">Теплопроводность:</h4>
                      <p className="text-sm">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="underline decoration-dotted">
                              {details.thermalConductivity}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-xs">
                                Чем ниже значение теплопроводности, тем лучше материал сохраняет тепло
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-md font-medium mb-2">Звукоизоляция:</h4>
                      <p className="text-sm">{details.soundInsulation}</p>
                    </div>
                  </div>
                )}
                
                {key === "custom" && details.note && (
                  <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
                    <p className="text-sm text-blue-800">{details.note}</p>
                  </div>
                )}
              </div>
              
              <div className="bg-slate-50 p-4 rounded-md border border-slate-100 text-center">
                <h4 className="font-medium">Нужна помощь с выбором?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Наши специалисты помогут подобрать оптимальное решение для вашего проекта
                </p>
                <Button variant="outline" className="mt-3">Связаться с нами</Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default RoofInfoDialog;
