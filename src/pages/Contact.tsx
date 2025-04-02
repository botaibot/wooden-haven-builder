
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative py-16 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1992')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Контакты</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы
          </p>
        </div>
      </div>

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
                        <p className="text-gray-700">Calle Arcilla 2, Pta.2,</p>
                        <p className="text-gray-700">38632 Arona, Guargacho,</p>
                        <p className="text-gray-700">Tenerife</p>
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
                    <p className="text-gray-700">+34 675 46 65 10</p>
                    <p className="text-gray-700">+34 603 70 16 67</p>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14058.35613891991!2d-16.7794554!3d28.2268853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a971fd9033f01%3A0x2eeb3da78d4c0be1!2sBosque%20N%C3%B3rdico!5e0!3m2!1sen!2sus!4v1682067316221!5m2!1sen!2sus" 
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
