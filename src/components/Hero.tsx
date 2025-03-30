
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Фоновое видео или GIF */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 hero-gradient z-10"></div>
        {/* Для MP4 видео */}
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          {/* Если видео не загрузится, покажем статичный фон */}
          <img 
            src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2069" 
            alt="Деревянные дома фон" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Для GIF - раскомментируйте этот блок и закомментируйте video-блок выше если хотите использовать GIF
        <img 
          src="/path-to-your-animation.gif" 
          alt="Деревянные дома анимация" 
          className="w-full h-full object-cover"
        />
        */}
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Деревянные дома <br />
            <span className="text-nature-light">на Тенерифе</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Строительство экологичных деревянных домов и продажа высококачественных строительных материалов на солнечном острове Тенерифе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild className="bg-wood hover:bg-wood-dark text-white px-8 py-6 text-lg">
              <Link to="/houses">Наши проекты</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/contact" className="flex items-center gap-2">
                Связаться с нами <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
