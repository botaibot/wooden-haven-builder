
import React from "react";
import { HouseData } from "@/data/housesData";
import { Card, CardContent } from "@/components/ui/card";
import MaterialCardCarousel from "@/components/MaterialCardCarousel";

interface GallerySectionProps {
  house: HouseData;
}

const GallerySection = ({ house }: GallerySectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <h3 className="text-xl font-semibold p-6 border-b border-gray-200">Галерея проекта</h3>
      <div className="p-4">
        <MaterialCardCarousel 
          images={[house.images[0]]} 
          alt={`${house.title} - изображение`} 
        />
      </div>
    </div>
  );
};

export default GallerySection;
