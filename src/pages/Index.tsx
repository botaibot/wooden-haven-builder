
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeatureSection from "@/components/FeatureSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <CategorySection />
      <FeatureSection />
      <ProjectsSection />
      <TestimonialsSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-wood p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Связаться с нами</h2>
                <p className="text-white/90 mb-6">
                  Заинтересованы в сотрудничестве или у вас есть вопросы? 
                  Заполните форму, и мы свяжемся с вами в ближайшее время.
                </p>
                <div className="bg-wood-dark/30 p-4 rounded-lg">
                  <p className="text-white/90 text-sm">
                    Работаем ежедневно с 9:00 до 20:00. <br />
                    Вы также можете позвонить нам по телефону <br />
                    <strong>+34 123 456 789</strong>
                  </p>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
