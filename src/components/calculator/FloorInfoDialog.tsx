
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FloorInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о полах
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Структура полов</DialogTitle>
          <DialogDescription>
            Устройство полов в деревянных домах
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center p-4">
          <div 
            className="transition-transform duration-300 hover:scale-130 cursor-zoom-in"
            style={{ transformOrigin: 'center' }}
          >
            <img 
              src="/lovable-uploads/f3c6717b-8e54-4e38-9bcf-b8630ac7b079.png" 
              alt="Структура пола" 
              className="rounded-md border border-gray-200 max-h-[60vh]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FloorInfoDialog;
