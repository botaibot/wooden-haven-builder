import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FormValues } from "./types";
import { formatCurrency } from "./constants";

interface OrderDetailsFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formValues: FormValues;
  totalPrice: number;
  totalArea: number;
}

const OrderDetailsForm = ({ open, onOpenChange, formValues, totalPrice, totalArea }: OrderDetailsFormProps) => {
  const { toast } = useToast();
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    // Webhook URL для отправки данных менеджеру
    const webhookUrl = 'https://hook.eu2.make.com/5cwhtg1q0ri4qpvw3ihaueqonng7g8a0';
    
    // Создаем объект с данными заказа и контактной информацией
    const orderData = {
      type: "manager_request",
      contactInfo: contactForm,
      orderDetails: {
        houseType: formValues.houseType === "frame" ? "Каркасный дом" : "Дом из клееного бруса",
        dimensions: `${formValues.width} × ${formValues.length} м`,
        thickness: formValues.thickness,
        roofInsulation: formValues.roofInsulation,
        foundation: formValues.foundation,
        terrace: formValues.terrace ? `${formValues.terraceSize} м²` : "Нет",
        canopy: formValues.canopy ? `${formValues.canopySize} м²` : "Нет",
        solarPanels: formValues.solarPanels ? `${formValues.solarPower} кВт` : "Нет",
        fireProtection: formValues.fireProtection ? "Да" : "Нет",
        totalArea: `${totalArea.toFixed(1)} м²`,
        totalPrice: formatCurrency(totalPrice),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        pageUrl: window.location.href
      }
    };
    
    try {
      console.log("Отправка данных на webhook:", webhookUrl, orderData);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(orderData),
      });
      
      toast({
        title: "Заявка отправлена",
        description: "Данные переданы менеджеру. Мы свяжемся с вами в ближайшее время!",
      });
      
      // Закрываем диалог
      onOpenChange(false);
      
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Отправить расчет менеджеру</DialogTitle>
          <DialogDescription>
            Оставьте свои контактные данные, и наш менеджер свяжется с вами для уточнения деталей.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
                placeholder="Напишите ваши пожелания или вопросы"
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="mr-2"
            >
              Отмена
            </Button>
            <Button 
              type="submit" 
              className="bg-wood text-white hover:bg-wood-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsForm;
