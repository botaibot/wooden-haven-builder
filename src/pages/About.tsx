
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Shield, Award, Clock, Users, Factory, Hammer, Ruler, Truck, MapPin, Trees, Heart } from "lucide-react";
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
              BOSQUE NÓRDICO — Дерево, которое работает на вас
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              BOSQUE — это команда, которая уже более 6 лет помогает воплощать деревянные проекты на Канарских островах. 
              Мы не просто продаём материалы — мы предлагаем решения. От выбора доски до строительства дома — 
              вы получаете поддержку, основанную на практике, опыте и любви к качеству.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
              Натуральные строительные материалы
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              В BOSQUE NÓRDICO мы объединяем опыт, архитектуру, инженерию и логистику, чтобы предложить 
              не просто дерево — а готовое решение. Решение, которое работает.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Factory size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Импорт из Европы</h3>
                <p className="text-gray-600">Поставляем древесину с заводов Германии, Австрии и Скандинавии</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Hammer size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Проектирование</h3>
                <p className="text-gray-600">Проектируем и строим каркасные дома и дома из клеёного бруса</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Trees size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Адаптация климата</h3>
                <p className="text-gray-600">Адаптируем конструктив под климат Канар — солнце, влага, ветер</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Users size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Поддержка на объекте</h3>
                <p className="text-gray-600">Выезжаем на объекты, консультируем, помогаем собрать правильно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
              Наш подход
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Shield size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Честность</h3>
                <p className="text-gray-600">Говорим честно: что нужно, что подойдёт, а что не стоит брать</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Award size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Объяснения</h3>
                <p className="text-gray-600">Не уговариваем — объясняем. Без перегруза терминами — только суть</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Ruler size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Точность</h3>
                <p className="text-gray-600">Опираемся на точность, долговечность, совместимость</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Heart size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Поддержка</h3>
                <p className="text-gray-600">Мы рядом на каждом этапе — от идеи до готового дома</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
              Дома и конструкции под ключ
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Мы строим дома по двум технологиям. Обе технологии адаптированы под климат Канар. 
              Вы выбираете ту, что ближе вам по стилю, бюджету и ощущению.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-6 mx-auto w-fit">
                  <Hammer size={40} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-wood-darkest">Каркасные дома</h3>
                <p className="text-gray-600 mb-4">(entramado ligero)</p>
                <p className="text-gray-600">Лёгкие, гибкие, энергоэффективные. Современная технология с отличными теплоизоляционными свойствами.</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-6 mx-auto w-fit">
                  <Trees size={40} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-wood-darkest">Дома из клеёного бруса</h3>
                <p className="text-gray-600 mb-4">Натуральная древесина</p>
                <p className="text-gray-600">Прочные, монолитные, с естественной текстурой дерева. Стены — конструкция и интерьер в одном.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
              Мы рядом на каждом этапе
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Мы не ограничиваемся продажей. Если вы сомневаетесь в выборе — подскажем, рассчитаем, объясним. 
              Расскажем, как работает утепление, защита от влаги, пароизоляция. 
              Мы не продаём "товар" — мы предлагаем систему, которая работает для вас.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
              Доставка по всем островам
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Наши склады и логистика позволяют быстро доставлять материалы по всему архипелагу. 
              Мы выезжаем на объекты, консультируем, поддерживаем на каждом этапе — от идеи до сборки.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Factory size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Склады и логистика</h3>
                <p className="text-gray-600">Быстрая доставка материалов по всему архипелагу</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <Truck size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Выезд на объекты</h3>
                <p className="text-gray-600">Консультации и контроль качества работ</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-nature-light/20 p-4 rounded-full mb-4 mx-auto w-fit">
                  <MapPin size={32} className="text-nature-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-wood-darkest">Все острова</h3>
                <p className="text-gray-600">Тенерифе, Ла-Пальма, Гран-Канария, Лансароте, Эль-Йерро</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
