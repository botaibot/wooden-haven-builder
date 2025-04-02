
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  
  // Only show the footer on the Contact page
  if (location.pathname !== "/contact") {
    return null;
  }
  
  return (
    <footer className="bg-wood-darkest text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-nature-light">Wood</span>Tenerife
            </h3>
            <p className="text-gray-300">
              Мы специализируемся на строительстве и производстве 
              деревянных домов на Тенерифе, а также продаже 
              высококачественных строительных материалов.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-nature-light transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/houses" className="text-gray-300 hover:text-nature-light transition-colors">
                  Дома
                </Link>
              </li>
              <li>
                <Link to="/materials" className="text-gray-300 hover:text-nature-light transition-colors">
                  Материалы
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-nature-light transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-nature-light transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-nature-light" />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-nature-light" />
                <span>info@woodtenerife.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-nature-light mt-1" />
                <span>Кальяо Сальвахе, Тенерифе, Испания</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-wood p-2 rounded-full hover:bg-nature-dark transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-wood p-2 rounded-full hover:bg-nature-dark transition-colors">
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                Подписывайтесь на нас в социальных сетях, чтобы быть в курсе новостей и акций.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} WoodTenerife. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
