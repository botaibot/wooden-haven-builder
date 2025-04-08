import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const materials = [
  {
    id: 1,
    name: "Клееный брус",
    description: "Высококачественный клееный брус для строительства домов",
    image: "/lovable-uploads/c1c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Конструкционные материалы",
    eco: true,
  },
  {
    id: 2,
    name: "Каменная вата",
    description: "Теплоизоляционный материал с высокими показателями огнестойкости",
    image: "/lovable-uploads/c2c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Теплоизоляция",
    eco: true,
  },
  {
    id: 3,
    name: "Пенополистирол",
    description: "Легкий и эффективный теплоизоляционный материал",
    image: "/lovable-uploads/c3c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Теплоизоляция",
    eco: false,
  },
  {
    id: 4,
    name: "Фиброцементный сайдинг",
    description: "Долговечный материал для внешней отделки дома",
    image: "/lovable-uploads/c4c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Отделочные материалы",
    eco: true,
  },
  {
    id: 5,
    name: "Натуральная черепица",
    description: "Классический кровельный материал с отличными эксплуатационными характеристиками",
    image: "/lovable-uploads/c5c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Кровельные материалы",
    eco: true,
  },
  {
    id: 6,
    name: "Металлочерепица",
    description: "Современный и надежный материал для кровли",
    image: "/lovable-uploads/c6c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Кровельные материалы",
    eco: false,
  },
];

const Materials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative py-16" style={{ backgroundImage: "url('/lovable-uploads/705016e4-5ccb-4d56-8491-26cbb6ec8d72.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Материалы</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Экологически чистые материалы для строительства вашего дома
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Высококачественные материалы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {materials.map((material) => (
              <Card key={material.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.name} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold text-wood-darkest">{material.name}</CardTitle>
                    {material.eco && (
                      <Badge className="bg-nature-dark hover:bg-nature">Эко</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{material.description}</p>
                  <Badge variant="outline" className="mt-4">{material.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/materials/${material.id}`}
                    className="text-wood-dark hover:text-wood-darkest transition-colors flex items-center gap-1"
                  >
                    Подробнее <ArrowRight size={16} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Materials;
