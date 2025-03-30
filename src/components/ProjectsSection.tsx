
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  area: string;
  imageUrl: string;
  id: number;
}

const ProjectCard = ({ title, area, imageUrl, id }: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-wood-dark text-white px-3 py-1 rounded-full text-sm">
          {area}
        </div>
      </div>
      <div className="p-4 bg-white border border-t-0 border-gray-200 rounded-b-lg">
        <h3 className="text-xl font-semibold text-wood-darkest mb-2">{title}</h3>
        <Button asChild variant="link" className="p-0 text-nature-dark hover:text-nature-dark/80">
          <Link to={`/houses/${id}`} className="flex items-center gap-1">
            Подробнее <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Финский домик",
      area: "80 м²",
      imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965"
    },
    {
      id: 2,
      title: "Шале Альпика",
      area: "120 м²",
      imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1974"
    },
    {
      id: 3,
      title: "Норвежский дом",
      area: "95 м²",
      imageUrl: "https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?q=80&w=1970"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="section-title">Популярные проекты</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-wood">
            <Link to="/houses" className="flex items-center gap-2">
              Все проекты <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              area={project.area}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
