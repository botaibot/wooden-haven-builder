
import React from "react";
import { HouseData } from "@/data/housesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GallerySectionProps {
  house: HouseData;
}

const GallerySection = ({ house }: GallerySectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <h3 className="text-xl font-semibold p-6 border-b border-gray-200">Галерея проекта</h3>
      <div className="p-4">
        <Carousel className="w-full">
          <CarouselContent>
            {house.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`${house.title} - изображение ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default GallerySection;
