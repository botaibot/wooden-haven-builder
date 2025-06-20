
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const BosquePlatform = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="BOSQUE PLATFORM — каркасная система" 
        description="Комплексная каркасная система для строительства надежных и энергоэффективных домов"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-wood-dark text-center">
              BOSQUE PLATFORM — каркасная система
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-wood-dark">Особенности системы</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-nature-dark">Несущая конструкция</h4>
                  <p className="text-gray-600 mb-4">
                    Полная несущая конструкция включает утеплитель, OSB панели и защитные мембраны
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-nature-dark">Модульная система</h4>
                  <p className="text-gray-600 mb-4">
                    Радиумный модуль с шагом 600 мм обеспечивает точность и совместимость всех узлов
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-nature-dark">Комплектация BASE</h4>
                  <p className="text-gray-600 mb-4">
                    Базовая комплектация для стандартных проектов
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-nature-dark">Комплектация STRUCTURA</h4>
                  <p className="text-gray-600 mb-4">
                    Расширенная комплектация для сложных архитектурных решений
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="/contact"
                className="inline-block bg-wood hover:bg-wood-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Получить консультацию по системе
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BosquePlatform;
