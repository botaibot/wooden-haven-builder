
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    const webhookUrl = 'https://hook.eu2.make.com/5cwhtg1q0ri4qpvw3ihaueqonng7g8a0';
    
    const contactData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      type: "contact_form",
      timestamp: new Date().toISOString()
    };
    
    try {
      console.log("Отправка данных на webhook:", webhookUrl, contactData);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(contactData),
      });
      
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше обращение! Мы свяжемся с вами в ближайшее время.",
      });

      // Очистка формы
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Ваше имя
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введите ваше имя"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Введите ваш email"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Номер телефона
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Введите ваш номер телефона"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Сообщение
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Напишите ваше сообщение"
          required
          className="w-full min-h-[120px]"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-wood hover:bg-wood-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправка..." : "Отправить сообщение"}
      </Button>
    </form>
  );
};

export default ContactForm;
