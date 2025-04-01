
import React from "react";
import { HouseData } from "@/data/housesData";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GallerySectionProps {
  house: HouseData;
}

const GallerySection = ({ house }: GallerySectionProps) => {
  // Get only the first (main) image
  const mainImage = house.images[0];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <h3 className="text-xl font-semibold p-6 border-b border-gray-200">Галерея проекта</h3>
      <div className="p-4">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
          <img 
            src={mainImage} 
            alt={`${house.title} - главное изображение`} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default GallerySection;
