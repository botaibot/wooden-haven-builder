
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const FloorInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о полах
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>Структура полов</DialogTitle>
          <DialogDescription>
            Устройство полов в деревянных домах
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh]">
          <div className="space-y-8 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div 
                  className="transition-transform duration-300 hover:scale-130 cursor-zoom-in"
                  style={{ transformOrigin: 'center' }}
                >
                  <img 
                    src="/lovable-uploads/f3c6717b-8e54-4e38-9bcf-b8630ac7b079.png" 
                    alt="Структура пола - вид 1" 
                    className="rounded-md border border-gray-200 w-full"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm">1. Клеёный брус 120 мм x 120 мм</p>
                  <p className="text-sm">2. Балка класса C24 195 мм x 45 мм</p>
                  <p className="text-sm">3. Опорная рейка 48 мм x 48 мм</p>
                  <p className="text-sm">4. OSB 9 мм или 12 мм</p>
                  <p className="text-sm">5. Пароизоляция WURTH</p>
                  <p className="text-sm">6. Каменная вата</p>
                  <p className="text-sm">7. Пароизоляция WURTH</p>
                  <p className="text-sm">8. OSB 22 мм</p>
                </div>
              </div>
              <div>
                <div 
                  className="transition-transform duration-300 hover:scale-130 cursor-zoom-in"
                  style={{ transformOrigin: 'center' }}
                >
                  <img 
                    src="/lovable-uploads/acfce229-78f3-4fbe-be5e-f40c0de28006.png" 
                    alt="Структура пола - вид 2" 
                    className="rounded-md border border-gray-200 w-full"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm">1. Клеёный брус 120 мм x 120 мм</p>
                  <p className="text-sm">2. Балка класса C24 195 мм x 45 мм</p>
                  <p className="text-sm">3. Опорная рейка 48 мм x 48 мм</p>
                  <p className="text-sm">4. OSB 9 мм или 12 мм</p>
                  <p className="text-sm">5. Пенополистирольная панель</p>
                  <p className="text-sm">6. OSB 22 мм</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-md text-center">
              <p className="text-sm text-muted-foreground italic">
                En las capas se puede utilizar otros tipos de materiales de aislamiento y acabados (revestimiento)
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FloorInfoDialog;
