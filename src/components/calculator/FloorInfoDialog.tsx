
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
                <img 
                  src="/lovable-uploads/f3c6717b-8e54-4e38-9bcf-b8630ac7b079.png" 
                  alt="Структура пола - вид 1" 
                  className="rounded-md border border-gray-200 w-full"
                />
                <div className="mt-4 space-y-1">
                  <p className="text-sm">1. Viga laminada 120 mm x 120 mm</p>
                  <p className="text-sm">2. Viga clase C24 195 mm x 45 mm</p>
                  <p className="text-sm">3. Barra de apoyo 48 mm x 48 mm</p>
                  <p className="text-sm">4. OSB 9 mm o 12 mm</p>
                  <p className="text-sm">5. Barrera de vapor WURTH</p>
                  <p className="text-sm">6. Lana de Roca</p>
                  <p className="text-sm">7. Barrera de vapor WURTH</p>
                  <p className="text-sm">8. OSB 22 mm</p>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/a5a7287c-4cb7-4fac-b39c-1748397db625.png" 
                  alt="Структура пола - вид 2" 
                  className="rounded-md border border-gray-200 w-full"
                />
                <div className="mt-4 space-y-1">
                  <p className="text-sm">1. Viga laminada 120 mm x 120 mm</p>
                  <p className="text-sm">2. Viga clase C24 195 mm x 45 mm</p>
                  <p className="text-sm">3. Barra de apoyo 48 mm x 48 mm</p>
                  <p className="text-sm">4. OSB 9 mm o 12 mm</p>
                  <p className="text-sm">5. Panel poliestireno</p>
                  <p className="text-sm">6. OSB 22 mm</p>
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
