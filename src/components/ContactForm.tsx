
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
        title: "Error",
        description: "Por favor, complete todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    const baseWebhookUrl = 'https://hook.eu2.make.com/5cwhtg1q0ri4qpvw3ihaueqonng7g8a0';
    
    // Enviamos datos a través de parámetros URL
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });
    
    const webhookUrl = `${baseWebhookUrl}?${params.toString()}`;
    
    try {
      console.log("Enviando datos al webhook vía URL:", webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: "GET",
        mode: "no-cors"
      });
      
      toast({
        title: "Mensaje enviado",
        description: "¡Gracias por su mensaje! Nos pondremos en contacto con usted en breve.",
      });

      // Limpieza del formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtelo más tarde.",
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
            Su nombre
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Introduzca su nombre"
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
            placeholder="Introduzca su email"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Número de teléfono
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Introduzca su número de teléfono"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escriba su mensaje"
          required
          className="w-full min-h-[120px]"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-wood hover:bg-wood-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;
