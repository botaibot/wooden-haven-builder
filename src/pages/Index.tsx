
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProjectGalleryCarousel from "@/components/ProjectGalleryCarousel";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: 'linear-gradient(135deg, #F6F2EC 0%, #D5DCD2 50%, #C9B9A2 100%)'
    }}>
      <Navbar />
      <Hero />
      <CategorySection />
      <ProjectGalleryCarousel />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
