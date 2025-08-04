
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
      title: "Materiales de construcción",
      description: [
        "Madera, tableros, OSB, contrachapado",
        "Importación desde Alemania, Austria, Bélgica", 
        "Clase C34, madera cepillada y seca",
        "En stock en Tenerife",
        "Entrega a todas las islas"
      ],
      buttonText: "Catálogo de materiales",
      buttonLink: "/materials"
    },
    {
      icon: <Hammer />,
      title: "BOSQUE PLATFORM",
      description: [
        "Estructura portante + aislamiento + OSB + membranas",
        "Módulo racional, paso de 600 mm",
        "Compatibilidad de uniones",
        "Versiones BASE o STRUCTURA"
      ],
      buttonText: "Más detalles del sistema",
      buttonLink: "/bosque-platform"
    },
    {
      icon: <Home />,
      title: "Casas de madera laminada", 
      description: [
        "Madera natural sin acabado",
        "Las paredes son la estructura y el acabado interior al mismo tiempo",
        "Montaje rápido y seco",
        "Espesor de 100 a 240 mm"
      ],
      buttonText: "Más detalles del sistema",
      buttonLink: "/houses"
    },
    {
      icon: <Users />,
      title: "Acompañamiento de proyectos",
      description: [
        "Asistencia en la elección de estructura y componentes",
        "Consultas técnicas", 
        "Supervisión en obra"
      ],
      buttonText: "Solicitar consulta",
      buttonLink: "/contact"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">
            BOSQUE: De la tabla a la casa terminada— como sistema
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            BOSQUE es un equipo que lleva más de 6 años ayudando a realizar proyectos de madera en las Islas
            Canarias.
            No solo vendemos materiales — ofrecemos soluciones.
            Desde la elección de la
            madera hasta la construcción de la casa, ofrecemos un acompañamiento basado en práctica, experiencia y compromiso con la calidad.
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
