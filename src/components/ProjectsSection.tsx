
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
      <Link to={`/houses/${id}`} className="block">
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
          <Button variant="link" className="p-0 text-nature-dark hover:text-nature-dark/80">
            <span className="flex items-center gap-1">
              Подробнее <ArrowRight size={16} />
            </span>
          </Button>
        </div>
      </Link>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Ecopino 60",
      area: "60 м²",
      imageUrl: "/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
    },
    {
      id: 2,
      title: "Ecopino 50",
      area: "50 м²",
      imageUrl: "/lovable-uploads/5ae30882-9c91-4365-b5ba-c711c94235d3.png"
    },
    {
      id: 3,
      title: "Ecopino 25",
      area: "25 м²",
      imageUrl: "/lovable-uploads/2b12f2ef-202f-41f7-860e-f90fa03c15d7.png"
    },
    {
      id: 4,
      title: "Ecopino 25",
      area: "25 м²",
      imageUrl: "/lovable-uploads/1b2e05da-436d-494f-a509-a3dcfeaea52e.png"
    },
    {
      id: 5,
      title: "Ecopino 25",
      area: "25 м²",
      imageUrl: "/lovable-uploads/44faeda4-fa57-438b-a071-25b592003a2e.png"
    },
    {
      id: 6,
      title: "Ecopino 42",
      area: "42 м²",
      imageUrl: "/lovable-uploads/6f2fd81a-e154-42e4-aa78-5a772a37edeb.png"
    }
  ];

  return (
    <section className="py-16 bg-[url('/lovable-uploads/b30c181e-6c2d-457c-a9bd-a3645c3e35ac.png')] bg-cover bg-center bg-fixed bg-no-repeat relative">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="container mx-auto px-4 relative z-10">
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
