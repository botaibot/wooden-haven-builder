import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn("bg-white shadow", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="/lovable-uploads/ca89cdb6-b7f4-44dc-9705-929eddef2f0e.png"
                alt="Bosque Nórdico"
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-wood-dark hover:text-nature-dark transition-colors">
                Главная
              </Link>
              <Link to="/houses" className="text-wood-dark hover:text-nature-dark transition-colors">
                Casas
              </Link>
              <Link to="/house-selection" className="text-wood-dark hover:text-nature-dark transition-colors">
                Elegir tu casa
              </Link>
              <Link to="/materials" className="text-wood-dark hover:text-nature-dark transition-colors">
                Materiales
              </Link>
              <Link to="/furniture" className="text-wood-dark hover:text-nature-dark transition-colors">
                Muebles
              </Link>
              <Link to="/calculator" className="text-wood-dark hover:text-nature-dark transition-colors">
                Calculadora
              </Link>
              <Link to="/stories" className="text-wood-dark hover:text-nature-dark transition-colors">
                Historias
              </Link>
              <Link to="/about" className="text-wood-dark hover:text-nature-dark transition-colors">
                Nosotros
              </Link>
              <Link to="/contact" className="text-wood-dark hover:text-nature-dark transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/cart" className="p-2 text-wood-dark hover:text-nature-dark transition-colors relative">
                <ShoppingCart className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute top-[-5px] right-[-5px] bg-nature-dark text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {items.length}
                  </span>
                )}
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
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
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </Link>
          <Link
            to="/houses"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Casas
          </Link>
          <Link
            to="/house-selection"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Elegir tu casa
          </Link>
          <Link
            to="/materials"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Materiales
          </Link>
          <Link
            to="/furniture"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Muebles
          </Link>
          <Link
            to="/calculator"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculadora
          </Link>
          <Link
            to="/stories"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Historias
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-medium text-wood-dark hover:text-nature-dark"
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
