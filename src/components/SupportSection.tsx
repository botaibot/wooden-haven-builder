
import React from "react";
import { Phone, Mail, MessageSquare, Ruler, Truck, Wrench, Lightbulb, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupportSection = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-wood-light/10 to-nature-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wood-dark">
            Estamos a tu lado en cada etapa
          </h2>
          
          <div className="text-lg text-gray-700 mb-8 space-y-2">
            <p className="leading-relaxed">
              Desde la elección de materiales hasta el montaje final.
            </p>
            <p className="leading-relaxed">
              Acudimos a obra, asesoramos sobre detalles constructivos, calculamos cargas y acompañamos el montaje en el sitio.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-wood-dark">Contáctanos</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} className="text-wood" />
                <span>WhatsApp: +34 659 94 62 34 | +34 606 85 65 06</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={18} className="text-wood" />
                <span>E-mail: info@bosquenordico.com</span>
              </div>
            </div>
            <Button asChild className="bg-wood hover:bg-wood-dark text-white">
              <Link to="/contact" className="flex items-center gap-2">
                <MessageSquare size={16} />
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
