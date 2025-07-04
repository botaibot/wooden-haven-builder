import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ImageViewer from "@/components/ImageViewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BosquePlatform = () => {
  const [isModelModalOpen, setIsModelModalOpen] = useState(false);
  const [imageViewer, setImageViewer] = useState({
    isOpen: false,
    images: [] as string[],
    currentIndex: 0,
    alt: ""
  });

  const architecturalLines = [
    {
      name: "Mono Roof",
      description: "Минимализм, чёткая геометрия, односкатная крыша.",
      sizes: "от 27 до 80 м²",
      quote: "Минимализм, который можно масштабировать.",
      image: "/lovable-uploads/35499c13-25ef-4b1d-90dc-9f754301fe36.png",
      models: [
        {
          size: "27 м²",
          image: "/lovable-uploads/35499c13-25ef-4b1d-90dc-9f754301fe36.png"
        },
        {
          size: "29 м²",
          images: [
            "/lovable-uploads/58d93ef7-c4b1-4962-93ea-beb999296e61.png",
            "/lovable-uploads/d5b7a3e7-b058-4ef1-b267-99bb4158c40e.png"
          ],
          description: `🏠 Techo Simple 29 m² – Modelo MonoRoof
💶 Precio cerrado:
🔧 BÁSICO: 760 €/m² → 22.050 €
🏗 STRUCTURA: 850 €/m² → 24.569 €

🌿 Compacta, luminosa, sin excesos
Este modelo de 29 m² es perfecto para empezar. Una casa pequeña, pero con lo esencial: espacio para vivir, para descansar, para respirar. La cubierta a un agua y la fachada en machihembrado vertical le dan una estética limpia, sobria y natural.
Todo está donde debe estar — sin complicaciones, sin adornos.

🏡 Distribución abierta, interior flexible
El corazón del proyecto es un espacio abierto con cocina, comedor y sala integrados. La habitación está separada visualmente, pero sin puerta: la privacidad se sugiere, no se impone. El baño es completo, con ventana y luz natural.
📐 Ideal para vivir simple, sin renunciar al confort.

📦 Versiones disponibles
🔧 BÁSICO Estructura BOSQUE PLATFORM con cerramiento OSB 9 mm exterior e interior, aislamiento completo, suelo técnico OSB 22 mm, fachada en machihembrado 19 mm, y preinstalación de tubos eléctricos y de fontanería en pared. 🛠 Para autoconstrucción o acabados posteriores personalizados.
🏗 STRUCTURA Incluye todo lo anterior, más: ✔️ instalación de carpinterías exteriores (puertas y ventanas) suministradas por el cliente, con sellado y junta de expansión incluidos ✔️ tabiquería interior con yeso y pintura blanca final ✔️ fachada exterior en machihembrado vertical 19 mm ✔️ instalaciones preinstaladas (sin conexión)
📌 Otros acabados bajo pedido (revoco, frisos, madera interior, etc.).

⚠️ Notas:
Las puertas y ventanas no están incluidas en el precio, pero se instalan si son suministradas por el cliente.
La cimentación se cotiza por separado según terreno.
La conexión final de luz y agua debe realizarse por técnicos autorizados. Nosotros dejamos las preinstalaciones listas.

✅ Ideal para:
vivienda de inicio o retiro
escapadas rurales o turismo slow
vivir con lo justo, pero bien hecho
🧭 Una casa pequeña, honesta y clara. Empieza mucho con muy poco.`
        },
        {
          size: "80 м²", 
          image: "/lovable-uploads/bea65b98-6f70-401c-8ffe-79fe3322528e.png"
        }
      ]
    },
    {
      name: "Flying Roof", 
      description: "Асимметрия, вынос, архитектурный акцент.",
      sizes: "29, 40, 60, 80 м²",
      quote: "Стиль, который бросается в глаза.",
      image: "/lovable-uploads/457a07f4-54a5-40fb-bcfe-b0ad56bd6578.png"
    },
    {
      name: "Modern Flat",
      description: "Плоская кровля, строгие формы, премиальность.",
      sizes: "от 40 до 90 м²", 
      quote: "Модуль для города с премиум-отделкой.",
      image: "/lovable-uploads/04e241c4-f827-4fc2-b77f-4ea27ce7093d.png"
    },
    {
      name: "Barndominium",
      description: "Высокие двускатные крыши, простор, эмоция.",
      sizes: "от 36 до 90+ м²",
      quote: "Пространство как стиль жизни.",
      image: "/lovable-uploads/e216aff7-3ceb-4cb2-8806-e4b7de5053bf.png"
    },
    {
      name: "Bosque Básico",
      description: "Бюджетная база. Всё необходимое внутри.",
      sizes: "18–36 м²",
      quote: "Básico — всё необходимое. Остальное — вы решаете.",
      image: "/lovable-uploads/ef6c249e-c0e4-4067-aded-4a577418842c.png"
    }
  ];

  const handleConsultationClick = () => {
    window.postMessage({
      type: 'OPEN_CONSULTATION_CHAT',
      message: 'Хочу получить консультацию по системе BOSQUE PLATFORM. Выберите удобный способ связи:'
    }, '*');
  };

  const openImageViewer = (images: string[], startIndex: number, alt: string) => {
    setImageViewer({
      isOpen: true,
      images,
      currentIndex: startIndex,
      alt
    });
  };

  const closeImageViewer = () => {
    setImageViewer(prev => ({ ...prev, isOpen: false }));
  };

  const handlePreviousImage = () => {
    setImageViewer(prev => ({
      ...prev,
      currentIndex: prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.images.length - 1
    }));
  };

  const handleNextImage = () => {
    setImageViewer(prev => ({
      ...prev,
      currentIndex: prev.currentIndex < prev.images.length - 1 ? prev.currentIndex + 1 : 0
    }));
  };

  const renderModelButton = (line, index) => {
    if (line.name === "Mono Roof") {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full border-wood text-wood hover:bg-wood hover:text-white text-sm md:text-base"
            >
              📎 Смотреть модели
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-wood-dark">
                Модели Mono Roof
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
              {line.models.map((model, modelIndex) => (
                <Card key={modelIndex} className="overflow-hidden">
                  <CardContent className="p-0">
                    {model.images ? (
                      <div>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {model.images.map((image, imageIndex) => (
                              <CarouselItem key={imageIndex}>
                                <div 
                                  className="relative overflow-hidden group cursor-pointer h-48"
                                  onClick={() => openImageViewer(model.images, imageIndex, `Mono Roof ${model.size}`)}
                                >
                                  <img 
                                    src={image} 
                                    alt={`Mono Roof ${model.size} - ${imageIndex === 0 ? 'фасад' : 'планировка'}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 origin-center"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/50 px-3 py-1 rounded">
                                      Нажмите для увеличения
                                    </div>
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-wood-dark mb-4">
                            Mono Roof {model.size}
                          </h3>
                          <div className="text-sm text-gray-600 whitespace-pre-line">
                            {model.description}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div 
                          className="relative overflow-hidden group cursor-pointer h-48"
                          onClick={() => openImageViewer([model.image], 0, `Mono Roof ${model.size}`)}
                        >
                          <img 
                            src={model.image} 
                            alt={`Mono Roof ${model.size}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 origin-center"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/50 px-3 py-1 rounded">
                              Нажмите для увеличения
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-wood-dark mb-2">
                            Mono Roof {model.size}
                          </h3>
                          <p className="text-gray-600">
                            Минимализм и функциональность в компактном формате
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      );
    } else {
      return (
        <Button 
          variant="outline" 
          className="w-full border-wood text-wood hover:bg-wood hover:text-white text-sm md:text-base"
        >
          📎 Смотреть модели
        </Button>
      );
    }
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
                    {renderModelButton(line, index)}
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
                    {renderModelButton(line, index + 3)}
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

      <ImageViewer
        isOpen={imageViewer.isOpen}
        onClose={closeImageViewer}
        images={imageViewer.images}
        currentIndex={imageViewer.currentIndex}
        onPrevious={handlePreviousImage}
        onNext={handleNextImage}
        alt={imageViewer.alt}
      />
      
      <Footer />
    </div>
  );
};

export default BosquePlatform;
