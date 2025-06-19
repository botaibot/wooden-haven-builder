
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeatureSection from "@/components/FeatureSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectGalleryCarousel from "@/components/ProjectGalleryCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: 'linear-gradient(135deg, #F6F2EC 0%, #D5DCD2 50%, #C9B9A2 100%)'
    }}>
      <Navbar />
      <Hero />
      <CategorySection />
      <FeatureSection />
      <ProjectsSection />
      <ProjectGalleryCarousel />
      <Footer />
    </div>
  );
};

export default Index;
