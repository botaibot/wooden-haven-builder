
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Shield, Award, Clock, Users, Factory, Hammer, Ruler, Truck, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageBanner 
        title="Bosque Nórdico — Дерево, которое работает на вас" 
        description="Команда, которая уже более 6 лет помогает воплощать деревянные проекты на Канарских островах"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">О компании Bosque Nórdico</h2>
              <p className="text-gray-700 mb-6">
                BOSQUE — это команда, которая уже более 6 лет помогает воплощать деревянные проекты 
                на Канарских островах. Мы не просто продаём материалы — мы предлагаем решения. 
                От выбора доски до строительства дома — вы получаете поддержку, основанную на практике, 
                опыте и любви к качеству.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1533155925277-bb0098f4b78d?q=80&w=1970" 
                alt="Наша компания" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-wood p-4 rounded-lg shadow-lg">
                <p className="text-white text-lg font-bold">Более 6 лет на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Натуральные строительные материалы</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            В BOSQUE NÓRDICO мы объединяем опыт, архитектуру, инженерию и логистику, чтобы предложить 
            не просто дерево — а готовое решение. Решение, которое работает.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/7cc0e6fc-4424-4c50-bd13-55d039c1312a.png" 
                alt="Качественные материалы из Европы" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Материалы из Европы</h3>
                <p className="text-gray-600">Поставляем древесину с заводов Германии, Австрии и Скандинавии.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/e9548a1d-f0f0-49df-ad6e-e8834af99853.png" 
                alt="Адаптация под климат Канар" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Адаптация под климат</h3>
                <p className="text-gray-600">Адаптируем конструктив под климат Канар — солнце, влагу, ветер.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/ce153320-1521-4614-bb4e-8ac2698add00.png" 
                alt="Контроль качества" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Контроль качества</h3>
                <p className="text-gray-600">Выезжаем на объекты, консультируем, помогаем собрать правильно.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Наш подход</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Shield size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Честность</h3>
              <p className="text-gray-600">
                Говорим честно: что нужно, что подойдёт, а что не стоит брать.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Award size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Объяснения</h3>
              <p className="text-gray-600">
                Не уговариваем — объясняем. Без перегруза терминами — только суть.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Ruler size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Точность</h3>
              <p className="text-gray-600">
                Опираемся на точность, долговечность, совместимость.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Users size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Поддержка</h3>
              <p className="text-gray-600">
                Мы рядом на каждом этапе — от идеи до готового дома.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wood-light/20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Дома и конструкции под ключ</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Мы строим дома по двум технологиям. Обе технологии адаптированы под климат Канар. 
            Вы выбираете ту, что ближе вам по стилю, бюджету и ощущению.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/8de16ff8-8ae9-450d-9c71-dd152d2fcc08.png" 
                alt="Каркасные дома" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Каркасные дома (entramado ligero)</h3>
                <p className="text-gray-600 mb-4">
                  Лёгкие, гибкие, энергоэффективные. Современная технология строительства 
                  с отличными теплоизоляционными свойствами.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/0a0d77a1-a611-442f-8391-b7bb7a02d398.png" 
                alt="Дома из клеёного бруса" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Дома из клеёного бруса</h3>
                <p className="text-gray-600 mb-4">
                  Прочные, монолитные, с естественной текстурой дерева. Традиционная технология 
                  с современными улучшениями.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Мы рядом на каждом этапе</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Мы не ограничиваемся продажей. Если вы сомневаетесь в выборе — подскажем, рассчитаем, объясним. 
            Расскажем, как работает утепление, защита от влаги, пароизоляция. 
            Мы не продаём "товар" — мы предлагаем систему, которая работает для вас.
          </p>
        </div>
      </section>

      <section className="py-16 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Доставка и сопровождение по всем островам</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Наши склады и логистика позволяют быстро доставлять материалы по всему архипелагу: 
            Тенерифе, Ла-Пальма, Гран-Канария, Лансароте, Эль-Йерро и другие. 
            Мы выезжаем на объекты, консультируем, поддерживаем на каждом этапе — от идеи до сборки.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <Factory size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Склады и логистика</h3>
              </div>
              <p className="text-gray-600">
                Быстрая доставка материалов по всему архипелагу благодаря нашей логистической сети.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <Truck size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Выезд на объекты</h3>
              </div>
              <p className="text-gray-600">
                Наши специалисты выезжают на объекты для консультаций и контроля качества работ.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Все острова</h3>
              </div>
              <p className="text-gray-600">
                Работаем на всех островах Канарского архипелага — от Тенерифе до Эль-Йерро.
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
