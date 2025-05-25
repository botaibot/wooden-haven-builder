
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-wood-light">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/ca89cdb6-b7f4-44dc-9705-929eddef2f0e.png" 
            alt="BosqueNordico - Wooden Homes Tenerife" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-wood-darkest hover:text-nature-dark transition-colors">
            Главная
          </Link>
          <Link to="/houses" className="text-wood-darkest hover:text-nature-dark transition-colors">
            Дома
          </Link>
          <Link to="/house-selection" className="text-wood-darkest hover:text-nature-dark transition-colors">
            Как выбрать дом
          </Link>
          <Link to="/calculator" className="text-wood-darkest hover:text-nature-dark transition-colors">
            Калькулятор
          </Link>
          <Link to="/materials" className="text-wood-darkest hover:text-nature-dark transition-colors">
            Материалы
          </Link>
          <Link to="/furniture" className="text-wood-darkest hover:text-nature-dark transition-colors">
            Мебель
          </Link>
          <Link to="/about" className="text-wood-darkest hover:text-nature-dark transition-colors">
            О нас
          </Link>
          <Link to="/contact" className="text-wood-darkest hover:text-nature-dark transition-colors">
            Контакты
          </Link>
          <Button className="bg-wood flex items-center gap-2 hover:bg-wood-dark">
            <Phone size={16} />
            <span>+34 123 456 789</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-wood-dark hover:text-nature-dark"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-wood-light animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/houses" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Дома
            </Link>
            <Link 
              to="/house-selection" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Как выбрать дом
            </Link>
            <Link 
              to="/calculator" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Калькулятор
            </Link>
            <Link 
              to="/materials" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Материалы
            </Link>
            <Link 
              to="/furniture" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Мебель
            </Link>
            <Link 
              to="/about" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className="text-wood-darkest hover:text-nature-dark py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button className="bg-wood w-full flex items-center justify-center gap-2 hover:bg-wood-dark">
              <Phone size={16} />
              <span>+34 123 456 789</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
