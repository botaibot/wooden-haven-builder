
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Home, Settings, Thermometer, Shield, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const BosquePlatform = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Casa de entramado ligero BOSQUE PLATFORM" 
        description="Tecnología avanzada de construcción con marco de madera para el clima de las Islas Canarias"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      {/* Introducción */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-6">
              BOSQUE PLATFORM: Tu casa ideal en Canarias
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              La tecnología de entramado ligero BOSQUE PLATFORM combina tradición y modernidad. 
              Un marco de madera resistente con un "sandwich" de paredes energéticamente eficiente, 
              diseñado específicamente para el clima cálido y húmedo de las Islas Canarias.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Ventajas principales */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-wood-darkest">¿Por qué elegir BOSQUE PLATFORM?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Precio accesible</h4>
                    <p className="text-gray-700">Optimización de costos sin comprometer la calidad</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Eficiencia energética</h4>
                    <p className="text-gray-700">Aislamiento térmico superior para el clima canario</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Flexibilidad total en diseño</h4>
                    <p className="text-gray-700">Libertad completa en planificación y acabado exterior</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Adaptado al clima local</h4>
                    <p className="text-gray-700">Ideal para condiciones cálidas y húmedas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Aspecto personalizable</h4>
                    <p className="text-gray-700">Estuco, madera, paneles, piedra - cualquier acabado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen ilustrativa */}
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/7df56228-f8ac-4e5a-b188-b593109f2495.png" 
                alt="Estructura de casa de entramado ligero BOSQUE PLATFORM"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de construcción */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-4">
              Opciones de construcción BOSQUE PLATFORM
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrecemos diferentes configuraciones para adaptarse a tus necesidades y presupuesto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mono Roof */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/3ad8d18d-bdb8-473f-ba52-68a77fb2965e.png" 
                  alt="Mono Roof - Techo inclinado simple"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Mono Roof</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Techo inclinado simple y elegante, ideal para diseños modernos y minimalistas.
                </p>
              </CardContent>
            </Card>

            {/* Gable Roof */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/40c9440d-eec9-4336-a93f-9f06704767b4.png" 
                  alt="Gable Roof - Techo a dos aguas clásico"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Gable Roof</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Techo a dos aguas clásico, perfecto para un estilo tradicional y funcional.
                </p>
              </CardContent>
            </Card>

            {/* Assembly Kit */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f0419e8c-132e-4c54-9547-df6bb3904560.png" 
                  alt="Assembly Kit - Kit de montaje completo"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Assembly Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Kit completo con todos los materiales y herramientas necesarias para el montaje.
                </p>
              </CardContent>
            </Card>

            {/* Foundation */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/d610fc5c-e82e-4745-945e-e474bb7b16ee.png" 
                  alt="Foundation - Sistema de cimentación"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Sistema de cimentación adaptado al terreno canario y condiciones locales.
                </p>
              </CardContent>
            </Card>

            {/* House Frame */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/74762dc1-3986-4b37-b0eb-9c13f3b3733e.png" 
                  alt="House Frame - Marco de la casa"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">House Frame</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Estructura portante de madera C24, seca y cepillada, base sólida de tu hogar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de construcción */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-4">
              Proceso de construcción paso a paso
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Desde la planificación hasta la entrega, te acompañamos en cada etapa
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-wood text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Diseño y planificación</h3>
                <p className="text-gray-700">
                  Diseñamos tu casa según tus necesidades y el terreno disponible
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-wood text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Fabricación en taller</h3>
                <p className="text-gray-700">
                  Prefabricamos todos los elementos en condiciones controladas
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-wood text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Montaje en obra</h3>
                <p className="text-gray-700">
                  Ensamblamos tu casa de forma rápida y limpia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wood text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para construir tu casa BOSQUE PLATFORM?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para una consulta personalizada y descubre cómo podemos hacer realidad tu hogar ideal en Canarias
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="inline-flex items-center px-8 py-3 bg-white text-wood rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Calcular precio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-wood transition-colors font-semibold"
            >
              Consulta gratuita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BosquePlatform;
