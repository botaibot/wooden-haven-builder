import React, { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import type { UseEmblaCarouselType } from "embla-carousel-react";

// Организованный массив изображений по категориям:
// 1. Готовые конструкции
// 2. Процесс строительства
// 3. Детали и соединения
// 4. Материалы, кровля и утепление
// 5. Интерьер и окружение
const images = [
  // Первая партия - готовые дома и строительство на участках
  "/lovable-uploads/9e830c13-a417-40a1-adc3-314e44c747aa.png", // Каркасная конструкция в цеху
  "/lovable-uploads/8bc27e5f-2dc8-450e-b039-c72358b72a55.png", // Дом с деревянной и белой отделкой в производстве
  "/lovable-uploads/0e8f8d7f-be6e-486e-902d-59b3f2fd6614.png", // Строительство фундамента на закате
  "/lovable-uploads/d92ca92a-18cc-493d-a1d9-5b965f7bdc9a.png", // Воздушный вид строительства дома
  "/lovable-uploads/4fff0cff-41d6-456f-8838-8a32d6323f92.png", // Модульные элементы дома на стройплощадке
  "/lovable-uploads/130e09df-2a0f-4ea9-a746-7f541420e1f0.png", // Дом в процессе строительства на фоне гор
  "/lovable-uploads/d9ce7565-5ed2-4c73-9612-6d662ae64897.png", // Готовая конструкция дома на холме
  "/lovable-uploads/4422f9c7-32b0-4343-91d9-4151adc3af25.png", // Дом с оранжевой и серой отделкой
  "/lovable-uploads/ef76f748-0b2b-4d54-8db2-46155bfbb608.png", // Современный дом на горном склоне
  "/lovable-uploads/35ffcd40-27ab-4e46-91ef-038a6d629429.png", // Завершенный дом с панорамным видом

  // Вторая партия - производство в цеху, каркасные конструкции
  "/lovable-uploads/5c3167c9-6401-4dc7-82e3-c1ab92ffc450.png", // Деревянная платформа в производственном цеху
  "/lovable-uploads/9b50b5ab-e898-40a6-93ac-a0f77dd09efe.png", // Каркасная конструкция дома в сборке
  "/lovable-uploads/02bd75f7-dbda-4f8f-afef-0c550bc2f319.png", // Каркас дома с рабочими в цеху
  "/lovable-uploads/e707aa30-15ba-4062-ab2a-d661bb5dc2a1.png", // Деревянная конструкция стен с рабочими
  "/lovable-uploads/0d73afa9-3c53-4377-b617-c2185c385fd4.png", // Дом с OSB панелями в производстве
  "/lovable-uploads/feb37c4d-7cdf-465a-9851-3d80817dfe6a.png", // Готовые стены из OSB в цеху
  "/lovable-uploads/0d06d97f-2d47-4720-b9f5-41c2b359a123.png", // Сборка крыши деревянного дома
  "/lovable-uploads/9ef0eff3-4590-4b7b-a5b6-d52be9957c15.png", // Процесс установки крыши с рабочими
  "/lovable-uploads/9d2cd472-8f60-4aaf-a705-ac58f423379a.png", // Готовый дом с террасой в цеху
  "/lovable-uploads/b972a077-da79-4ff7-863e-3b529e4816dc.png"  // Деревянный дом с комбинированной отделкой
];

const ProjectGalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [emblaRef, setEmblaRef] = useState<UseEmblaCarouselType[1] | null>(null);

  const handlePrevClick = () => {
    if (emblaRef) emblaRef.scrollPrev();
  };

  const handleNextClick = () => {
    if (emblaRef) emblaRef.scrollNext();
  };

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = (index: number) => {
    if (emblaRef) emblaRef.scrollTo(index);
  };

  return (
    <section className="py-16 bg-wood-light/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest text-center mb-4">Наши работы - Галерея проектов</h2>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Фотографии наших реальных проектов деревянных домов на Канарских островах в разных стадиях строительства: от фундамента до готового дома.
        </p>
        <div className="relative mx-auto max-w-5xl">
          <Carousel 
            opts={{ loop: true }} 
            className="w-full"
            setApi={(api) => {
              setEmblaRef(api);
              if (api) {
                api.on('select', () => onSelect(api));
                setActiveIndex(api.selectedScrollSnap());
              }
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 relative">
                      {loading && (
                        <Skeleton className="w-full h-full absolute inset-0" />
                      )}
                      <img 
                        src={image} 
                        alt={`Construcción de casa de madera Bosque Nórdico en las Islas Canarias - proyecto ${index + 1}`}
                        title={`Galería de trabajos - etapa de construcción ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onLoad={() => setLoading(false)}
                        onError={() => setLoading(false)}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              data-carousel-button-prev
              className="hidden md:flex md:-left-6 lg:-left-10 bg-white/90 border-none hover:bg-white shadow-md"
              aria-label="Imagen anterior"
            />
            <CarouselNext 
              data-carousel-button-next
              className="hidden md:flex md:-right-6 lg:-right-10 bg-white/90 border-none hover:bg-white shadow-md"
              aria-label="Imagen siguiente"
            />
          </Carousel>
          
          <div className="flex justify-center mt-6 md:hidden gap-4">
            <button 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handlePrevClick}
              aria-label="Imagen anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handleNextClick}
              aria-label="Imagen siguiente"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 gap-1 flex-wrap max-w-full px-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-wood w-4" : "bg-gray-300"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            Fotografías de nuestros proyectos reales en diferentes etapas de construcción: desde la cimentación hasta la casa terminada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectGalleryCarousel;
