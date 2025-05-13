
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea"; 
import { useToast } from "@/hooks/use-toast";

interface MaterialCalculatorProps {
  width: number; // Width of one piece in mm
  length: number; // Length of one piece in mm
}

const MaterialCalculator = ({ width, length }: MaterialCalculatorProps) => {
  const { toast } = useToast();
  const [wallWidth, setWallWidth] = useState<number>(0);
  const [wallHeight, setWallHeight] = useState<number>(0);
  const [totalArea, setTotalArea] = useState<number>(0);
  const [piecesNeeded, setPiecesNeeded] = useState<number>(0);
  const [piecesWithBuffer, setPiecesWithBuffer] = useState<number>(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (wallWidth > 0 && wallHeight > 0) {
      // Calculate total area in square meters
      const area = wallWidth * wallHeight;
      setTotalArea(area);

      // Calculate number of pieces needed
      // Formula: Area (m²) / (Width_mm × Length_mm / 1,000,000)
      const pieceAreaInSqM = (width * length) / 1000000;
      const pieces = area / pieceAreaInSqM;
      setPiecesNeeded(Math.ceil(pieces)); // Round up to ensure enough pieces
      
      // Calculate with 10% buffer
      setPiecesWithBuffer(Math.ceil(pieces * 1.1));
    } else {
      setTotalArea(0);
      setPiecesNeeded(0);
      setPiecesWithBuffer(0);
    }
  }, [wallWidth, wallHeight, width, length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните ваше имя и номер телефона",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Создаем объект с данными расчета материалов и контактной информацией
    const calculationData = {
      contactInfo: contactForm,
      materialCalculation: {
        materialType: `${width}×${length} мм`,
        wallDimensions: `${wallWidth}×${wallHeight} м`,
        totalArea: `${totalArea.toFixed(2)} м²`,
        piecesNeeded: piecesNeeded,
        piecesWithBuffer: piecesWithBuffer,
        timestamp: new Date().toISOString(),
      }
    };
    
    try {
      // Здесь будет webhook для отправки данных менеджеру
      const webhookUrl = window.localStorage.getItem('managerWebhookUrl') || 'https://hooks.zapier.com/hooks/catch/your-webhook-id';
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Для обхода CORS при работе с внешними API
        body: JSON.stringify(calculationData),
      });
      
      toast({
        title: "Расчет отправлен",
        description: "Менеджер свяжется с вами для уточнения деталей заказа!",
      });
      
      // Закрываем диалог
      setIsContactFormOpen(false);
      
      // Сбрасываем форму
      setContactForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить данные. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-nature-light/20 p-4 rounded-md mt-4">
      <h4 className="text-sm font-semibold mb-3">Калькулятор материалов</h4>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <Label htmlFor="wall-width" className="text-sm mb-1 block">
            Ширина стены (м)
          </Label>
          <Input
            id="wall-width"
            type="number"
            min="0"
            step="0.1"
            value={wallWidth || ""}
            onChange={(e) => setWallWidth(parseFloat(e.target.value) || 0)}
            className="h-9"
          />
        </div>
        <div>
          <Label htmlFor="wall-height" className="text-sm mb-1 block">
            Высота стены (м)
          </Label>
          <Input
            id="wall-height"
            type="number"
            min="0"
            step="0.1"
            value={wallHeight || ""}
            onChange={(e) => setWallHeight(parseFloat(e.target.value) || 0)}
            className="h-9"
          />
        </div>
      </div>
      
      {totalArea > 0 && (
        <div className="space-y-1 text-sm">
          <p className="font-medium">
            Общая площадь: <span className="text-nature-dark">{totalArea.toFixed(2)} м²</span>
          </p>
          <p className="font-medium">
            Необходимое количество: <span className="text-nature-dark">{piecesNeeded} шт.</span>
          </p>
          <p className="font-medium">
            С запасом 10%: <span className="text-nature-dark">{piecesWithBuffer} шт.</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            * Рекомендуем добавить запас на подрезку
          </p>
          
          {piecesNeeded > 0 && (
            <Button 
              size="sm" 
              className="mt-3 w-full sm:w-auto bg-nature text-white hover:bg-nature-dark"
              onClick={() => setIsContactFormOpen(true)}
            >
              Заказать материалы
            </Button>
          )}
        </div>
      )}
      
      {/* Форма заказа материалов */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Заказ материалов</DialogTitle>
            <DialogDescription>
              Заполните форму, и менеджер свяжется с вами для оформления заказа материалов
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleContactFormSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  placeholder="example@mail.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Комментарий</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  placeholder="Напишите ваши дополнительные пожелания или вопросы"
                  rows={3}
                />
              </div>
              
              <div className="p-3 bg-gray-50 rounded-md">
                <h5 className="text-sm font-medium mb-2">Расчет материалов:</h5>
                <p className="text-sm">Размер материала: {width}×{length} мм</p>
                <p className="text-sm">Размеры стены: {wallWidth}×{wallHeight} м</p>
                <p className="text-sm">Общая площадь: {totalArea.toFixed(2)} м²</p>
                <p className="text-sm">Количество материала: {piecesWithBuffer} шт. (с запасом 10%)</p>
              </div>
            </div>
            
            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactFormOpen(false)}
                className="mr-2"
              >
                Отмена
              </Button>
              <Button 
                type="submit" 
                className="bg-nature text-white hover:bg-nature-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaterialCalculator;
