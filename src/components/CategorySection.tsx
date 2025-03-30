
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CategoryCard = ({ title, description, imageUrl, link }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[4/3] w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        <Button asChild className="w-full sm:w-auto bg-wood hover:bg-wood-dark">
          <Link to={link} className="flex items-center justify-center gap-2">
            Подробнее <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "Дома из клееного бруса",
      description: "Экологичные и комфортные дома из натурального клееного бруса высокого качества",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965",
      link: "/houses"
    },
    {
      title: "Каркасные дома",
      description: "Современные, энергоэффективные каркасные дома с быстрыми сроками строительства",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070",
      link: "/services"
    },
    {
      title: "Строительные материалы",
      description: "Широкий ассортимент строительного леса: брус, фанера, доска, вагонка",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1992",
      link: "/materials"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Наши направления</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
