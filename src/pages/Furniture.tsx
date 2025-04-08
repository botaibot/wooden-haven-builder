
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const furnitureItems = [
  {
    id: 1,
    name: "Обеденный стол из массива дуба",
    description: "Прочный и элегантный стол ручной работы",
    image: "/lovable-uploads/9b5562db-5a65-458e-9333-cffcf41c9335.png",
    category: "Столы",
    eco: true,
  },
  {
    id: 2,
    name: "Шкаф-купе из сосны",
    description: "Вместительный шкаф с раздвижными дверями",
    image: "/lovable-uploads/c2c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Шкафы",
    eco: true,
  },
  {
    id: 3,
    name: "Кровать из массива бука",
    description: "Прочная и экологичная кровать для комфортного сна",
    image: "/lovable-uploads/c3c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Кровати",
    eco: true,
  },
  {
    id: 4,
    name: "Стул из натурального дерева",
    description: "Удобный стул с эргономичной спинкой",
    image: "/lovable-uploads/c4c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Стулья",
    eco: true,
  },
  {
    id: 5,
    name: "Комод из карельской березы",
    description: "Стильный комод с уникальным рисунком древесины",
    image: "/lovable-uploads/c5c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Комоды",
    eco: true,
  },
  {
    id: 6,
    name: "Кухонный гарнитур",
    description: "Модульная кухня из экологичных материалов",
    image: "/lovable-uploads/c6c9a9a9-5a65-458e-9333-cffcf41c9335.png",
    category: "Кухни",
    eco: true,
  },
];

const Furniture = () => {
  // Предзагрузка баннера для более быстрой отрисовки
  React.useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/705016e4-5ccb-4d56-8491-26cbb6ec8d72.png";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative py-16" style={{ backgroundImage: "url('/lovable-uploads/705016e4-5ccb-4d56-8491-26cbb6ec8d72.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Мебель</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Деревянная мебель ручной работы для вашего дома
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-wood-darkest">Наши мебельные коллекции</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {furnitureItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold text-wood-darkest">{item.name}</CardTitle>
                    {item.eco && (
                      <Badge className="bg-nature-dark hover:bg-nature">Эко</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Badge variant="outline" className="mt-4">{item.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/furniture/${item.id}`}
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

export default Furniture;
