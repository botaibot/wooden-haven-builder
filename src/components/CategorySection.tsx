
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  link: string;
}

const CategoryCard = ({ title, imageUrl, link }: CategoryCardProps) => {
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
        <Button asChild className="w-full sm:w-auto bg-wood hover:bg-wood-dark">
          <Link to={link} className="flex items-center justify-center gap-2">
            {title} <ArrowRight size={16} />
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
      imageUrl: "/lovable-uploads/fac2c745-0513-44c6-a1e9-5d0430c85ded.png",
      link: "/houses"
    },
    {
      title: "Каркасные дома",
      imageUrl: "/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png",
      link: "/services"
    },
    {
      title: "Строительные материалы",
      imageUrl: "/lovable-uploads/4501b6c8-2e0c-45cb-a4d0-53a0225e82ba.png",
      link: "/materials"
    },
    {
      title: "Мебель",
      imageUrl: "/lovable-uploads/b1b65c60-7995-441c-9888-57e6e6a91a98.png",
      link: "/furniture"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Наши направления</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
