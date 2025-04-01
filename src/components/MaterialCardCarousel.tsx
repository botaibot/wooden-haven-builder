
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      <div className="overflow-hidden">
        <AspectRatio ratio={4/3}>
          <img 
            src={images[0]} 
            alt={alt} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </AspectRatio>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={4/3}>
                <img 
                  src={image} 
                  alt={`${alt} - ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </AspectRatio>
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
