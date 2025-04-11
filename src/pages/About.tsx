
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Shield, Award, Clock, Users, Factory, Hammer, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageBanner 
        title="Добро пожаловать в Северный лес!" 
        description="Ваш надежный партнер в строительстве деревянных домов и поставке высококачественных строительных материалов на Тенерифе"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">О компании Bosque Nórdico</h2>
              <p className="text-gray-700 mb-6">
                В компании Bosque Nórdico мы гордимся тем, что являемся лидерами лесной промышленности 
                Канарских островов, предлагая высококачественную продукцию, сочетающую в себе долговечность, 
                элегантность и функциональность.
              </p>
              <p className="text-gray-700 mb-6">
                Наша цель выходит за рамки просто продажи древесины по доступным ценам и высокого качества; 
                Но мы стремимся превратить дерево в дом, и вместе с вами мы можем создать теплый и уютный 
                дом, отражающий ваш стиль.
              </p>
              <p className="text-gray-700">
                В Bosque Nórdico мы понимаем, с какими трудностями сталкиваемся на Канарских островах. 
                От ограниченности материалов до нехватки квалифицированной рабочей силы — мы сталкиваемся 
                с препятствиями, которые вдохновляют нас на инновации и поиск креативных решений. 
                Свяжитесь с нами сегодня, и вместе мы наполним ваш дом теплом и любовью.
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

      <section className="py-16 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Наше производство</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Мы гордимся нашим собственным производством на Канарских островах, где создаём высококачественные 
            изделия из дерева с использованием современного оборудования и традиционных технологий обработки древесины.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/7cc0e6fc-4424-4c50-bd13-55d039c1312a.png" 
                alt="Производство брусьев" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Качественные материалы</h3>
                <p className="text-gray-600">Мы используем только отборную древесину высшего качества для наших изделий.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/e9548a1d-f0f0-49df-ad6e-e8834af99853.png" 
                alt="Процесс обработки" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Современное оборудование</h3>
                <p className="text-gray-600">Наше производство оснащено новейшим оборудованием для точной обработки древесины.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/ce153320-1521-4614-bb4e-8ac2698add00.png" 
                alt="Производственный процесс" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Точность изготовления</h3>
                <p className="text-gray-600">Каждая деталь проходит тщательный контроль качества на всех этапах производства.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/8de16ff8-8ae9-450d-9c71-dd152d2fcc08.png" 
                alt="Готовая продукция" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Упаковка и хранение</h3>
                <p className="text-gray-600">Наша продукция бережно упаковывается для сохранения всех качеств древесины.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/0a0d77a1-a611-442f-8391-b7bb7a02d398.png" 
                alt="Деревянные конструкции" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Готовые конструкции</h3>
                <p className="text-gray-600">Производим детали для деревянных домов любой сложности и конфигурации.</p>
              </CardContent>
            </Card>
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
          <h2 className="section-title text-center mx-auto mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <Factory size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Собственное производство</h3>
              </div>
              <p className="text-gray-600">
                Полный контроль качества на всех этапах: от выбора сырья до финальной обработки изделий.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <Hammer size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Опытные мастера</h3>
              </div>
              <p className="text-gray-600">
                Наши специалисты имеют многолетний опыт работы с деревом и глубокие знания свойств различных пород.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <Ruler size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Индивидуальный подход</h3>
              </div>
              <p className="text-gray-600">
                Возможность изготовления нестандартных изделий по индивидуальным проектам и размерам.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
