import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Sofa, Table, Bed, Lamp, BookOpen } from "lucide-react";
import MaterialCardCarousel from "@/components/MaterialCardCarousel";

interface FurnitureItem {
  id: string;
  title: string;
  description: string;
  dimensions?: string;
  customizable?: boolean;
  price: number;
  priceWithAddons?: number;
  priceAddonDescription?: string;
  priceWithMaterial?: number;
  priceWithMaterialDescription?: string;
  images: string[];
  icon: React.ElementType;
}

const FurnitureCard = ({ item }: { item: FurnitureItem }) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm border border-gray-200">
      <MaterialCardCarousel images={item.images} alt={item.title} />
      
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-wood/20 p-2 rounded-full">
            <item.icon className="text-wood-dark" size={22} />
          </div>
          <h3 className="text-xl font-semibold text-wood-darkest">{item.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
        
        {item.dimensions && (
          <p className="text-sm font-medium text-wood-dark mb-2">
            Dimensiones: {item.dimensions}
          </p>
        )}
        
        {item.customizable && (
          <p className="text-sm text-nature-dark mb-4">
            Fabricación según medidas individuales
          </p>
        )}
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="font-bold text-nature-dark">
              desde €{item.price}
            </span>
            {item.priceWithAddons && (
              <span className="text-sm text-gray-600">
                {item.priceAddonDescription}: €{item.priceWithAddons}
              </span>
            )}
            {item.priceWithMaterial && (
              <span className="text-sm text-gray-600">
                {item.priceWithMaterialDescription}: €{item.priceWithMaterial}
              </span>
            )}
          </div>
          <a 
            href="/contact"
            className="flex items-center gap-1 py-2 px-4 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
          >
            <ShoppingCart size={16} />
            <span>Pedir</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const Furniture = () => {
  const furnitureItems: FurnitureItem[] = [
    {
      id: "cabinet",
      title: "Mueble de aliso natural estilo rústico",
      description: "Añade calidez y carácter a tu interior con nuestro mueble artesanal hecho a mano. Fabricado con aliso seleccionado en nuestra propia producción, este modelo combina la belleza natural de la madera y el estilo rústico inconfundible.",
      dimensions: "80 cm × 50 cm × 80 cm (largo × fondo × alto)",
      customizable: true,
      price: 300,
      priceWithAddons: 500,
      priceAddonDescription: "con lavabo y grifo",
      images: [
        "/lovable-uploads/4f0c9eee-e1c5-4e86-a958-5bb2693498d6.png",
        "/lovable-uploads/2daf04c1-edd2-4ac4-9062-092369a0ad24.png"
      ],
      icon: BookOpen
    },
    {
      id: "benches",
      title: "Bancos y banquetas de aliso — el calor de la naturaleza en cada detalle",
      description: "La comodidad comienza con cosas simples. Nuestros bancos y banquetas, hechos de aliso natural, serán no solo un elemento práctico del interior, sino también un verdadero acento de su espacio. Los producimos en nuestro propio taller, seleccionando manualmente cada tabla. Texturas vivas, madera maciza, calidez de la madera y el estilo rústico característico hacen que cada producto sea único.",
      dimensions: "100 cm × 45 cm × 45 cm (largo × ancho × alto)",
      customizable: true,
      price: 250,
      images: [
        "/lovable-uploads/1a1c1bea-9995-4063-9cf1-01d0020e4080.png",
        "/lovable-uploads/8374f16f-8443-481c-9f0a-d6363a8a516b.png"
      ],
      icon: Lamp
    },
    {
      id: "outdoor-chairs",
      title: "Sillas de madera de aliso — para tranquilidad, aire fresco y comodidad",
      description: "Sumérgete en la atmósfera de descanso con nuestras cómodas sillas de aliso natural, creadas especialmente para exteriores. Este es un mueble que se siente excelente al aire libre, ya sea en una terraza, jardín o zona junto al fuego. Hemos pensado cuidadosamente en la ergonomía: respaldo cómodo, apoyabrazos amplios y construcción estable hacen de esta silla ideal para largas tardes cálidas en la naturaleza.",
      price: 400,
      images: [
        "/lovable-uploads/8f722547-79d9-419c-9a42-dc313ffce0f3.png",
        "/lovable-uploads/4177ab5d-74aa-4366-acb1-3cf7438eee90.png"
      ],
      icon: Sofa
    },
    {
      id: "coffee-table",
      title: "Mesa de centro de viga de pino 140×140 — acento masivo en el interior",
      description: "Brutalidad y estética natural en un solo objeto. Esta mesa de centro está fabricada con vigas macizas de pino de 140×140 mm y se convertirá en el verdadero centro de atracción de su salón. Vigas gruesas con textura natural, grietas, nudos y líneas vivas enfatizan la naturalidad y el carácter del material. Base estable de metal añade modernidad y hace la construcción confiable.",
      dimensions: "100 cm × 100 cm (largo × ancho)",
      customizable: true,
      price: 250,
      images: [
        "/lovable-uploads/209d2102-60c6-4f67-a067-cb9196f00ae6.png"
      ],
      icon: Table
    },
    {
      id: "dining-tables",
      title: "Mesas de aliso y roble — madera que inspira",
      description: "Creamos mesas que se convierten en el centro del espacio, ya sea zona de comedor, despacho o sala de reuniones. En la base: aliso natural y roble, fuertes, cálidos, con textura pronunciada y carácter. Cada producto es resultado de trabajo manual y respeto al material. No ocultamos la madera, la destacamos. Bordes vivos, nudos, textura y color natural hacen cada mesa única.",
      dimensions: "160 cm × 70 cm (largo × ancho)",
      customizable: true,
      price: 400,
      priceWithMaterial: 600,
      priceWithMaterialDescription: "de roble",
      images: [
        "/lovable-uploads/ba2e57fb-1851-4295-8d27-0a8d2810b79a.png",
        "/lovable-uploads/66c08602-1489-4196-8d1d-7038ddc7c2ed.png"
      ],
      icon: Table
    },
    {
      id: "aspen-oak-furniture",
      title: "Muebles de álamo temblón y roble — ligereza, resistencia y estética natural",
      description: "Fabricamos muebles de álamo temblón natural y roble, especies que se combinan perfectamente tanto en color como en características.\n\nÁlamo temblón: claro, uniforme, ligero.\nRoble: resistente, expresivo, con hermosa textura.\n\nEste es un tándem excelente para crear muebles con carácter: cálidos, confiables y elegantes.",
      customizable: true,
      price: 350,
      priceWithMaterial: 450,
      priceWithMaterialDescription: "de roble",
      images: [
        "/lovable-uploads/c9eb8364-afe9-4216-9d3d-db95f9b4902d.png"
      ],
      icon: Table
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Muebles de madera natural" 
        description="Producimos muebles de calidad de madera maciza que complementarán perfectamente el interior de su hogar"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-dark">Nuestros productos</h2>
            <p className="text-lg text-gray-700">
              Producimos muebles de calidad de madera maciza que complementarán perfectamente el interior de su hogar. 
              Cada producto está creado a mano por nuestros maestros con atención a los detalles y la calidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureItems.map((item, index) => (
              <FurnitureCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Furniture;
