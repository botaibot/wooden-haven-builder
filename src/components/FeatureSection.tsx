
import React from "react";
import { Home, Package, Construction, Tree } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
      <div className="bg-nature-light/20 p-4 rounded-full mb-4">
        <div className="text-nature-dark">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-wood-darkest mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Home size={32} />,
      title: "Экологичные дома",
      description: "Мы строим дома из экологически чистых материалов, безопасных для здоровья."
    },
    {
      icon: <Package size={32} />,
      title: "Качественные материалы",
      description: "Большой выбор высококачественных строительных материалов для любых проектов."
    },
    {
      icon: <Construction size={32} />,
      title: "Опытные мастера",
      description: "Наши специалисты имеют многолетний опыт в строительстве деревянных домов."
    },
    {
      icon: <Tree size={32} />,
      title: "Забота о природе",
      description: "Мы используем только сертифицированную древесину и заботимся об окружающей среде."
    }
  ];

  return (
    <section className="py-16 bg-wood-light/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
