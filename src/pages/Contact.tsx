
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin, Clock, MessageSquare, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageBanner 
        title="Контакты" 
        description="Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="section-title mb-8">Контактная информация</h2>
              <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <div className="mb-8">
                  <h3 className="font-bold text-lg text-wood-darkest mb-4">Наши адреса</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-wood-darkest mb-1">Norte de Tenerife</h4>
                    <div className="flex items-start gap-4">
                      <div className="bg-nature-light/20 p-3 rounded-full mt-1">
                        <MapPin size={24} className="text-nature-dark" />
                      </div>
                      <div>
                        <p className="text-gray-700">Calle Laura Grote de la Puerta, nº 14,</p>
                        <p className="text-gray-700">edificio 1, Nave 3, Fase 3ª,</p>
                        <p className="text-gray-700">38108, Polígono El Mayorazgo</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-wood-darkest mb-1">Sur de Tenerife</h4>
                    <div className="flex items-start gap-4">
                      <div className="bg-nature-light/20 p-3 rounded-full mt-1">
                        <MapPin size={24} className="text-nature-dark" />
                      </div>
                      <div>
                        <p className="text-gray-700">C. Arcilla, 2, pta 2</p>
                        <p className="text-gray-700">38632 Guargacho,</p>
                        <p className="text-gray-700">Santa Cruz de Tenerife</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-nature-light/20 p-3 rounded-full mt-1">
                    <Phone size={24} className="text-nature-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-darkest mb-1">Телефон</h3>
                    <div className="flex items-center gap-2 text-gray-700">
                      <p>+34 659 94 62 34</p>
                      <a href="https://wa.me/34659946234" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                        <MessageCircle size={18} />
                      </a>
                      <a href="https://t.me/+34659946234" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        <MessageSquare size={18} />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <p>+34 606 85 65 06</p>
                      <a href="https://wa.me/34606856506" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                        <MessageCircle size={18} />
                      </a>
                      <a href="https://t.me/+34606856506" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        <MessageSquare size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-nature-light/20 p-3 rounded-full mt-1">
                    <Mail size={24} className="text-nature-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-darkest mb-1">Email</h3>
                    <p className="text-gray-700">bosquenordico@gmail.com</p>
                    <p className="text-gray-700">info@bosquenordico.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-nature-light/20 p-3 rounded-full mt-1">
                    <Clock size={24} className="text-nature-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-darkest mb-1">Часы работы</h3>
                    <p className="text-gray-700">Пн-Пт: 10:00 - 17:00</p>
                    <p className="text-gray-700">Сб: По предварительной записи</p>
                    <p className="text-gray-700">Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="section-title mb-8">Напишите нам</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-wood-light/20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Мы на карте</h2>
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.6034252686183!2d-16.64238322467732!3d28.029519975959598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9b212e5abc45%3A0x78affe51d3bcb75d!2sC.%20Arcilla%2C%202%2C%2038632%20Guargacho%2C%20Santa%20Cruz%20de%20Tenerife%2C%20Spain!5e0!3m2!1sen!2sus!4v1713034839641!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosque Nórdico - Sur"
            ></iframe>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.956296042947!2d-16.285735824383036!3d28.47971047566683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc91bb33525d%3A0xa5e315f9f7a2be22!2sC.%20Laura%20Grote%20de%20la%20Puerta%2C%2014%2C%2038108%20Santa%20Cruz%20de%20Tenerife%2C%20Spain!5e0!3m2!1sen!2sus!4v1682067450893!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosque Nórdico - Norte"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
