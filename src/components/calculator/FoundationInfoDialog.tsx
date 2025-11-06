
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const FoundationInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Más sobre cimentación
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Soporte metálico regulable</DialogTitle>
          <DialogDescription>
            Características y detalles del soporte metálico
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded border">
                <h3 className="text-lg font-medium mb-2">Soporte metálico regulable</h3>
                <p className="text-sm text-muted-foreground">
                  Espesor del metal 6 mm. Los soportes metálicos regulables son la opción básica y más económica. 
                  Permiten instalar rápidamente la casa sobre una superficie preparada y ajustar la altura cuando sea necesario.
                </p>
                <p className="text-sm mt-3">
                  Para casas pequeñas de hasta 30m² se excava tierra para soportes metálicos de 50×50×50 cm, se hace 
                  un relleno de grava y arena, se coloca un bloque de hormigón al que se atornillan los soportes.
                </p>
                <p className="text-sm font-medium mt-2">Incluido en la configuración básica</p>
                <p className="text-sm mt-2">Coste de un soporte: 60 € + 40 € (mano de obra, materiales)</p>
                <p className="text-sm mt-1">Consumo aproximado: 7 soportes por cada 10 m² de superficie de suelo</p>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/85729617-ae77-4f48-831a-aca0d62cf8c1.png" 
                  alt="Soporte metálico regulable"
                  className="rounded-md shadow-sm w-full h-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            
            <p className="text-sm bg-amber-50 p-3 rounded">
              <span className="font-medium">Importante:</span> La elección del tipo de cimentación depende de las características del suelo y 
              de las condiciones de su parcela. Para obtener la estimación más precisa recomendamos 
              consultar con nuestros especialistas.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FoundationInfoDialog;
