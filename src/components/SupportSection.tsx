
import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupportSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-wood-light/10 to-nature-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-wood-dark">
            Мы рядом, когда это нужно
          </h2>
          
          <div className="text-lg text-gray-700 mb-8 space-y-4">
            <p className="leading-relaxed">
              Дерево — это не просто товар, а начало вашего проекта.
            </p>
            <p className="leading-relaxed">
              Поэтому мы не ограничиваемся выгодными ценами — мы сопровождаем ваш проект от первого вопроса до финального крепежа:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-wood rounded-full"></div>
              </div>
              <p className="text-gray-700">Помогаем выбрать оптимальное конструктивное решение</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-wood rounded-full"></div>
              </div>
              <p className="text-gray-700">Выезжаем на объект для консультации</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-wood rounded-full"></div>
              </div>
              <p className="text-gray-700">При необходимости подсказываем по узлам, шагам и сборке</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-wood rounded-full"></div>
              </div>
              <p className="text-gray-700">Решаем нестандартные задачи</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-wood rounded-full"></div>
              </div>
              <p className="text-gray-700">Работаем на всех Канарских островах и на материковой части Испании</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-wood-dark">Свяжитесь с нами</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} className="text-wood" />
                <span>WhatsApp: +34 659 94 62 34</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={18} className="text-wood" />
                <span>E-mail: info@bosquenordico.com</span>
              </div>
            </div>
            <Button asChild className="bg-wood hover:bg-wood-dark text-white">
              <Link to="/contact" className="flex items-center gap-2">
                <MessageSquare size={16} />
                Связаться с нами
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
