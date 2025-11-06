
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FloorThicknessDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Más sobre espesor del suelo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Estructura del suelo</DialogTitle>
          <DialogDescription>
            Espesor y estructura del suelo
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 pt-2">
          <p className="text-sm">1 Madera laminada 120 mm x 120 mm</p>
          <p className="text-sm">2 Viga clase C24 195 mm x 45 mm</p>
          <p className="text-sm">3 Listón de soporte 48 mm x 48 mm</p>
          <p className="text-sm">4 OSB 9 mm o 12 mm</p>
          <p className="text-sm">5 Panel de poliestireno expandido</p>
          <p className="text-sm">6 OSB 22 mm</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FloorThicknessDialog;
