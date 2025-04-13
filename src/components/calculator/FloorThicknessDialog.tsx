
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FloorThicknessDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о толщине пола
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Структура пола</DialogTitle>
          <DialogDescription>
            Толщина и структура пола
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 pt-2">
          <p className="text-sm">1 Клеёный брус 120 мм x 120 мм</p>
          <p className="text-sm">2 Балка класса C24 195 мм x 45 мм</p>
          <p className="text-sm">3 Опорная рейка 48 мм x 48 мм</p>
          <p className="text-sm">4 OSB 9 мм или 12 мм</p>
          <p className="text-sm">5 Пенополистирольная панель</p>
          <p className="text-sm">6 OSB 22 мм</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FloorThicknessDialog;
