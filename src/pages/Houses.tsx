
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Euro } from "lucide-react";
import houses from "@/data/housesData";

interface HouseCardProps {
  id: number;
  title: string;
  imageUrl: string;
  area: string;
  price: string;
}

const HouseCard = ({ id, title, imageUrl, area, price }: HouseCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <Link to={`/houses/${id}`} className="h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-wood-dark text-white px-3 py-1 rounded-full text-sm">
            {area}
          </div>
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-semibold text-wood-darkest mb-2">{title}</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-nature-dark flex items-center gap-1">
              {title === "Ecopino 42" ? "от 850 " : "от 550 "}
              <Euro size={16} />
              /м²
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-0 pb-6 px-6">
          <div 
            className="block w-full text-center py-2 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
          >
            Подробнее
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

const Houses = () => {
  const displayHouses = houses.map(house => ({
    id: house.id,
    title: house.title,
    imageUrl: house.images[0],
    area: house.area,
    price: house.turnkeyCost
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative py-16" style={{ backgroundImage: "url('/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Наши проекты домов</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Выберите готовый проект или мы разработаем для вас индивидуальный проект 
            деревянного дома вашей мечты
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayHouses.map((house) => (
              <HouseCard key={house.id} {...house} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-wood-light/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-wood-dark mb-4">Не нашли подходящий вариант?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Мы можем разработать индивидуальный проект дома, учитывая все ваши пожелания и требования.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Houses;
