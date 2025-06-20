
import React from "react";
import { ArrowRight, Hammer, Home, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  buttonLink
}: { 
  icon: React.ReactNode;
  title: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Иконка */}
      <div className="h-24 mb-6 flex items-center justify-center bg-wood/10 rounded-lg">
        <div className="bg-wood/20 p-3 rounded-full">
          {React.cloneElement(icon as React.ReactElement, { size: 40, className: "text-wood-dark" })}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-wood-darkest min-h-[3rem] flex items-center">{title}</h3>
      </div>
      
      <div className="flex-1">
        <ul className="space-y-2 mb-6">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-start gap-2 text-sm">
              <span className="text-nature-dark mt-1 text-xs">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        to={buttonLink}
        className="flex items-center justify-center gap-2 bg-wood text-white py-3 px-4 rounded-lg hover:bg-wood-dark transition-colors font-medium text-center"
      >
        {buttonText} <ArrowRight size={16} />
      </Link>
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    {
      icon: <Package />,
      title: "Строительные материалы",
      description: [
        "Брус, доска, OSB, фанера",
        "Импорт из Германии, Австрии, Бельгии", 
        "Класс С34, сухая строганная древесина",
        "В наличии на Тенерифе",
        "Доставка по всем островам"
      ],
      buttonText: "Каталог материалов",
      buttonLink: "/materials"
    },
    {
      icon: <Hammer />,
      title: "BOSQUE PLATFORM",
      description: [
        "Несущая конструкция + утеплитель + OSB + мембраны",
        "Радиумный модуль, шаг 600 мм",
        "Совместимость узлов",
        "Комплектация BASE или STRUCTURA"
      ],
      buttonText: "Подробнее о системе",
      buttonLink: "/bosque-platform"
    },
    {
      icon: <Home />,
      title: "Дома из клеёного бруса", 
      description: [
        "Натуральная древесина без отделки",
        "Стены — конструкция и интерьер в одном",
        "Быстрый, сухой монтаж",
        "Толщина от 100 до 240 мм"
      ],
      buttonText: "Подробнее о системе",
      buttonLink: "/houses"
    },
    {
      icon: <Users />,
      title: "Сопровождение проектов",
      description: [
        "Помощь в выборе конструкции и комплектации",
        "Технические консультации", 
        "Вывод на объект",
        "Комплектации и документация для сборщиков"
      ],
      buttonText: "Запросить консультацию",
      buttonLink: "/contact"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              buttonText={category.buttonText}
              buttonLink={category.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
