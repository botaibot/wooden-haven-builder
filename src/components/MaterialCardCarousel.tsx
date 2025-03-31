
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MaterialCardCarouselProps {
  images: string[];
  alt: string;
}

const MaterialCardCarousel = ({ images, alt }: MaterialCardCarouselProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  // If there's only one image, just display it without carousel controls
  if (images.length === 1) {
    return (
      <div className="aspect-[3/2] overflow-hidden relative">
        <img 
          src={images[0]} 
          alt={alt} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="aspect-[3/2] overflow-hidden relative">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="h-full w-full">
                <img 
                  src={image} 
                  alt={`${alt} - ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default MaterialCardCarousel;
