
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import houses from "@/data/housesData";

interface ProjectCardProps {
  title: string;
  area: string;
  imageUrl: string;
  price: string;
  id: number;
}

const ProjectCard = ({ title, area, imageUrl, price, id }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-lg h-full">
      <Link to={`/houses/${id}`} className="block h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`Proyecto de casa de madera ${title} - ${area} m² de Bosque Nórdico en las Islas Canarias`}
            title={`Casa de madera ${title} - detalles del proyecto`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-wood-dark text-white px-3 py-1 rounded-full text-sm">
            {area}
          </div>
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="text-xl font-semibold text-wood-darkest">{title}</h3>
          <p className="text-nature-dark font-medium mt-2 flex items-center gap-1">
            {title === "Ecopino 42" ? "от 850 " : (title === "Ecopino Lux Studio" ? "от 600 " : "от 550 ")}
            <Euro size={16} />
            /м²
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="link" className="p-0 text-nature-dark hover:text-nature-dark/80">
            <span className="flex items-center gap-1">
              Подробнее о проекте <ArrowRight size={16} />
            </span>
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

const ProjectsSection = () => {
  // Обновлено согласно новому порядку: Ecopino 42, Black Eco Box, Ecopino Lux Studio
  const featuredHouses = [
    houses.find(house => house.title === "Ecopino 42"),
    houses.find(house => house.title === "Black Eco Box"),
    houses.find(house => house.title === "Ecopino Lux Studio")
  ].filter(Boolean); // Remove any undefined entries
  
  return (
    <section className="py-16 bg-wood-light/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-4">Популярные проекты деревянных домов</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-wood">
            <Link to="/houses" className="flex items-center gap-2">
              Все проекты домов <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHouses.map((house) => (
            <ProjectCard 
              key={house.id}
              id={house.id}
              title={house.title}
              area={house.area}
              price={house.turnkeyCost}
              imageUrl={house.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
