
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
// 4. Материалы и логистика
const images = [
  // Готовые конструкции и общие виды
  "/lovable-uploads/dab85b12-7deb-4a1a-8368-7094f85c69ca.png",
  "/lovable-uploads/fc859afe-e49f-4783-ad9c-30acc39a2233.png",
  "/lovable-uploads/fc859307-802f-4db4-8f30-54aee918bf8a.png",
  "/lovable-uploads/6ce96eb0-f617-42ab-9b16-46c0c4f92eef.png",
  
  // Процесс строительства
  "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png",
  "/lovable-uploads/dea3ce08-ef42-4a0e-8139-e7a6064a2ea1.png",
  "/lovable-uploads/3a74622e-68cc-4b48-8350-af1029dc3708.png",
  "/lovable-uploads/13ee9daf-b4f5-4a79-8a3d-eddd42b91dd1.png",
  "/lovable-uploads/e4aade66-f345-47ad-99e4-df3bdd828a4d.png",
  "/lovable-uploads/cd50dce6-b79a-4ef1-a511-db6164273120.png",
  
  // Детали и соединения
  "/lovable-uploads/9e0b6fcd-bd9a-4149-a72b-14151871ab5b.png",
  "/lovable-uploads/c7e465c6-1958-47d5-8a12-8a165ea79277.png",
  "/lovable-uploads/7395f239-f442-4b96-a7de-aba63a604ea0.png",
  "/lovable-uploads/af7ea266-bb00-467d-99d4-aa1b0e1971c4.png",
  "/lovable-uploads/a662b2d4-ca9d-4090-9829-1b1899de891e.png",
  "/lovable-uploads/0ba5df66-280b-4d2f-8788-d6846a81f794.png",
  
  // Материалы, утепление, кровля
  "/lovable-uploads/2eb5015a-dfa4-4a3f-92a7-1502051b75bf.png",
  "/lovable-uploads/04c6a15b-be68-4768-ba87-5176309f85c3.png",
  "/lovable-uploads/cdbfc857-a3af-46d9-8311-921a28f35340.png",
  "/lovable-uploads/e4898af6-2f45-4c0b-a4ab-acb2db392aaa.png"
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
        <h2 className="section-title text-center mx-auto mb-10">Наши работы</h2>
        <div className="relative mx-auto max-w-5xl">
          <Carousel 
            opts={{ loop: true }} 
            className="w-full"
            setApi={(api) => {
              setEmblaRef(api);
              if (api) {
                api.on('select', () => onSelect(api));
                // Initialize the active index
                setActiveIndex(api.selectedScrollSnap());
              }
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg aspect-video bg-gray-100 relative">
                      {loading && (
                        <Skeleton className="w-full h-full absolute inset-0" />
                      )}
                      <img 
                        src={image} 
                        alt={`Проект ${index + 1}`}
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
            />
            <CarouselNext 
              data-carousel-button-next
              className="hidden md:flex md:-right-6 lg:-right-10 bg-white/90 border-none hover:bg-white shadow-md"
            />
          </Carousel>
          
          <div className="flex justify-center mt-6 md:hidden gap-4">
            <button 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handlePrevClick}
              aria-label="Предыдущий слайд"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handleNextClick}
              aria-label="Следующий слайд"
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
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            Фотографии наших реальных проектов в разных стадиях строительства.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectGalleryCarousel;
