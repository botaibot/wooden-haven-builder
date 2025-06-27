
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BosquePlatform = () => {
  const architecturalLines = [
    {
      name: "Mono Roof",
      description: "Минимализм, чёткая геометрия, односкатная крыша.",
      sizes: "от 27 до 80 м²",
      quote: "Минимализм, который можно масштабировать.",
      image: "/lovable-uploads/c7cf1c75-9aef-457e-8c6f-15f8307ec9aa.png"
    },
    {
      name: "Flying Roof", 
      description: "Асимметрия, вынос, архитектурный акцент.",
      sizes: "29, 40, 60, 80 м²",
      quote: "Стиль, который бросается в глаза.",
      image: "/lovable-uploads/419a3b14-ca56-44b1-ae12-02ff5dbe7e26.png"
    },
    {
      name: "Modern Flat",
      description: "Плоская кровля, строгие формы, премиальность.",
      sizes: "от 40 до 90 м²", 
      quote: "Модуль для города с премиум-отделкой.",
      image: "/lovable-uploads/425c4b1d-fd99-4318-93bd-869c954c4949.png"
    },
    {
      name: "Barndominium",
      description: "Высокие двускатные крыши, простор, эмоция.",
      sizes: "от 36 до 90+ м²",
      quote: "Пространство как стиль жизни.",
      image: "/lovable-uploads/e96b8710-ace9-4bc5-914b-e7384c73ee98.png"
    },
    {
      name: "Bosque Básico",
      description: "Бюджетная база. Всё необходимое внутри.",
      sizes: "18–36 м²",
      quote: "Básico — всё необходимое. Остальное — вы решаете.",
      image: "/lovable-uploads/82b79dc0-81d2-4116-8216-bddd3d2a43dd.png"
    }
  ];

  const handleConsultationClick = () => {
    // Отправляем сообщение помощнику с выбором консультации
    window.postMessage({
      type: 'OPEN_CONSULTATION_CHAT',
      message: 'Хочу получить консультацию по системе BOSQUE PLATFORM. Выберите удобный способ связи:'
    }, '*');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="BOSQUE PLATFORM" 
        description="Архитектурные линейки на одной инженерной базе"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />
      
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-wood-dark">
                Архитектура по системе.<br />
                Выберите форму, которая близка вам.
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
                Архитектура BOSQUE PLATFORM — это разные формы на одной инженерной базе.
                <br className="hidden md:block" />
                Мы используем одну конструктивную систему: шаг 600 мм, проверенные узлы, комплектация BASE или STRUCTURA.
                <br className="hidden md:block" />
                От Mono до Barndominium — всё работает по одной логике: адаптировано к климату Канарских островов, рассчитано под сборку.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              {/* First 3 cards */}
              {architecturalLines.slice(0, 3).map((line, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow h-full flex flex-col">
                  <CardHeader className="pb-4 text-center">
                    <div className="text-wood-dark mb-2">
                      <img 
                        src={line.image} 
                        alt={line.name}
                        className="w-20 h-20 mx-auto mb-4 object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-wood-dark">
                      {line.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col px-4 md:px-6">
                    <p className="text-sm md:text-base text-gray-700 mb-3 text-center">
                      {line.description}
                    </p>
                    <p className="text-sm font-semibold text-wood-dark mb-3 text-center">
                      Размеры: {line.sizes}
                    </p>
                    <div className="bg-nature-light/20 p-3 rounded-lg mb-4 flex-1">
                      <p className="text-sm text-gray-600 italic flex items-start gap-2">
                        <span>💬</span>
                        {line.quote}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-wood text-wood hover:bg-wood hover:text-white text-sm md:text-base"
                    >
                      📎 Смотреть модели
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Last 2 cards centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
              {architecturalLines.slice(3).map((line, index) => (
                <Card key={index + 3} className="hover:shadow-xl transition-shadow h-full flex flex-col">
                  <CardHeader className="pb-4 text-center">
                    <div className="text-wood-dark mb-2">
                      <img 
                        src={line.image} 
                        alt={line.name}
                        className="w-20 h-20 mx-auto mb-4 object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-wood-dark">
                      {line.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col px-4 md:px-6">
                    <p className="text-sm md:text-base text-gray-700 mb-3 text-center">
                      {line.description}
                    </p>
                    <p className="text-sm font-semibold text-wood-dark mb-3 text-center">
                      Размеры: {line.sizes}
                    </p>
                    <div className="bg-nature-light/20 p-3 rounded-lg mb-4 flex-1">
                      <p className="text-sm text-gray-600 italic flex items-start gap-2">
                        <span>💬</span>
                        {line.quote}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-wood text-wood hover:bg-wood hover:text-white text-sm md:text-base"
                    >
                      📎 Смотреть модели
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleConsultationClick}
                className="bg-wood hover:bg-wood-dark text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
              >
                Получить консультацию по системе
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BosquePlatform;
