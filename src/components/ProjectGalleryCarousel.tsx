
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png",
  "/lovable-uploads/5ae30882-9c91-4365-b5ba-c711c94235d3.png",
  "/lovable-uploads/2b12f2ef-202f-41f7-860e-f90fa03c15d7.png",
  "/lovable-uploads/b1de1130-1bc6-43ca-bdc5-31d236f8d8e9.png"
];

const ProjectGalleryCarousel = () => {
  return (
    <section className="py-16 bg-wood-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-10">Наши работы</h2>
        <div className="relative mx-auto max-w-5xl">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg aspect-[4/3]">
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
              onClick={() => document.querySelector('[data-carousel-button-prev]')?.click()}
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={() => document.querySelector('[data-carousel-button-next]')?.click()}
            >
              <ArrowRight size={20} />
            </button>
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
