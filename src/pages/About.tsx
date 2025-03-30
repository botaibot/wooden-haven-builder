
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative py-16 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">О нашей компании</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Ваш надежный партнер в строительстве деревянных домов и поставке 
            высококачественных строительных материалов на Тенерифе
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Наша история</h2>
              <p className="text-gray-700 mb-6">
                Компания WoodTenerife была основана в 2015 году группой профессионалов с многолетним опытом в 
                строительстве деревянных домов и торговле строительными материалами.
              </p>
              <p className="text-gray-700 mb-6">
                Мы начинали как небольшая компания, специализирующаяся на продаже пиломатериалов, 
                но благодаря высокому качеству нашей продукции и отличному сервису быстро заработали 
                хорошую репутацию на рынке Тенерифе.
              </p>
              <p className="text-gray-700">
                Сегодня WoodTenerife - это не только магазин строительных материалов, но и 
                строительная компания полного цикла, предлагающая проектирование и 
                строительство деревянных домов под ключ на солнечном острове Тенерифе.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1533155925277-bb0098f4b78d?q=80&w=1970" 
                alt="Наша компания" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-wood p-4 rounded-lg shadow-lg">
                <p className="text-white text-lg font-bold">С 2015 года на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wood-light/20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Shield size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Качество</h3>
              <p className="text-gray-600">
                Мы используем только высококачественные материалы и применяем современные технологии строительства.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Award size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Ответственность</h3>
              <p className="text-gray-600">
                Мы несем полную ответственность за качество нашей работы и соблюдение всех договоренностей.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Clock size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Пунктуальность</h3>
              <p className="text-gray-600">
                Мы всегда соблюдаем сроки строительства и поставки материалов, ценя время наших клиентов.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Users size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Клиентоориентированность</h3>
              <p className="text-gray-600">
                Мы индивидуально подходим к каждому клиенту, учитывая все пожелания и требования.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                  alt="Александр Петров" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wood-darkest mb-2">Александр Петров</h3>
                <p className="text-nature-dark mb-3">Генеральный директор</p>
                <p className="text-gray-600">
                  Более 15 лет опыта в строительстве деревянных домов и управлении строительными проектами.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                  alt="Елена Смирнова" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wood-darkest mb-2">Елена Смирнова</h3>
                <p className="text-nature-dark mb-3">Главный архитектор</p>
                <p className="text-gray-600">
                  Опытный архитектор с образованием в области экологичного строительства и дизайна.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070" 
                  alt="Дмитрий Иванов" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wood-darkest mb-2">Дмитрий Иванов</h3>
                <p className="text-nature-dark mb-3">Руководитель строительства</p>
                <p className="text-gray-600">
                  Профессиональный строитель с более чем 10-летним опытом в области деревянного строительства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
