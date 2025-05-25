
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { Settings, Home, ArrowRight, CheckCircle, Layers, Shield, Thermometer, Zap, Paintbrush } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HouseSelection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="¿Cómo elegir tu casa perfecta?" 
        description="Dos enfoques — un resultado: una casa de calidad. Te ayudamos a elegir entre la construcción de entramado ligero y viga multilaminada"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      {/* Introducción */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-6">
              Dos tecnologías probadas para el clima canario
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos dos métodos probados para construir una casa confiable, cómoda y duradera. 
              Ambas opciones — el sistema de entramado ligero BOSQUE PLATFORM y el sistema de viga multilaminada — 
              están adaptadas al clima de las Islas Canarias y cumplen con los estándares europeos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Casa de entramado ligero */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-xl">
                  <Settings className="h-6 w-6 text-blue-600 mr-3" />
                  Casa de entramado ligero BOSQUE PLATFORM
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">
                  La tecnología de entramado es un sistema donde la función portante la realiza un marco de madera, 
                  y el aislamiento térmico y las capas protectoras forman un "sandwich" cómodo y energéticamente eficiente de la pared.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Precio más accesible</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eficiencia energética y aislamiento térmico confiable</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexibilidad en diseño y planificación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Adecuado para clima cálido y húmedo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Aspecto exterior personalizable: estuco, madera, paneles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Casa de viga multilaminada */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center text-xl">
                  <Home className="h-6 w-6 text-amber-600 mr-3" />
                  Casa de viga multilaminada
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">
                  Estas casas se ensamblan con paredes macizas de láminas encoladas. 
                  Las paredes realizan simultáneamente funciones portantes y decorativas, sin necesidad de revestimiento adicional.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Aspecto exterior acabado sin revestimiento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Montaje rápido y limpio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ecológico y duradero</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Estilo clásico de madera natural</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Aislamiento térmico por grosor de paredes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabla de comparación */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-4">
              Comparación de tecnologías de construcción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Te ayudamos a elegir el tipo de casa ideal que corresponda a tus necesidades y al clima de las Islas Canarias.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-wood-darkest">Característica</TableHead>
                  <TableHead className="font-bold text-wood-darkest bg-amber-50">Casa de viga multilaminada</TableHead>
                  <TableHead className="font-bold text-wood-darkest bg-blue-50">Casa de entramado BOSQUE PLATFORM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">💲 Precio</TableCell>
                  <TableCell className="bg-amber-50/50">Mayor (aspecto exterior premium)</TableCell>
                  <TableCell className="bg-blue-50/50">Más accesible (optimización de costos)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">🏡 Aspecto exterior</TableCell>
                  <TableCell className="bg-amber-50/50">Madera natural (estilo clásico y acogedor)</TableCell>
                  <TableCell className="bg-blue-50/50">Cualquiera: estuco, madera, paneles, piedra, etc. (libertad total de diseño)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">🌡️ Aislamiento térmico</TableCell>
                  <TableCell className="bg-amber-50/50">Paredes gruesas de madera (acumulación natural de calor)</TableCell>
                  <TableCell className="bg-blue-50/50">Aislantes modernos ("sandwich" de pared con alta eficiencia energética)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">⏱️ Velocidad de montaje</TableCell>
                  <TableCell className="bg-amber-50/50">Más rápido (montaje de elementos prefabricados)</TableCell>
                  <TableCell className="bg-blue-50/50">Rápido, pero más etapas (requiere acabado posterior)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">📐 Flexibilidad en planificación</TableCell>
                  <TableCell className="bg-amber-50/50">Estilo limitado a madera (paredes macizas)</TableCell>
                  <TableCell className="bg-blue-50/50">Libertad total en acabado y redistribución (fácil cambiar el interior)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Construcción de paredes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-4">
              Construcción de paredes: detalles técnicos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conoce la estructura interna de cada tipo de construcción para tomar la mejor decisión
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Paredes de entramado ligero */}
            <div>
              <Card className="mb-8">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center text-xl">
                    <Layers className="h-6 w-6 text-blue-600 mr-3" />
                    Paredes de entramado ligero (BOSQUE PLATFORM)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/7df56228-f8ac-4e5a-b188-b593109f2495.png" 
                      alt="Construcción de pared de entramado ligero BOSQUE PLATFORM - capas de aislamiento"
                      title="Estructura de pared de entramado ligero con aislamiento térmico"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Layers className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Estructura</h4>
                    <p className="text-gray-700">Base de madera con tablas C24, cepilladas y secas. Cumple función portante.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Thermometer className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Aislamiento</h4>
                    <p className="text-gray-700">Lana mineral entre los montantes. Segura, no inflamable, no se hunde.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Barrera de vapor inteligente</h4>
                    <p className="text-gray-700">Membrana con permeabilidad variable. Permite salida de vapor, bloquea humedad desde el interior.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Shield className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Protección contra viento y lluvia</h4>
                    <p className="text-gray-700">Membrana exterior que 'respira' pero bloquea el agua. Esencial para el clima canario.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Layers className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">OSB y rastreles</h4>
                    <p className="text-gray-700">Placa OSB para rigidez + subestructura ventilada 48×48 mm para el revestimiento.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Paintbrush className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Acabado exterior</h4>
                    <p className="text-gray-700">Revoque, madera, paneles, placas — 100% personalizable.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paredes de madera laminada */}
            <div>
              <Card className="mb-8">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="flex items-center text-xl">
                    <Home className="h-6 w-6 text-amber-600 mr-3" />
                    Paredes de madera laminada
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/d1431980-2174-41af-8b14-8b445792f1a6.png" 
                      alt="Construcción de pared de viga multilaminada - madera maciza encolada"
                      title="Estructura de pared de viga multilaminada con láminas encoladas"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Home className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Construcción</h4>
                    <p className="text-gray-700">Muro macizo de madera laminada. De 100 a 240 mm. Madera sólida sin rellenos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Layers className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Espigas (nagels)</h4>
                    <p className="text-gray-700">Pernos cilíndricos de madera que unen las capas. Refuerzo contra desplazamiento.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Extremos</h4>
                    <p className="text-gray-700">Se lijan, barnizan y protegen con tapas. Previenen entrada de humedad.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Electricidad</h4>
                    <p className="text-gray-700">Instalación empotrada (canal interna) o externa en estilo loft/retro.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Paintbrush className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Sin revestimiento interior</h4>
                    <p className="text-gray-700">Solo pintar. No se requiere yeso ni paneles. El muro ya está listo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-wood-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-wood-darkest mb-6">Preguntas frecuentes</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre las casas de madera
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿La madera se pudre?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  No. Usamos madera seca y tratada con protección contra la humedad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Y los insectos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  No. Toda la madera es secada en cámara y tratada contra plagas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Hace calor o frío?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  No. Las casas de entramado están bien aisladas. Las de madera maciza retienen el calor.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Y si hay incendio?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  La madera se quema de forma predecible — se carboniza sin colapsar. Aplicamos tratamientos ignífugos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Se puede hacer interior estilo madera?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Sí. Usamos revestimientos de friso o imitación de vigas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Y estilo moderno?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Sí. Especialmente en casas de entramado: se puede usar cartón yeso, pintura, paneles. En madera, combinaciones modernas con toques naturales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Aislamiento acústico?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  El entramado a través de capas. La madera maciza por su masa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Se puede hacer de dos plantas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Sí. Ambas tecnologías lo permiten con el diseño adecuado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-wood-darkest hover:no-underline">
                  ¿Cuál es mejor?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Ambas son fiables. La diferencia está en el presupuesto, el gusto y el estilo deseado. Te ayudamos a elegir lo ideal para ti.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/houses"
                  className="inline-flex items-center px-8 py-3 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
                >
                  Ver proyectos disponibles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-wood text-wood rounded-md hover:bg-wood hover:text-white transition-colors"
                >
                  Consulta personalizada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HouseSelection;
