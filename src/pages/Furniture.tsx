
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { sofa, tool } from "lucide-react";

const Furniture = () => {
  const furnitureItems = [
    {
      title: "Столы из массива дерева",
      description: "Прочные и элегантные столы различных размеров из натурального дерева",
      icon: tool,
      imageUrl: "/lovable-uploads/4b830e79-1c28-47d9-b24e-0ad3f853a6ab.png"
    },
    {
      title: "Стулья и кресла",
      description: "Комфортные стулья и кресла, идеально дополняющие интерьер деревянного дома",
      icon: sofa,
      imageUrl: "/lovable-uploads/85042101-ffb6-40dc-b3be-85bc519188fd.png"
    },
    {
      title: "Кровати и тумбы",
      description: "Спальная мебель из экологически чистых материалов",
      icon: sofa,
      imageUrl: "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png"
    },
    {
      title: "Лавки и скамьи",
      description: "Функциональные и стильные лавки для сада и дома",
      icon: tool,
      imageUrl: "/lovable-uploads/1fcff38f-77ef-4172-a6d4-8695e335866d.png"
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
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="text-wood-dark" size={24} />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
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
