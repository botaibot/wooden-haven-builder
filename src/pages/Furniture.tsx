
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Sofa, Table, Bed, Lamp, Cabinet } from "lucide-react";
import { Button } from "@/components/ui/button";
import MaterialCardCarousel from "@/components/MaterialCardCarousel";

interface FurnitureItem {
  id: string;
  title: string;
  description: string;
  price: number;
  priceWithAddons?: number;
  priceAddonDescription?: string;
  images: string[];
  icon: React.ElementType;
}

const FurnitureCard = ({ item }: { item: FurnitureItem }) => {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <MaterialCardCarousel images={item.images} alt={item.title} />
      
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <item.icon className="text-wood-dark" size={24} />
          <h3 className="text-xl font-semibold text-wood-darkest">{item.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-bold text-nature-dark">
              от €{item.price}
            </span>
            {item.priceWithAddons && (
              <span className="text-sm text-gray-600">
                {item.priceAddonDescription}: €{item.priceWithAddons}
              </span>
            )}
          </div>
          <a 
            href="/contact"
            className="flex items-center gap-1 py-2 px-4 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
          >
            <ShoppingCart size={16} />
            <span>Заказать</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const Furniture = () => {
  const furnitureItems: FurnitureItem[] = [
    {
      id: "cabinet",
      title: "Тумба из натуральной ольхи в стиле рустик",
      description: "Добавьте в интерьер тепло и характер с нашей авторской тумбой ручной работы. Изготовленная из отборной ольхи на собственном производстве, эта модель сочетает в себе естественную красоту древесины и неповторимый стиль рустик. Каждая тумба — это уникальное изделие, в котором видны натуральные текстуры, сучки и живая структура дерева.",
      price: 300,
      priceWithAddons: 500,
      priceAddonDescription: "с раковиной и краном",
      images: [
        "/lovable-uploads/4f0c9eee-e1c5-4e86-a958-5bb2693498d6.png",
        "/lovable-uploads/2daf04c1-edd2-4ac4-9062-092369a0ad24.png"
      ],
      icon: Cabinet
    },
    {
      id: "tables",
      title: "Столы из массива дерева",
      description: "Прочные и элегантные столы различных размеров из натурального дерева. Изготавливаются по индивидуальным заказам с учетом ваших пожеланий.",
      price: 350,
      images: [
        "/lovable-uploads/4b830e79-1c28-47d9-b24e-0ad3f853a6ab.png",
        "/lovable-uploads/a8ce0721-491d-4a0c-9ccf-0fa41a802fe4.png",
        "/lovable-uploads/f1f164ee-e2e8-442d-80d6-d4fe903eb1d0.png"
      ],
      icon: Table
    },
    {
      id: "chairs",
      title: "Стулья и кресла",
      description: "Комфортные стулья и кресла, идеально дополняющие интерьер деревянного дома. Каждое изделие имеет эргономичную форму и прочную конструкцию.",
      price: 150,
      images: [
        "/lovable-uploads/85042101-ffb6-40dc-b3be-85bc519188fd.png",
        "/lovable-uploads/4502481e-10c5-4b4d-b49a-100502ad1986.png", 
        "/lovable-uploads/853a0e4d-0c9a-4047-a26e-b360ebeb321d.png"
      ],
      icon: Sofa
    },
    {
      id: "beds",
      title: "Кровати и тумбы",
      description: "Спальная мебель из экологически чистых материалов. Удобные кровати и практичные тумбы для спальни, создающие атмосферу уюта и комфорта.",
      price: 450,
      images: [
        "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png",
        "/lovable-uploads/2eb5015a-dfa4-4a3f-92a7-1502051b75bf.png",
        "/lovable-uploads/b3f065d5-9ac1-4193-906e-16267d849a4b.png"
      ],
      icon: Bed
    },
    {
      id: "benches",
      title: "Лавки и скамьи",
      description: "Функциональные и стильные лавки для сада и дома. Отлично подходят как для интерьера, так и для экстерьера благодаря специальной обработке древесины.",
      price: 220,
      images: [
        "/lovable-uploads/1fcff38f-77ef-4172-a6d4-8695e335866d.png",
        "/lovable-uploads/9c7608b9-d224-491a-8cf9-e6c5f3783bed.png",
        "/lovable-uploads/f79d17e0-4d4c-4c28-b9e9-e29fa9dcca20.png"
      ],
      icon: Lamp
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-12 md:py-16 bg-nature-light/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Мебель из натурального дерева
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Мы производим качественную мебель из массива дерева, которая прекрасно дополнит интерьер вашего дома. 
              Каждое изделие создано вручную нашими мастерами с вниманием к деталям и качеству.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {furnitureItems.map((item, index) => (
              <FurnitureCard key={index} item={item} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-gray-700 mb-6">
              Вся наша мебель изготавливается по индивидуальным заказам с учетом ваших пожеланий и требований
            </p>
            <div className="bg-wood p-6 rounded-lg inline-block">
              <p className="text-white">
                Для заказа мебели или получения дополнительной информации<br />
                свяжитесь с нами по телефону: <strong>+34 123 456 789</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Furniture;
