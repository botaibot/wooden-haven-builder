
import React from "react";
import { CheckCircle, Truck, Phone } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-cream to-sage-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            BOSQUE От доски до готового дома — по системе
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            BOSQUE — это команда, которая уже более 6 лет помогает воплощать деревянные проекты на Канарских островах.<br />
            Мы не просто продаём материалы — мы предлагаем решения.<br />
            От выбора доски до строительства дома — вы получаете поддержку, основанную на практике, опыте и любви к качеству.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-wood" />
            </div>
            <h3 className="text-xl font-semibold text-wood-dark mb-2">Экспертная консультация</h3>
            <p className="text-gray-600">
              Помогаем выбрать правильные материалы для вашего климата и задач
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-wood" />
            </div>
            <h3 className="text-xl font-semibold text-wood-dark mb-2">Доставка по островам</h3>
            <p className="text-gray-600">
              Надёжная логистика и доставка материалов на все Канарские острова
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-wood" />
            </div>
            <h3 className="text-xl font-semibold text-wood-dark mb-2">Поддержка на всех этапах</h3>
            <p className="text-gray-600">
              От планирования до завершения строительства — мы всегда на связи
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
