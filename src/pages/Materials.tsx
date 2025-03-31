
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";

interface MaterialCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  unit: string;
}

const MaterialCard = ({ title, description, imageUrl, price, unit }: MaterialCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-[3/2] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-wood-darkest mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 h-12 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-nature-dark">{price} / {unit}</span>
          <a 
            href="/contact"
            className="flex items-center gap-1 py-2 px-4 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
          >
            <Package size={16} />
            <span>Заказать</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Materials = () => {
  const materials = [
    {
      title: "Брус строганный",
      description: "Высококачественный строганный брус для строительства и отделки",
      imageUrl: "https://images.unsplash.com/photo-1622041179528-0ef118517dc0?q=80&w=1965",
      price: "от €8",
      unit: "м"
    },
    {
      title: "Фанера влагостойкая",
      description: "Влагостойкая фанера различных размеров и толщины",
      imageUrl: "https://images.unsplash.com/photo-1595514535415-dae8970c1406?q=80&w=1932",
      price: "от €15",
      unit: "м²"
    },
    {
      title: "Доска обрезная",
      description: "Обрезная доска из различных пород дерева для строительства",
      imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1970",
      price: "от €6",
      unit: "м"
    },
    {
      title: "Вагонка",
      description: "Высококачественная вагонка для внутренней и внешней отделки",
      imageUrl: "https://images.unsplash.com/photo-1605348863000-9b95fc96b149?q=80&w=2060",
      price: "от €7",
      unit: "м²"
    },
    {
      title: "Террасная доска",
      description: "Долговечная террасная доска для наружного применения",
      imageUrl: "https://images.unsplash.com/photo-1594124303341-eb05b08258a7?q=80&w=1974",
      price: "от €12",
      unit: "м²"
    },
    {
      title: "Блок-хаус",
      description: "Декоративная обшивка для фасадов и внутренней отделки",
      imageUrl: "https://images.unsplash.com/photo-1594237258022-a74b1fc8e0b9?q=80&w=1974",
      price: "от €10",
      unit: "м²"
    },
    {
      title: "Клееный брус",
      description: "Высокопрочный клееный брус для долговечных конструкций",
      imageUrl: "https://images.unsplash.com/photo-1593195749622-8754ff0b69db?q=80&w=1974",
      price: "от €20",
      unit: "м"
    },
    {
      title: "Имитация бруса",
      description: "Доска с имитацией натурального бруса для отделки",
      imageUrl: "https://images.unsplash.com/photo-1533155925277-bb0098f4b78d?q=80&w=1970",
      price: "от €9",
      unit: "м²"
    }
  ];

  const categories = [
    "Все материалы", "Брус и доска", "Фанера", "Вагонка", "Отделочные материалы"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div 
        className="relative py-16 bg-gray-800" 
        style={{
          backgroundImage: "url('/lovable-uploads/50993a52-ddf8-4b27-a105-f7bdb868a185.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Строительные материалы</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Широкий ассортимент высококачественных пиломатериалов для строительства 
            и отделки: брус, фанера, доска, вагонка и многое другое
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full text-sm ${
                  index === 0 
                    ? "bg-wood text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-wood-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <MaterialCard key={index} {...material} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-nature-light/30">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-wood-dark mb-4">Оптовым покупателям</h2>
            <p className="text-gray-700 mb-6">
              Для оптовых покупателей у нас действуют специальные цены на все виды пиломатериалов. 
              Мы обеспечиваем быструю доставку по всему острову Тенерифе и предлагаем 
              индивидуальные условия сотрудничества.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
            >
              Запросить оптовый прайс
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Materials;
