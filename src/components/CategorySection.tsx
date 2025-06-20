
import React from "react";
import { ArrowRight, Hammer, Home, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  schematicImage 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
  schematicImage: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Схематическое изображение */}
      <div className="h-32 mb-4 flex items-center justify-center bg-gray-50 rounded-lg">
        {schematicImage}
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-wood/20 p-2 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-wood-darkest">{title}</h3>
      </div>
      
      <div className="flex-1">
        <ul className="space-y-2 mb-6">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-start gap-2">
              <span className="text-nature-dark mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        to={buttonLink}
        className="flex items-center justify-center gap-2 bg-wood text-white py-3 px-4 rounded-lg hover:bg-wood-dark transition-colors font-medium"
      >
        {buttonText} <ArrowRight size={16} />
      </Link>
    </div>
  );
};

const MaterialsSchematic = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="grid grid-cols-3 gap-2">
      {/* Схематичное изображение стройматериалов */}
      <div className="w-8 h-16 bg-wood rounded-sm"></div>
      <div className="w-8 h-12 bg-wood-dark rounded-sm mt-4"></div>
      <div className="w-8 h-14 bg-nature rounded-sm mt-2"></div>
      <div className="w-8 h-10 bg-wood-dark rounded-sm mt-6"></div>
      <div className="w-8 h-18 bg-wood rounded-sm"></div>
      <div className="w-8 h-12 bg-nature-dark rounded-sm mt-4"></div>
    </div>
  </div>
);

const FrameSchematic = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      {/* Схематичная каркасная конструкция */}
      <div className="w-20 h-16 border-2 border-wood-dark rounded grid grid-cols-3 gap-1 p-1">
        <div className="bg-wood/30 rounded-sm"></div>
        <div className="bg-nature/30 rounded-sm"></div>
        <div className="bg-wood/30 rounded-sm"></div>
        <div className="bg-nature/30 rounded-sm"></div>
        <div className="bg-wood/30 rounded-sm"></div>
        <div className="bg-nature/30 rounded-sm"></div>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">600mm</div>
    </div>
  </div>
);

const TimberSchematic = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      {/* Схематичный клееный брус */}
      <div className="w-16 h-20 bg-wood rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/4 bg-wood-dark/20 border-b border-wood-dark/30"></div>
          <div className="h-1/4 bg-wood/20 border-b border-wood-dark/30"></div>
          <div className="h-1/4 bg-wood-dark/20 border-b border-wood-dark/30"></div>
          <div className="h-1/4 bg-wood/20"></div>
        </div>
      </div>
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 rotate-90">240mm</div>
    </div>
  </div>
);

const ConsultingSchematic = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      {/* Схематичная консультация */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-nature rounded-full flex items-center justify-center">
          <Users size={16} className="text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-wood rounded"></div>
          <div className="w-8 h-1 bg-wood-dark rounded"></div>
          <div className="w-10 h-1 bg-nature rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const CategorySection = () => {
  const categories = [
    {
      icon: <Package className="text-wood-dark" size={24} />,
      title: "Строительные материалы",
      description: [
        "Брус, доска, OSB, фанера",
        "Импорт из Германии, Австрии, Бельгии", 
        "Класс С34, сухая строганная древесина",
        "В наличии на Тенерифе",
        "Доставка по всем островам"
      ],
      buttonText: "Открыть каталог материалов",
      buttonLink: "/materials",
      schematicImage: <MaterialsSchematic />
    },
    {
      icon: <Hammer className="text-wood-dark" size={24} />,
      title: "BOSQUE PLATFORM — каркасная система",
      description: [
        "Несущая конструкция + утеплитель + OSB + мембраны",
        "Радиумный модуль, шаг 600 мм",
        "Совместимость узлов",
        "Комплектация BASE или STRUCTURA"
      ],
      buttonText: "Подробнее о системе",
      buttonLink: "/bosque-platform",
      schematicImage: <FrameSchematic />
    },
    {
      icon: <Home className="text-wood-dark" size={24} />,
      title: "Дома из клеёного бруса", 
      description: [
        "Натуральная древесина без отделки",
        "Стены — конструкция и интерьер в одном",
        "Быстрый, сухой монтаж",
        "Толщина от 100 до 240 мм"
      ],
      buttonText: "Подробнее о системе",
      buttonLink: "/houses",
      schematicImage: <TimberSchematic />
    },
    {
      icon: <Users className="text-wood-dark" size={24} />,
      title: "Сопровождение проектов",
      description: [
        "Помощь в выборе конструкции и комплектации",
        "Технические консультации", 
        "Вывод на объект",
        "Комплектации и документация для сборщиков"
      ],
      buttonText: "Запросить консультацию",
      buttonLink: "/contact",
      schematicImage: <ConsultingSchematic />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
            BOSQUE От доски до готового дома — по системе
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            BOSQUE — это не просто доставка дерева. Мы вникаем в задачу, чтобы помочь принять верное решение. 
            Мы не просто продаем — мы подбираем то, что действительно нужно, чтобы конструкция, материал и задача совпали — не на словах, а в сборке.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              buttonText={category.buttonText}
              buttonLink={category.buttonLink}
              schematicImage={category.schematicImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
