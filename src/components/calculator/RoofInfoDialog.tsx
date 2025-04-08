
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const RoofInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full p-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
        >
          <Info size={14} />
          <span className="sr-only">Информация о кровельном пироге</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Кровельный пирог</DialogTitle>
          <DialogDescription>
            Информация о структуре кровельного пирога и вариантах утепления
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="mb-6">
            <img
              src="/lovable-uploads/f8112d29-484a-4ca5-b7d2-f6ddf7cc2dda.png"
              alt="Структура кровельного пирога"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          
          <h4 className="text-lg font-semibold">Структура кровельного пирога</h4>
          <p className="text-sm text-muted-foreground">
            Кровельный пирог представляет собой многослойную конструкцию, которая 
            обеспечивает защиту от атмосферных осадков, теплоизоляцию и 
            вентиляцию кровли. 
          </p>

          <div className="border-l-4 border-nature-dark pl-4 py-1 mt-4">
            <h5 className="font-medium">Базовая структура:</h5>
            <ul className="list-disc ml-4 text-sm mt-2 space-y-1">
              <li>Кровельное покрытие (металлочерепица, битумная черепица и др.)</li>
              <li>Обрешетка</li>
              <li>Гидроизоляционная мембрана</li>
              <li>Утеплитель</li>
              <li>Пароизоляция</li>
              <li>Несущая конструкция</li>
            </ul>
          </div>

          <div className="border-l-4 border-nature-dark pl-4 py-1 mt-4">
            <h5 className="font-medium">Варианты утепления:</h5>
            <ul className="list-disc ml-4 text-sm mt-2 space-y-1">
              <li>Минеральная вата - негорючий материал с хорошей звукоизоляцией</li>
              <li>Пенополистирол - легкий материал с высоким теплосопротивлением</li>
              <li>Эковата - экологически чистый материал из переработанной целлюлозы</li>
              <li>PIR-плиты - современный материал с низкой теплопроводностью</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoofInfoDialog;
