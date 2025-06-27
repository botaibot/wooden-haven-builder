
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "@/components/Cart";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn("bg-white shadow", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="/lovable-uploads/ca89cdb6-b7f4-44dc-9705-929eddef2f0e.png"
                alt="Bosque Nórdico"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - распределяем по всей ширине */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center justify-evenly w-full max-w-6xl gap-2">
              <Link to="/" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Главная
              </Link>
              <Link to="/materials" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Materiales
              </Link>
              <Link to="/bosque-platform" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Casa de entramado ligero
              </Link>
              <Link to="/houses" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Casas vigas laminadas
              </Link>
              <Link to="/house-selection" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Elegir tu casa
              </Link>
              <Link to="/calculator" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Calculadora
              </Link>
              <Link to="/stories" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Diario de construcción
              </Link>
              <Link to="/about" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Nosotros
              </Link>
              <Link to="/contact" className="text-wood-dark hover:text-nature-dark transition-colors whitespace-nowrap uppercase text-xs">
                Contacto
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Cart />
            </div>
            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden ml-2">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-wood-dark hover:text-nature-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nature-dark"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'none'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </Link>
          <Link
            to="/materials"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Materiales
          </Link>
          <Link
            to="/bosque-platform"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Casa de entramado ligero
          </Link>
          <Link
            to="/houses"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Casas vigas laminadas
          </Link>
          <Link
            to="/house-selection"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Elegir tu casa
          </Link>
          <Link
            to="/calculator"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculadora
          </Link>
          <Link
            to="/stories"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Diario de construcción
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
