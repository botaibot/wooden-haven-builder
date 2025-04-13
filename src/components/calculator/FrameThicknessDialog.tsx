
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FrameThicknessDialog = ({ houseType }: { houseType: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о {houseType === "frame" ? "каркасе" : "брусе"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Структура {houseType === "frame" ? "каркаса" : "клееного бруса"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex justify-center p-4">
          <div 
            className="transition-transform duration-300 hover:scale-125 cursor-zoom-in"
            style={{ transformOrigin: 'center' }}
          >
            <img 
              src="/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png" 
              alt="Структура каркаса" 
              className="rounded-md border border-gray-200 max-h-[70vh]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FrameThicknessDialog;
