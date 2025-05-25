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
  // 1. Готовые конструкции и общие виды
  "/lovable-uploads/dab85b12-7deb-4a1a-8368-7094f85c69ca.png",
  "/lovable-uploads/fc859afe-e49f-4783-ad9c-30acc39a2233.png",
  "/lovable-uploads/fc859307-802f-4db4-8f30-54aee918bf8a.png",
  "/lovable-uploads/6ce96eb0-f617-42ab-9b16-46c0c4f92eef.png",
  "/lovable-uploads/08325bc9-f5c2-4e44-a92f-ac24d1fdd2e1.png",
  "/lovable-uploads/1fcff38f-77ef-4172-a6d4-8695e335866d.png", // Дом в горах
  
  // 2. Процесс строительства и укладка стен
  "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png",
  "/lovable-uploads/dea3ce08-ef42-4a0e-8139-e7a6064a2ea1.png",
  "/lovable-uploads/3a74622e-68cc-4b48-8350-af1029dc3708.png",
  "/lovable-uploads/13ee9daf-b4f5-4a79-8a3d-eddd42b91dd1.png",
  "/lovable-uploads/e4aade66-f345-47ad-99e4-df3bdd828a4d.png",
  "/lovable-uploads/cd50dce6-b79a-4ef1-a511-db6164273120.png",
  "/lovable-uploads/b3f065d5-9ac1-4193-906e-16267d849a4b.png",
  "/lovable-uploads/cc4b9d36-d466-477d-965b-74b0d11ba405.png", // Крыша дома
  "/lovable-uploads/d3ecd02b-51fb-4cf0-bf73-0818bc3de3b4.png", // Интерьер с выходом
  "/lovable-uploads/53432e33-734e-4c37-a618-ec4d69f342a5.png", // Интерьер с выходом на террасу
  "/lovable-uploads/f970ba98-1128-4b9a-8186-fd09325c62ad.png", // Комната с деревянными стенами
  
  // Новые изображения процесса строительства
  "/lovable-uploads/d844cf60-cc34-493c-b850-3ee35243c84e.png", // Светлая комната с видом на лес
  "/lovable-uploads/f1f164ee-e2e8-442d-80d6-d4fe903eb1d0.png", // Комната с окном и видом на лес
  "/lovable-uploads/8940b3de-919e-46fa-95ab-9628f5dca170.png", // Светлый интерьер деревянного дома
  
  // 3. Детали, соединения и коммуникации
  "/lovable-uploads/9e0b6fcd-bd9a-4149-a72b-14151871ab5b.png",
  "/lovable-uploads/c7e465c6-1958-47d5-8a12-8a165ea79277.png",
  "/lovable-uploads/7395f239-f442-4b96-a7de-aba63a604ea0.png",
  "/lovable-uploads/af7ea266-bb00-467d-99d4-aa1b0e1971c4.png",
  "/lovable-uploads/a662b2d4-ca9d-4090-9829-1b1899de891e.png",
  "/lovable-uploads/0ba5df66-280b-4d2f-8788-d6846a81f794.png",
  "/lovable-uploads/f774696e-01a1-4689-9978-e647611118a4.png",
  "/lovable-uploads/9c7608b9-d224-491a-8cf9-e6c5f3783bed.png", 
  "/lovable-uploads/bf7ab5e2-5ac4-4b64-8c23-2eb608fb3266.png",
  "/lovable-uploads/0c336174-8a70-4ee8-bbab-5df7497ef968.png",
  "/lovable-uploads/f9a48d53-bc9c-4d4e-a9fc-6b6154054fdb.png", // Деталь кровли
  "/lovable-uploads/6c56f6d2-bc2d-474b-a5f5-2596108b177c.png", // Чёрный радиатор
  
  // 4. Материалы, утепление, кровля, гидроизоляция
  "/lovable-uploads/2eb5015a-dfa4-4a3f-92a7-1502051b75bf.png",
  "/lovable-uploads/04c6a15b-be68-4768-ba87-5176309f85c3.png",
  "/lovable-uploads/cdbfc857-a3af-46d9-8311-921a28f35340.png",
  "/lovable-uploads/e4898af6-2f45-4c0b-a4ab-acb2db392aaa.png",
  "/lovable-uploads/853a0e4d-0c9a-4047-a26e-b360ebeb321d.png",
  "/lovable-uploads/9ccc4b6f-aa86-4287-a1c4-ebd682a85303.png",
  "/lovable-uploads/220a31fc-ad86-4fde-9794-e2a2b8659011.png",
  "/lovable-uploads/2369764e-e4f1-4111-b81d-1338106e01d5.png",
  "/lovable-uploads/4b830e79-1c28-47d9-b24e-0ad3f853a6ab.png", // Кровельный материал
  
  // 5. Интерьер и внешнее окружение
  "/lovable-uploads/f9a48d53-bc9c-4d4e-a9fc-6b6154054fdb.png", // Террасы с креслами ночью
  "/lovable-uploads/8940b3de-919e-46fa-95ab-9628f5dca170.png", // Светлый интерьер
  "/lovable-uploads/f1f164ee-e2e8-442d-80d6-d4fe903eb1d0.png", // Интерьер с окном
  "/lovable-uploads/d844cf60-cc34-493c-b850-3ee35243c84e.png"  // Светлая комната с окном
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg aspect-video bg-gray-100 relative">
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
