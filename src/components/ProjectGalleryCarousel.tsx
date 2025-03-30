
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Новый массив изображений, организованный по логическим группам:
// 1. Готовые конструкции
// 2. Процесс строительства
// 3. Детали и соединения
// 4. Материалы и логистика
const images = [
  // Готовые конструкции и общие виды
  "/lovable-uploads/dab85b12-7deb-4a1a-8368-7094f85c69ca.png",
  "/lovable-uploads/fc859afe-e49f-4783-ad9c-30acc39a2233.png",
  
  // Процесс строительства 
  "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png",
  "/lovable-uploads/dea3ce08-ef42-4a0e-8139-e7a6064a2ea1.png",
  "/lovable-uploads/3a74622e-68cc-4b48-8350-af1029dc3708.png",
  
  // Детали и соединения
  "/lovable-uploads/9e0b6fcd-bd9a-4149-a72b-14151871ab5b.png",
  "/lovable-uploads/c7e465c6-1958-47d5-8a12-8a165ea79277.png",
  "/lovable-uploads/7395f239-f442-4b96-a7de-aba63a604ea0.png",
  
  // Материалы и логистика
  "/lovable-uploads/2eb5015a-dfa4-4a3f-92a7-1502051b75bf.png",
  "/lovable-uploads/04c6a15b-be68-4768-ba87-5176309f85c3.png"
];

const ProjectGalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrevClick = () => {
    const prevButton = document.querySelector('[data-carousel-button-prev]');
    if (prevButton instanceof HTMLElement) {
      prevButton.click();
    }
  };

  const handleNextClick = () => {
    const nextButton = document.querySelector('[data-carousel-button-next]');
    if (nextButton instanceof HTMLElement) {
      nextButton.click();
    }
  };

  return (
    <section className="py-16 bg-wood-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-10">Наши работы</h2>
        <div className="relative mx-auto max-w-5xl">
          <Carousel 
            opts={{ loop: true }} 
            className="w-full"
            onSelect={(api) => {
              if (api) {
                setActiveIndex(api.selectedScrollSnap());
              }
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg aspect-video">
                      <img 
                        src={image} 
                        alt={`Проект ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="hidden md:flex md:-left-6 lg:-left-10 bg-white/90 border-none hover:bg-white shadow-md"
            />
            <CarouselNext 
              className="hidden md:flex md:-right-6 lg:-right-10 bg-white/90 border-none hover:bg-white shadow-md"
            />
          </Carousel>
          
          <div className="flex justify-center mt-6 md:hidden gap-4">
            <button 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handlePrevClick}
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handleNextClick}
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-wood w-4" : "bg-gray-300"
                }`}
                onClick={() => {
                  const api = document.querySelector('[data-embla-api]');
                  if (api) {
                    const emblaApi = (api as any).__emblaApi;
                    if (emblaApi) {
                      emblaApi.scrollTo(index);
                    }
                  }
                }}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            Когда вы будете готовы прислать фотографии своих работ, мы с радостью добавим их в галерею.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectGalleryCarousel;
