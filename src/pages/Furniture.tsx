
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Sofa, Table, Bed, Lamp, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MaterialCardCarousel from "@/components/MaterialCardCarousel";

interface FurnitureItem {
  id: string;
  title: string;
  description: string;
  dimensions?: string;
  customizable?: boolean;
  price: number;
  priceWithAddons?: number;
  priceAddonDescription?: string;
  priceWithMaterial?: number;
  priceWithMaterialDescription?: string;
  images: string[];
  icon: React.ElementType;
}

const FurnitureCard = ({ item }: { item: FurnitureItem }) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm border border-gray-200">
      <MaterialCardCarousel images={item.images} alt={item.title} />
      
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-wood/20 p-2 rounded-full">
            <item.icon className="text-wood-dark" size={22} />
          </div>
          <h3 className="text-xl font-semibold text-wood-darkest">{item.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
        
        {item.dimensions && (
          <p className="text-sm font-medium text-wood-dark mb-2">
            Размеры: {item.dimensions}
          </p>
        )}
        
        {item.customizable && (
          <p className="text-sm text-nature-dark mb-4">
            Возможно изготовление по индивидуальным размерам
          </p>
        )}
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="font-bold text-nature-dark">
              от €{item.price}
            </span>
            {item.priceWithAddons && (
              <span className="text-sm text-gray-600">
                {item.priceAddonDescription}: €{item.priceWithAddons}
              </span>
            )}
            {item.priceWithMaterial && (
              <span className="text-sm text-gray-600">
                {item.priceWithMaterialDescription}: €{item.priceWithMaterial}
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
      description: "Добавьте в интерьер тепло и характер с нашей авторской тумбой ручной работы. Изготовленная из отборной ольхи на собственном производстве, эта модель сочетает в себе естественную красоту древесины и неповторимый стиль рустик.",
      dimensions: "80 см × 50 см × 80 см (длина × глубина × высота)",
      customizable: true,
      price: 300,
      priceWithAddons: 500,
      priceAddonDescription: "с раковиной и краном",
      images: [
        "/lovable-uploads/4f0c9eee-e1c5-4e86-a958-5bb2693498d6.png",
        "/lovable-uploads/2daf04c1-edd2-4ac4-9062-092369a0ad24.png"
      ],
      icon: BookOpen
    },
    {
      id: "benches",
      title: "Лавки и скамейки из ольхи — тепло природы в каждой детали",
      description: "Уют начинается с простых вещей. Наши лавки и скамейки, выполненные из натуральной ольхи, станут не только практичным элементом интерьера, но и настоящим акцентом вашего пространства. Мы производим их на собственной мастерской, вручную отбирая каждую доску. Живые текстуры, массив, тепло древесины и характерная небрежность стиля рустик — всё это делает каждое изделие уникальным.",
      dimensions: "100 см × 45 см × 45 см (длина × ширина × высота)",
      customizable: true,
      price: 250,
      images: [
        "/lovable-uploads/1a1c1bea-9995-4063-9cf1-01d0020e4080.png",
        "/lovable-uploads/8374f16f-8443-481c-9f0a-d6363a8a516b.png"
      ],
      icon: Lamp
    },
    {
      id: "outdoor-chairs",
      title: "Деревянные кресла из ольхи — для тишины, свежего воздуха и комфорта",
      description: "Погрузитесь в атмосферу отдыха с нашими удобными креслами из натуральной ольхи, созданными специально для экстерьера. Это мебель, которая отлично чувствует себя на свежем воздухе — будь то веранда, терраса, сад или зона у костра. Мы тщательно продумали эргономику и посадку: удобная спинка, широкие подлокотники и устойчивая конструкция делают это кресло идеальным для долгих тёплых вечеров на природе.",
      price: 400,
      images: [
        "/lovable-uploads/8f722547-79d9-419c-9a42-dc313ffce0f3.png",
        "/lovable-uploads/4177ab5d-74aa-4366-acb1-3cf7438eee90.png"
      ],
      icon: Sofa
    },
    {
      id: "coffee-table",
      title: "Журнальный стол из соснового бруса 140×140 — массивный акцент в интерьере",
      description: "Брутальность и природная эстетика — в одном предмете. Этот журнальный стол изготовлен из массивного соснового бруса сечением 140×140 мм и станет настоящим центром притяжения в вашей гостиной. Толстые брусья с естественной фактурой, трещинами, сучками и живыми линиями подчеркивают натуральность и характер материала. Устойчивое основание из металла добавляет современности и делает конструкцию надёжной.",
      dimensions: "100 см × 100 см (длина × ширина)",
      customizable: true,
      price: 250,
      images: [
        "/lovable-uploads/209d2102-60c6-4f67-a067-cb9196f00ae6.png"
      ],
      icon: Table
    },
    {
      id: "dining-tables",
      title: "Столы из ольхи и дуба — дерево, которое вдохновляет",
      description: "Создаём столы, которые становятся центром пространства — будь то обеденная зона, кабинет или переговорная. В основе — натуральная ольха и дуб: прочные, тёплые, с ярко выраженной текстурой и характером. Каждое изделие — это результат ручной работы и уважения к материалу. Мы не маскируем дерево — мы подчёркиваем его. Живые края, сучки, текстура и натуральный цвет — всё это делает каждый стол уникальным.",
      dimensions: "160 см × 70 см (длина × ширина)",
      customizable: true,
      price: 400,
      priceWithMaterial: 600,
      priceWithMaterialDescription: "из дуба",
      images: [
        "/lovable-uploads/ba2e57fb-1851-4295-8d27-0a8d2810b79a.png",
        "/lovable-uploads/66c08602-1489-4196-8d1d-7038ddc7c2ed.png"
      ],
      icon: Table
    },
    {
      id: "aspen-oak-furniture",
      title: "Мебель из осины и дуба — лёгкость, прочность и натуральная эстетика",
      description: "Мы изготавливаем мебель из натуральной осины и дуба — пород, которые прекрасно сочетаются между собой как по цвету, так и по характеристикам.\n\nОсина — светлая, ровная, лёгкая.\nДуб — прочный, выразительный, с красивой текстурой.\n\nЭто отличный тандем для создания мебели с характером — тёплой, надёжной и стильной.",
      customizable: true,
      price: 350,
      priceWithMaterial: 450,
      priceWithMaterialDescription: "из дуба",
      images: [
        "/lovable-uploads/c9eb8364-afe9-4216-9d3d-db95f9b4902d.png"
      ],
      icon: Table
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Мебель из натурального дерева" 
        description="Мы производим качественную мебель из массива дерева, которая прекрасно дополнит интерьер вашего дома"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">Наши изделия</h2>
            <p className="text-lg text-gray-700">
              Мы производим качественную мебель из массива дерева, которая прекрасно дополнит интерьер вашего дома. 
              Каждое изделие создано вручную нашими мастерами с вниманием к деталям и качеству.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureItems.map((item, index) => (
              <FurnitureCard key={index} item={item} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-wood/80 to-wood-dark/90 p-6 rounded-lg shadow-md inline-block max-w-2xl">
              <p className="text-white mb-4">
                Для заказа мебели или получения дополнительной информации<br />
                свяжитесь с нами по телефону: <strong>+34 123 456 789</strong>
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 py-2 px-4 bg-white text-wood-dark rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                <span>Связаться с нами</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Furniture;
