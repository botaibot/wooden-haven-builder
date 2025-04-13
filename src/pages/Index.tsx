
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
    <div className="min-h-screen flex flex-col">
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
