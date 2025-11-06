
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FrameThicknessDialog = ({ houseType }: { houseType: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Más sobre {houseType === "frame" ? "entramado" : "madera laminada"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Estructura de {houseType === "frame" ? "entramado" : "madera laminada"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex justify-center p-4">
          <div 
            className="transition-transform duration-300 hover:scale-125 cursor-zoom-in"
            style={{ transformOrigin: 'center' }}
          >
            <img 
              src="/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png" 
              alt="Estructura del entramado" 
              className="rounded-md border border-gray-200 max-h-[70vh]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FrameThicknessDialog;
