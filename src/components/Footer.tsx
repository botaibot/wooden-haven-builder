
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { PrivacySettingsButton } from "./cookie-consent/PrivacySettingsButton";

const Footer = () => {
  const location = useLocation();
  
  // Only show the footer on the Contact page
  if (location.pathname !== "/contact") {
    return null;
  }
  
  return (
    <footer className="bg-wood-darkest text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="max-w-md text-center">
            <h4 className="font-semibold text-lg mb-4">Síguenos en redes sociales</h4>
            <div className="flex gap-4 justify-center">
              <a href="https://instagram.com/bosquenordico" target="_blank" rel="noopener noreferrer" 
                className="bg-wood p-2 rounded-full hover:bg-nature-dark transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/bosquenordico" target="_blank" rel="noopener noreferrer" 
                className="bg-wood p-2 rounded-full hover:bg-nature-dark transition-colors">
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                Síguenos en las redes sociales para estar al día de noticias y promociones.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Bosque Nórdico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
