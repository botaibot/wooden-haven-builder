
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
      title: "Собственное производство",
      description: "Мы имеем собственное производство на острове Тенерифе, что позволяет нам контролировать качество на всех этапах."
    },
    {
      icon: <Trees size={32} />,
      title: "Экологичность",
      description: "Наши деревянные дома экологически чистые и безопасные для здоровья и окружающей среды."
    },
    {
      icon: <Truck size={32} />,
      title: "Доставка по всем островам",
      description: "Организуем доставку материалов и готовых конструкций по всем Канарским островам и на материк."
    },
    {
      icon: <HandHelping size={32} />,
      title: "Проекты по вашим эскизам",
      description: "Мы делаем вам проект по вашим эскизам, воплощая в реальность все ваши идеи и пожелания."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BOSQUE — это команда, которая уже более 6 лет помогает воплощать деревянные проекты на Канарских островах.
            Мы не просто продаём материалы — мы предлагаем решения.
            От выбора доски до строительства дома — вы получаете поддержку, основанную на практике, опыте и любви к качеству.
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
