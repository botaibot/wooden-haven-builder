
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea"; 
import { useToast } from "@/hooks/use-toast";

interface MaterialCalculatorProps {
  width: number;
  length: number;
  isTerraceBoard?: boolean;
}

const MaterialCalculator = ({ width, length, isTerraceBoard = false }: MaterialCalculatorProps) => {
  const { toast } = useToast();
  const [squareMeters, setSquareMeters] = useState<number>(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    
    const calculationData = {
      contactInfo: contactForm,
      materialCalculation: {
        materialType: `${width}×${length} мм`,
        squareMeters: `${squareMeters} м²`,
        timestamp: new Date().toISOString(),
      }
    };
    
    try {
      const webhookUrl = window.localStorage.getItem('managerWebhookUrl') || 'https://hooks.zapier.com/hooks/catch/your-webhook-id';
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(calculationData),
      });
      
      toast({
        title: "Расчет отправлен",
        description: "Менеджер свяжется с вами для уточнения деталей заказа!",
      });
      
      setIsContactFormOpen(false);
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
      
      <div className="mb-4">
        <Label htmlFor="square-meters" className="text-sm mb-1 block">
          Количество (м²)
        </Label>
        <Input
          id="square-meters"
          type="number"
          min="0"
          step="0.1"
          value={squareMeters || ""}
          onChange={(e) => setSquareMeters(parseFloat(e.target.value) || 0)}
          className="h-9"
          placeholder="Введите количество в квадратных метрах"
        />
      </div>
      
      {squareMeters > 0 && (
        <div className="space-y-1 text-sm">
          <p className="font-medium">
            Количество: <span className="text-nature-dark">{squareMeters} м²</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            * Менеджер поможет рассчитать точное количество досок
          </p>
          
          <Button 
            size="sm" 
            className="mt-3 w-full sm:w-auto bg-nature text-white hover:bg-nature-dark"
            onClick={() => setIsContactFormOpen(true)}
          >
            Заказать материалы
          </Button>
        </div>
      )}
      
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
                <p className="text-sm">Количество: {squareMeters} м²</p>
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
