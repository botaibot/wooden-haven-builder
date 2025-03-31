
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HouseData {
  id: number;
  title: string;
  area: string;
  dimensions: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  terrace: boolean;
  balcony: boolean;
  porch: boolean;
  frameCost: string;
  warmContourCost: string;
  turnkeyCost: string;
  images: string[];
  floorPlanImage: string;
}

const houses: HouseData[] = [
  {
    id: 1,
    title: "Ecopino 60",
    area: "60 м²",
    dimensions: "9.75 x 6.69 м",
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 596 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 3 576 000 ₽",
    images: [
      "/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png",
      "/lovable-uploads/9c7608b9-d224-491a-8cf9-e6c5f3783bed.png",
      "/lovable-uploads/876a7692-1ae2-4ec0-861f-762eaf151e79.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 2,
    title: "Ecopino 50",
    area: "50 м²",
    dimensions: "8.5 x 6.2 м",
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 550 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 3 100 000 ₽",
    images: [
      "/lovable-uploads/5ae30882-9c91-4365-b5ba-c711c94235d3.png",
      "/lovable-uploads/4b830e79-1c28-47d9-b24e-0ad3f853a6ab.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 3,
    title: "Ecopino 25",
    area: "25 м²",
    dimensions: "5.1 x 5.1 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 350 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 1 900 000 ₽",
    images: [
      "/lovable-uploads/1b2e05da-436d-494f-a509-a3dcfeaea52e.png",
      "/lovable-uploads/6ce96eb0-f617-42ab-9b16-46c0c4f92eef.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 4,
    title: "Ecopino 25",
    area: "25 м²",
    dimensions: "5.1 x 5.1 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: false,
    balcony: false,
    porch: true,
    frameCost: "от 350 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 1 900 000 ₽",
    images: [
      "/lovable-uploads/85042101-ffb6-40dc-b3be-85bc519188fd.png",
      "/lovable-uploads/7395f239-f442-4b96-a7de-aba63a604ea0.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 5,
    title: "Ecopino 25",
    area: "25 м²",
    dimensions: "5.1 x 5.1 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 350 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 1 900 000 ₽",
    images: [
      "/lovable-uploads/44faeda4-fa57-438b-a071-25b592003a2e.png",
      "/lovable-uploads/0c336174-8a70-4ee8-bbab-5df7497ef968.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 6,
    title: "Ecopino 42",
    area: "42 м²",
    dimensions: "7.1 x 6.0 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 460 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 2 750 000 ₽",
    images: [
      "/lovable-uploads/6f2fd81a-e154-42e4-aa78-5a772a37edeb.png",
      "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png",
      "/lovable-uploads/4d449e75-0e99-4477-9ca9-60de754701c3.png"
    ],
    floorPlanImage: "/lovable-uploads/4d449e75-0e99-4477-9ca9-60de754701c3.png"
  }
];

const HouseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const houseId = parseInt(id || "1");
  const house = houses.find((h) => h.id === houseId) || houses[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Image Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src={house.images[0]} 
            alt={house.title} 
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{house.title}</h1>
              <p className="text-2xl text-white/90">{house.area}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Floor Plan */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6 md:p-8">
                  <h2 className="text-3xl font-bold text-wood-darkest mb-8">ПЛАН БУДУЩЕГО ДОМА</h2>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold text-nature-dark">{house.area}</p>
                      <p className="text-gray-600">общая площадь</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-nature-dark">{house.dimensions}</p>
                      <p className="text-gray-600">линейные размеры</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-nature-dark">{house.floors}</p>
                      <p className="text-gray-600">этажа</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span>Спальни</span>
                      <span className="font-medium">{house.bedrooms}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span>Санузлы</span>
                      <span className="font-medium">{house.bathrooms}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span>Балкон</span>
                      <span className="font-medium">{house.balcony ? 'Есть' : 'Нет'}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span>Терраса</span>
                      <span className="font-medium">{house.terrace ? 'Есть' : 'Нет'}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span>Крыльцо</span>
                      <span className="font-medium">{house.porch ? 'Есть' : 'Нет'}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center">
                      <Button 
                        className="bg-wood-dark text-white rounded-full px-6 py-2 hover:bg-wood-darkest transition-colors"
                      >
                        1 этаж
                      </Button>
                    </div>
                  </div>
                </div>

                <img 
                  src={house.floorPlanImage} 
                  alt="План этажа" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Gallery & Price Options */}
            <div>
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

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <h3 className="text-xl font-semibold p-6 border-b border-gray-200">Стоимость строительства</h3>
                <div className="p-6 space-y-6">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">Силовой каркас</h4>
                    <p className="text-xl text-wood-dark font-bold">{house.frameCost}</p>
                    <p className="text-sm text-gray-600 mt-1">Базовая комплектация, без отделки</p>
                  </div>
                  
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">Тёплый контур</h4>
                    <p className="text-xl text-wood-dark font-bold">{house.warmContourCost}</p>
                    <p className="text-sm text-gray-600 mt-1">С утеплением и базовыми коммуникациями</p>
                  </div>
                  
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">Под ключ</h4>
                    <p className="text-xl text-wood-dark font-bold">{house.turnkeyCost}</p>
                    <p className="text-sm text-gray-600 mt-1">Полностью готовый дом с отделкой</p>
                  </div>
                  
                  <Button asChild className="w-full bg-nature-dark hover:bg-nature-dark/90">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Оставить заявку
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Options Banner */}
        <div className="relative mt-12">
          <img 
            src={house.images[0]} 
            alt={house.title}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
                  <div className="flex flex-col items-center">
                    <span className="font-bold">СИЛОВОЙ КАРКАС</span>
                    <span>{house.frameCost}</span>
                  </div>
                </Button>
                
                <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
                  <div className="flex flex-col items-center">
                    <span className="font-bold">ТЁПЛЫЙ КОНТУР</span>
                    <span>{house.warmContourCost}</span>
                  </div>
                </Button>
                
                <Button className="bg-gray-700/80 hover:bg-gray-600/80 text-white text-lg rounded-full px-8 py-6">
                  <div className="flex flex-col items-center">
                    <span className="font-bold">ПОД КЛЮЧ</span>
                    <span>{house.turnkeyCost}</span>
                  </div>
                </Button>
                
                <Button asChild className="bg-nature-dark hover:bg-nature-dark/90 text-white text-lg rounded-full px-8 py-6">
                  <Link to="/contact" className="flex flex-col items-center">
                    <span className="font-bold">ОСТАВИТЬ ЗАЯВКУ</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Contact Button */}
        <a href="tel:+78001234567" className="fixed bottom-6 right-6 bg-wood-dark text-white p-4 rounded-full shadow-lg hover:bg-wood-darkest transition-colors z-50">
          <Phone size={24} />
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default HouseDetail;
