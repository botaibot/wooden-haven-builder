
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getHouseById } from "@/data/housesData";
import HeroSection from "@/components/house-detail/HeroSection";
import FloorPlanSection from "@/components/house-detail/FloorPlanSection";
import GallerySection from "@/components/house-detail/GallerySection";
import PriceSection from "@/components/house-detail/PriceSection";


const HouseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const houseId = parseInt(id || "1");
  const house = getHouseById(houseId);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection house={house} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Floor Plan */}
            <div className="lg:col-span-2">
              <FloorPlanSection house={house} />
            </div>

            {/* Right Column - Gallery & Price Options */}
            <div>
              <GallerySection house={house} />
              {house.id !== 6 && <PriceSection house={house} />}
            </div>
          </div>
        </div>

        
      </main>

      <Footer />
    </div>
  );
};

export default HouseDetail;
