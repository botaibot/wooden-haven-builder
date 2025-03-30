
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface HouseCardProps {
  id: number;
  title: string;
  imageUrl: string;
  area: string;
  bedrooms: number;
  price: string;
}

const HouseCard = ({ id, title, imageUrl, area, bedrooms, price }: HouseCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-wood-dark text-white px-3 py-1 rounded-full text-sm">
          {area}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-wood-darkest mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">{bedrooms} спален</span>
          <span className="font-bold text-nature-dark">{price}</span>
        </div>
        <a 
          href={`/houses/${id}`}
          className="block w-full text-center py-2 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
        >
          Подробнее
        </a>
      </div>
    </div>
  );
};

const Houses = () => {
  const houses = [
    {
      id: 1,
      title: "Финский домик",
      imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965",
      area: "80 м²",
      bedrooms: 2,
      price: "от €75,000"
    },
    {
      id: 2,
      title: "Шале Альпика",
      imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1974",
      area: "120 м²",
      bedrooms: 3,
      price: "от €110,000"
    },
    {
      id: 3,
      title: "Норвежский дом",
      imageUrl: "https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?q=80&w=1970",
      area: "95 м²",
      bedrooms: 2,
      price: "от €90,000"
    },
    {
      id: 4,
      title: "Каркасный дом Модерн",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1970",
      area: "110 м²",
      bedrooms: 3,
      price: "от €105,000"
    },
    {
      id: 5,
      title: "Дом-баня Релакс",
      imageUrl: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=1970",
      area: "70 м²",
      bedrooms: 1,
      price: "от €65,000"
    },
    {
      id: 6,
      title: "Барнхаус Лофт",
      imageUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1974",
      area: "150 м²",
      bedrooms: 4,
      price: "от €140,000"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative py-16 bg-[url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
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
            {houses.map((house) => (
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
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Houses;
