
import React from "react";
import { DollarSign, Home, Thermometer, Clock, Settings } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HouseComparisonSection = () => {
  return (
    <section className="py-16 bg-wood-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wood-darkest mb-4">
            ¿Qué casa elegir?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Dos enfoques — un resultado: una casa de calidad. Ofrecemos dos métodos probados para construir una casa confiable, cómoda y duradera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Каркасный дом */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Settings className="h-8 w-8 text-nature mr-3" />
              <h3 className="text-2xl font-bold text-wood-darkest">
                Casa de entramado ligero BOSQUE PLATFORM
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              La tecnología de entramado es un sistema donde la función portante la realiza un marco de madera, 
              y el aislamiento térmico y las capas protectoras forman un "sandwich" cómodo y energéticamente eficiente de la pared.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Precio más accesible</li>
              <li>✓ Eficiencia energética y aislamiento térmico confiable</li>
              <li>✓ Flexibilidad en diseño y planificación</li>
              <li>✓ Adecuado para clima cálido y húmedo</li>
              <li>✓ Aspecto exterior personalizable: estuco, madera, paneles</li>
            </ul>
          </div>

          {/* Дом из клееного бруса */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-wood mr-3" />
              <h3 className="text-2xl font-bold text-wood-darkest">
                Casa de viga multilaminada
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Estas casas se ensamblan con paredes macizas de láminas encoladas. 
              Las paredes realizan simultáneamente funciones portantes y decorativas, sin necesidad de revestimiento adicional.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Aspecto exterior acabado sin revestimiento</li>
              <li>✓ Montaje rápido y limpio</li>
              <li>✓ Ecológico y duradero</li>
              <li>✓ Estilo clásico de madera natural</li>
              <li>✓ Aislamiento térmico por grosor de paredes</li>
            </ul>
          </div>
        </div>

        {/* Tabla de comparación */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-2xl font-bold text-wood-darkest mb-2">
              Comparación de tecnologías de construcción
            </h3>
            <p className="text-gray-700">
              Te ayudamos a elegir el tipo de casa ideal que corresponda a tus necesidades y al clima de las Islas Canarias.
            </p>
          </div>
          
          <div className="overflow-x-auto">
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
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                      Precio
                    </div>
                  </TableCell>
                  <TableCell className="bg-amber-50/50">
                    Mayor (aspecto exterior premium)
                  </TableCell>
                  <TableCell className="bg-blue-50/50">
                    Más accesible (optimización de costos)
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-purple-600 mr-2" />
                      Aspecto exterior
                    </div>
                  </TableCell>
                  <TableCell className="bg-amber-50/50">
                    Madera natural (estilo clásico y acogedor)
                  </TableCell>
                  <TableCell className="bg-blue-50/50">
                    Cualquiera: estuco, madera, paneles, piedra, etc. (libertad total de diseño)
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-cyan-600 mr-2" />
                      Aislamiento térmico
                    </div>
                  </TableCell>
                  <TableCell className="bg-amber-50/50">
                    Paredes gruesas de madera (acumulación natural de calor)
                  </TableCell>
                  <TableCell className="bg-blue-50/50">
                    Aislantes modernos ("sandwich" de pared con alta eficiencia energética)
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                      Velocidad de montaje
                    </div>
                  </TableCell>
                  <TableCell className="bg-amber-50/50">
                    Más rápido (montaje de elementos prefabricados)
                  </TableCell>
                  <TableCell className="bg-blue-50/50">
                    Rápido, pero más etapas (requiere acabado posterior)
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 text-orange-600 mr-2" />
                      Flexibilidad en planificación
                    </div>
                  </TableCell>
                  <TableCell className="bg-amber-50/50">
                    Estilo limitado a madera (paredes macizas)
                  </TableCell>
                  <TableCell className="bg-blue-50/50">
                    Libertad total en acabado y redistribución (fácil cambiar el interior)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseComparisonSection;
