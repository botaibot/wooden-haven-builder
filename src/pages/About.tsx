
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
        description="Команда, которая уже более 6 лет помогает воплощать проекты из дерева на Канарских островах"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">О компании Bosque Nórdico</h2>
              <p className="text-gray-700 mb-6">
                Bosque Nórdico — это команда, которая уже более 6 лет помогает воплощать проекты 
                из дерева на Канарских островах. Мы не просто продаём материалы — мы предлагаем решения. 
                От выбора доски до строительства дома — вы получаете поддержку, основанную на практике, 
                опыте и любви к качеству.
              </p>
              <p className="text-gray-700 mb-6">
                Мы предлагаем не просто товар, а систему. И делаем всё, чтобы она работала для вас. 
                Наши склады и логистика позволяют быстро доставлять материалы по всему архипелагу.
              </p>
              <p className="text-gray-700">
                Мы работаем не только на Тенерифе, но и на других островах: Ла-Пальма, Гран-Канария, 
                Лансароте, Эль-Йерро и др. Также мы сопровождаем строительство, выезжаем на объекты 
                и поддерживаем клиентов на всех этапах проекта.
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
            Мы поставляем дерево напрямую из Австрии, Германии и Бельгии — доска, брус, фанера и многое другое. 
            Это качественные и проверенные материалы, которые подходят для климата Канарских островов, 
            от прибрежных районов до горных зон. Мы знаем, какие материалы «работают» в реальных условиях, 
            и поможем выбрать то, что прослужит долго.
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
                <p className="text-gray-600">Прямые поставки из Австрии, Германии и Бельгии высшего качества.</p>
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
                <p className="text-gray-600">Материалы, проверенные в условиях Канарских островов от побережья до гор.</p>
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
                <p className="text-gray-600">Каждая партия материалов проходит тщательную проверку качества.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Дома и конструкции под ключ</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Мы проектируем и строим дома по двум технологиям. Обе технологии адаптированы под местный климат. 
            Вы можете выбрать ту, что ближе вам — по стилю, бюджету и ощущениям.
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
                  Лёгкие, гибкие в планировке, энергоэффективные. Современная технология строительства 
                  с отличными теплоизоляционными свойствами.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Быстрое строительство</li>
                  <li>• Гибкость планировки</li>
                  <li>• Энергоэффективность</li>
                </ul>
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
                  Прочные, монолитные, с естественной красотой дерева. Традиционная технология 
                  с современными улучшениями.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Прочность и долговечность</li>
                  <li>• Естественная красота</li>
                  <li>• Экологичность</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wood-light/20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Мы рядом на каждом этапе</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Мы не ограничиваемся продажей. Если вы не уверены в выборе — поможем подобрать оптимальное решение. 
            Объясним, как работает утепление, как защитить конструкцию от влаги, и что стоит за словами «качественный дом».
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Shield size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Консультации</h3>
              <p className="text-gray-600">
                Помогаем выбрать оптимальные материалы и решения для вашего проекта.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Award size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Качество</h3>
              <p className="text-gray-600">
                Объясняем, что стоит за словами «качественный дом» и как его достичь.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Hammer size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Сопровождение</h3>
              <p className="text-gray-600">
                Сопровождаем строительство, выезжаем на объекты на всех этапах проекта.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-nature-light/20 p-4 rounded-full mb-4">
                <Users size={32} className="text-nature-dark" />
              </div>
              <h3 className="text-xl font-semibold text-wood-darkest mb-3">Поддержка</h3>
              <p className="text-gray-600">
                Поддерживаем клиентов на всех этапах — от идеи до готового дома.
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
                <h3 className="text-xl font-semibold text-wood-darkest">Прямые поставки</h3>
              </div>
              <p className="text-gray-600">
                Материалы напрямую из Европы без посредников, что гарантирует качество и цену.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <Truck size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Быстрая логистика</h3>
              </div>
              <p className="text-gray-600">
                Наши склады и логистика позволяют быстро доставлять материалы по всему архипелагу.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-wood-light/30">
              <div className="flex items-center mb-4">
                <div className="bg-nature-light/20 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-nature-dark" />
                </div>
                <h3 className="text-xl font-semibold text-wood-darkest">Весь архипелаг</h3>
              </div>
              <p className="text-gray-600">
                Работаем на всех островах: Тенерифе, Ла-Пальма, Гран-Канария, Лансароте, Эль-Йерро и др.
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
