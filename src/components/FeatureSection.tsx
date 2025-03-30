
import React from "react";
import { Shield, Truck, Trees, HandHelping } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-nature-dark p-3 bg-nature-light/50 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-wood-dark">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Качество и долговечность",
      description: "Мы используем только высококачественные материалы и передовые технологии строительства."
    },
    {
      icon: <Trees size={32} />,
      title: "Экологичность",
      description: "Наши деревянные дома экологически чистые и безопасные для здоровья и окружающей среды."
    },
    {
      icon: <Truck size={32} />,
      title: "Доставка по всему острову",
      description: "Организуем доставку материалов и готовых конструкций в любую точку Тенерифе."
    },
    {
      icon: <HandHelping size={32} />,
      title: "Полное сопровождение",
      description: "Мы помогаем с оформлением документов, получением разрешений и вводом дома в эксплуатацию."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг от проектирования до строительства 
            и обеспечиваем высокое качество на каждом этапе работы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
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
