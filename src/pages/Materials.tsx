import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Package, ChevronDown, Plus, Minus, ShoppingCart, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";
import { useToast } from "@/hooks/use-toast";
import MaterialCardCarousel from "@/components/MaterialCardCarousel";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SizeOption {
  label: string;
  value: string;
  price: number;
  width?: number;
  length?: number;
}

interface MaterialCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string | string[];
  priceRange?: string;
  unit?: string;
  sizes?: SizeOption[];
  isNew?: boolean;
  category: string;
  detailsButtonBottom?: boolean;
}

const MaterialCard = ({ 
  id,
  title, 
  description, 
  imageUrl, 
  priceRange,
  unit = "м", 
  sizes = [],
  isNew = false,
  category,
  detailsButtonBottom = false
}: MaterialCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const getSelectedSizePrice = () => {
    const selectedSizeObj = sizes.find(size => size.value === selectedSize);
    return selectedSizeObj ? selectedSizeObj.price : 0;
  };

  const getSelectedSizeLabel = () => {
    const selectedSizeObj = sizes.find(size => size.value === selectedSize);
    return selectedSizeObj ? selectedSizeObj.label : "";
  };

  const calculateTotalCost = () => {
    return getSelectedSizePrice() * quantity;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Elija el tamaño",
        description: "Por favor, elija el tamaño antes de añadir al carrito",
        variant: "destructive"
      });
      return;
    }

    const firstImage = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;
    console.log("Adding to cart:", {
      id,
      title,
      size: getSelectedSizeLabel(),
      price: getSelectedSizePrice(),
      quantity,
      imageUrl: firstImage
    });

    addToCart({
      id,
      title,
      size: getSelectedSizeLabel(),
      price: getSelectedSizePrice(),
      quantity,
      imageUrl: firstImage
    });

    toast({
      title: "Añadido al carrito",
      description: `${title} (${getSelectedSizeLabel()}) - ${quantity} ud.`,
    });
  };

  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];
  
  const DetailsButton = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="w-full mx-auto text-xs px-3 py-1 flex items-center justify-center gap-1 h-auto">
          <Info className="h-3 w-3" />
          <span>Más detalles</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 max-h-60 overflow-y-auto">
        <div className="text-sm whitespace-pre-line">{description}</div>
      </PopoverContent>
    </Popover>
  );

  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
      <MaterialCardCarousel images={images} alt={title} />
      
      {isNew && (
        <div className="absolute top-4 left-4 bg-nature-dark text-white px-2 py-1 rounded-full text-xs z-10">
          Nuevo
        </div>
      )}
      
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-wood-darkest">{title}</h3>
        </div>
        
        {sizes.length > 0 && (
          <div className="mb-4">
            <Select value={selectedSize} onValueChange={handleSizeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Elija el tamaño" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size, index) => (
                  <SelectItem key={index} value={size.value}>
                    {size.label} - €{size.price.toFixed(2)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {sizes.length > 0 && (
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Cantidad:</span>
              <div className="flex items-center">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-r-none"
                  onClick={decrementQuantity}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="h-8 w-16 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-l-none"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex items-center gap-1 py-2 px-4 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
            >
              <ShoppingCart size={16} />
              <span>Al carrito</span>
            </Button>
          </div>
        )}
        
        {selectedSize && sizes.length > 0 && (
          <div className="bg-nature-light/20 p-3 rounded-md mb-4">
            <p className="font-medium text-nature-dark">
              Suma total: €{calculateTotalCost().toFixed(2)}
              <span className="text-sm text-gray-600 ml-1">por {quantity} {unit === "м²" ? "м²" : "ud."}</span>
            </p>
          </div>
        )}
        
        {!sizes.length && (
          <div className="flex justify-between items-center">
            <span className="font-bold text-nature-dark">
              {priceRange ? priceRange : `от €8`} 
              {unit && `/ ${unit}`}
            </span>
            <a 
              href="/contact"
              className="flex items-center gap-1 py-2 px-4 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
            >
              <Package size={16} />
              <span>Pedir</span>
            </a>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <DetailsButton />
      </CardFooter>
    </Card>
  );
};

const Materials = () => {
  const materials = [
    {
      id: "terrace-deck",
      title: "Tabla para terraza. Tratada anticorcoma y antihumedad.",
      description: "Ideal para pavimentar terrazas, patios y zonas alrededor de piscinas.\n\nImpregnación transparente a base de agua con aceite de linaza para protección contra putrefacción, insectos y termitas.\n\nPrecio indicado por m². Seleccione las características del material de las opciones disponibles (el precio depende de la calidad) y añádalo al carrito.\n\nPara calcular la cantidad necesaria, indique las dimensiones de largo y ancho de la pared o techo deseado.",
      imageUrl: [
        "/lovable-uploads/6a6d8e61-066e-449d-b673-7c4c18678636.png"
      ],
      priceRange: "€29,50",
      unit: "м²",
      sizes: [
        { label: "4000 mm x 144 mm x 25 mm", value: "144x25", price: 29.50 },
      ],
      isNew: false,
      category: "Materiales de acabado"
    },
    {
      id: "brushed-board",
      title: "Tabla cepillada. Grosor 19 mm",
      description: "Seleccione las características del material de las opciones disponibles y añádalo al carrito. En el carrito puede indicar la cantidad de unidades de cada producto en su pedido.",
      imageUrl: [
        "/lovable-uploads/f43efb08-1cc6-45bf-b1c3-874197d6fd34.png"
      ],
      priceRange: "€8,50–€17,00",
      unit: "ud.",
      sizes: [
        { label: "3900 мм x 96 мм x 19 мм", value: "96mm", price: 8.5, width: 96, length: 3900 },
        { label: "3900 мм x 116 мм x 19 мм", value: "116mm", price: 10.5, width: 116, length: 3900 },
        { label: "3900 мм x 146 мм x 19 мм", value: "146mm", price: 12.5, width: 146, length: 3900 },
        { label: "3900 мм x 196 мм x 19 мм", value: "196mm", price: 17, width: 196, length: 3900 },
      ],
      isNew: false,
      category: "Materiales de acabado"
    },
    {
      id: "planed-beam",
      title: "Viga cepillada de abeto del norte",
      description: "Viga cepillada de abeto macizo: material de construcción universal de madera ecológica. Se utiliza para la construcción de casas de madera, techos, suelos, paredes, cenadores y pérgolas. Sobre la viga, así como sobre el entablado, se pueden montar: tabla de suelo, OSB y cualquier otro material de acabado.\n\nPrecio indicado por unidad. Seleccione el ancho de la viga (95, 120, 140, 145, 160, 195 o 200 mm) y añádala al carrito. En el carrito puede indicar la cantidad de unidades de cada producto en su pedido.",
      imageUrl: [
        "/lovable-uploads/5a3437b6-3793-456c-bee8-f82ecbdf1dde.png",
        "/lovable-uploads/dab0c018-25c3-4986-af1b-9bf4dc384633.png"
      ],
      priceRange: "€22,50–€110.00",
      unit: "ud.",
      sizes: [
        { label: "6000 мм x 95 мм x 45 мм", value: "95x45", price: 23 },
        { label: "6000 мм x 120 мм x 45 мм", value: "120x45", price: 29 },
        { label: "6000 мм x 145 мм x 45 мм", value: "145x45", price: 35.5 },
        { label: "6000 мм x 195 мм x 45 мм", value: "195x45", price: 47 },
        { label: "6000 мм x 140 мм x 60 мм", value: "140x60", price: 47 },
        { label: "6000 мм x 160 мм x 60 мм", value: "160x60", price: 55 },
        { label: "6000 мм x 160 мм x 80 мм", value: "160x80", price: 70 },
        { label: "6000 мм x 200 мм x 80 мм", value: "200x80", price: 87 },
        { label: "6000 мм x 140 мм x 140 мм", value: "140x140", price: 130 },
      ],
      isNew: false,
      category: "Vigas y tablas"
    },
    {
      id: "beam-with-grooves",
      title: "Viga cepillada machihembrada de abeto nordico",
      description: "Descubra la versatilidad y calidad de nuestra viga cepillada con unión machihembrada lista.\n\nCon una longitud de 6000 mm y un ancho de 200 mm, este material de construcción ecológico es ideal para diversos proyectos, desde casas de madera hasta cenadores.\n\nSeleccione la cantidad según sus necesidades y añádala al carrito.\nEn caso de dificultades, podemos ayudarle a calcular la cantidad necesaria.\n\nEsta viga machihembrada posee una versatilidad excepcional, permitiendo crear una apariencia auténtica de construcción de troncos.\n\nAñada calidad y ecología a su proyecto de construcción con nuestra viga cepillada machihembrada de abeto nórdico.",
      imageUrl: "/lovable-uploads/ac34849d-7441-404a-b84d-d57fed166458.png",
      priceRange: "€70.00",
      unit: "ud.",
      sizes: [
        { label: "6000 мм x 200 мм x 60 мм", value: "200x60", price: 70 },
      ],
      isNew: false,
      category: "Vigas y tablas"
    },
    {
      id: "glued-beam",
      title: "Viga laminada de abeto del norte",
      description: "Viga laminada: material de construcción universal y duradero con características de resistencia mejoradas. Se utiliza para la construcción de casas de madera, techos, suelos, paredes, cenadores y pérgolas. Sobre la viga laminada, así como sobre el entablado, se pueden montar: tabla de suelo, imitación de tronco.\n\nPrecio indicado por unidad. Seleccione el ancho y grosor de la viga (100 x 100, 60 x 120, 60 x 160, 80 x 160, 80 x 200, 120 x 120, 140 x 140) y añádala al carrito. En el carrito puede indicar la cantidad de unidades de cada producto en su pedido.",
      imageUrl: "/lovable-uploads/d4f5ff73-1cce-42ce-98ba-8b0a069b291f.png",
      priceRange: "€49,50–€112.00",
      unit: "ud.",
      sizes: [
        { label: "6000 мм x 100 мм x 100 мм", value: "100x100", price: 71.50 },
        { label: "6000 мм x 120 мм x 60 мм", value: "120x60", price: 53 },
        { label: "6000 мм x 160 мм x 60 мм", value: "160x60", price: 71 },
        { label: "6000 мм x 200 мм x 60 мм", value: "200x60", price: 84 },
        { label: "6000 мм x 160 мм x 80 мм", value: "160x80", price: 91 },
        { label: "6000 мм x 200 мм x 80 мм", value: "200x80", price: 118 },
        { label: "6000 мм x 120 мм x 120 мм", value: "120x120", price: 99.50 },
        { label: "6000 мм x 140 мм x 140 мм", value: "140x140_glued", price: 138 },
      ],
      isNew: false,
      category: "Vigas y tablas"
    },
    {
      id: "plywood-eucalyptus",
      title: "Contrachapado Eucalipto / Chopo",
      description: "Panel ligero con núcleo de chopo europeo y caras decorativas de eucalipto de plantación, cuya característica distintiva son sus cualidades estéticas y buena resistencia. El núcleo estable de chopo, plantado siguiendo principios de desarrollo sostenible, además de una ligereza excepcional y facilidad de procesamiento, proporciona a estos paneles una excelente estabilidad y calidad superficial.\n\nPrecio indicado por hoja. En el carrito puede indicar la cantidad de hojas de cada producto en su pedido",
      imageUrl: "/lovable-uploads/704021dd-eb0c-408e-ab56-cf8054d4f60b.png",
      priceRange: "€20.00–€80.00",
      unit: "ud.",
      sizes: [
        { label: "2500 мм x 1220 мм x 3,6 мм", value: "3.6mm", price: 20 },
        { label: "2500 мм x 1220 мм x 5 мм", value: "5mm", price: 25 },
        { label: "2500 мм x 1220 мм x 9 мм", value: "9mm", price: 38 },
        { label: "2500 мм x 1220 мм x 12 мм", value: "12mm", price: 48 },
        { label: "2500 мм x 1220 мм x 15 мм", value: "15mm", price: 62 },
        { label: "2500 мм x 1220 мм x 18 мм", value: "18mm", price: 72 },
        { label: "2500 мм x 1220 мм x 22 мм", value: "22mm", price: 80 },
      ],
      isNew: false,
      category: "Contrachapado"
    },
    {
      id: "osb-3-panels",
      title: "Planchas OSB -3 PEFC certificadas",
      description: "¡Descubra los paneles OSB-3 PEFC resistentes a la humedad en Bosque Nordico a SÚPER PRECIO!\nEstos paneles son ideales para la construcción y para vivir con un estilo saludable y ecológico.\n\nAdemás, permite el uso de adhesivos, pinturas y barnices, con una superficie brillante de excelente calidad.\n\nSe utiliza para paredes, suelos, estructuras de techos en exteriores e interiores. El precio del OSB depende del grosor del panel (9, 12, 15, 18 o 22 mm).\n\n¡Relación calidad-precio inigualable! Disponible en las Islas Canarias, dimensiones 2500 mm x 1250 mm, grosor 9 mm, 12 mm, 15 mm, 18 mm o 22 mm.\n\nAproveche esta oferta y mejore sus proyectos de construcción y revestimiento interior/exterior.",
      imageUrl: "/lovable-uploads/ef1e32d7-1ae0-4762-b7aa-55a6d7f44584.png",
      priceRange: "€19,50–€47,00",
      unit: "ud.",
      sizes: [
        { label: "2500 мм x 1250 мм x 9 мм", value: "9mm", price: 19.5 },
        { label: "2500 мм x 1250 мм x 12 мм", value: "12mm", price: 25.5 },
        { label: "2500 мм x 1250 мм x 15 мм", value: "15mm", price: 33 },
        { label: "2500 мм x 1250 мм x 18 мм", value: "18mm", price: 41 },
        { label: "2500 мм x 1250 мм x 22 мм", value: "22mm", price: 47 },
      ],
      isNew: false,
      category: "Contrachapado"
    },
    {
      id: "vagonka",
      title: "Machihembrado grosor (12.5 mm, 14 mm, 19 mm)",
      description: "Ideal para revestimiento de paredes y techos, este material ofrece una estética natural y duradera.\n\nSe utiliza para revestimiento de paredes y techos.\n\nPrecio indicado por m². En el carrito puede indicar la superficie de cada producto en su pedido.\n\nPara calcular la cantidad necesaria, indique las dimensiones de largo y ancho de la pared o techo deseado.",
      imageUrl: "/lovable-uploads/c2a9e56d-15d9-4081-a1a3-be82154650d9.png",
      priceRange: "€13,50–€17,00",
      unit: "м²",
      sizes: [
        { label: "4000 мм x 96 мм x 12,5 мм", value: "96mm", price: 13.5, width: 96, length: 4000 },
        { label: "4000 мм x 121 мм x 14 мм", value: "121mm", price: 17, width: 121, length: 4000 },
        { label: "4000 мм x 146 мм x 19 мм", value: "146mm", price: 20, width: 146, length: 4000 },
      ],
      isNew: false,
      category: "Materiales de acabado"
    },
    {
      id: "imitation-brus",
      title: "Machihembrado media tronco grosor 19 mm o 24 mm",
      description: "Imitación de tronco con unión machihembrada (block-house): material de acabado en forma de media caña. Se utiliza para revestimiento de paredes interiores y para dar apariencia de casa de madera en el exterior. Puede montarse sobre entablado o directamente sobre tablas.",
      imageUrl: "/lovable-uploads/da1621c6-6731-4c3c-9787-7502256e4aea.png",
      priceRange: "€20,00–€27,00",
      unit: "м²",
      sizes: [
        { label: "4000 мм x 116 мм x 19 мм", value: "19mm", price: 20, width: 116, length: 4000 },
        { label: "4000 мм x 116 мм x 24 мм", value: "24mm", price: 27, width: 116, length: 4000 },
      ],
      isNew: false,
      category: "Materiales de acabado",
      detailsButtonBottom: true
    },
    {
      id: "floor-board",
      title: "Suelo/Tarima del piso",
      description: "Tabla de suelo: material de acabado de madera. Se utiliza para revestimiento de paredes y suelos. A diferencia de la imitación de tronco, tiene una superficie lisa. La tabla perfilada machihembrada puede montarse sobre entablado, tablas y directamente sobre la superficie de pared o forjado.",
      imageUrl: "/lovable-uploads/ae35f8fc-9500-4744-97f7-0217d03b8938.png",
      priceRange: "€28,50",
      unit: "м²",
      sizes: [
        { label: "4000 мм x 146 мм x 27 мм", value: "146mm", price: 29.50, width: 146, length: 4000 },
      ],
      isNew: false,
      category: "Materiales de acabado"
    },
    {
      id: "dry-planed-lumber",
      title: "Listón cepillado",
      description: "Listón seco cepillado por 3 caras: producto universal de madera de pino. Se utiliza como entablado para estructuras de madera, enrejados de madera, base de suelo. Sobre el entablado se pueden montar: imitación de tronco, tabla de suelo, tabla cepillada.",
      imageUrl: "/lovable-uploads/bf7d1fc2-c414-4ca1-a6ca-436172c2104b.png",
      priceRange: "€3,50–€21,00",
      unit: "ud.",
      sizes: [
        { label: "3900 мм x 70 мм x 70 мм", value: "70x70", price: 21 },
        { label: "3900 мм x 78 мм x 48 мм", value: "78x48", price: 11.8 },
        { label: "3900 мм x 48 мм x 48 мм", value: "48x48", price: 7.25 },
        { label: "3900 мм x 48 мм x 38 мм", value: "48x38", price: 5.75 },
        { label: "3900 мм x 48 мм x 23 мм", value: "48x23", price: 3.5 },
      ],
      isNew: false,
      category: "Vigas y tablas"
    }
  ];

  const categories = [
    "Todos los materiales", "Vigas y tablas", "Contrachapado", "Materiales de acabado"
  ];
  
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredMaterials = activeCategory === "Todos los materiales" 
    ? materials 
    : materials.filter(material => material.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Materiales de construcción" 
        description="Amplia gama de maderas de alta calidad para construcción y acabados: vigas, contrachapado, tablas, machihembrado y mucho más"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      <TooltipProvider>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    category === activeCategory
                      ? "bg-wood text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-wood-light"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material, index) => (
                <MaterialCard key={index} {...material} />
              ))}
            </div>
          </div>
        </section>
      </TooltipProvider>

      <section className="py-10 bg-nature-light/30">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-wood-dark mb-4">🪵 Compradores al por mayor</h2>
            <p className="text-gray-700 mb-6">
              Para compras al por mayor ofrecemos descuentos especiales en todos los tipos de madera aserrada:
              <br /><br />
              De 1.000 € a 2.999 € → <strong>5 %</strong>
              <br />
              De 3.000 € a 6.999 € → <strong>8 %</strong>
              <br />
              De 7.000 € a 14.999 € → <strong>12 %</strong>
              <br />
              A partir de 15.000 € → <strong>18 %</strong>
              <br /><br />
              📌 El descuento se aplica sobre el valor del material, no incluye transporte ni servicios adicionales.
              <br /><br />
              Para pedidos mayores ofrecemos un enfoque individual y condiciones especiales de cooperación.
              <br /><br />
              🚚 Garantizamos entrega rápida en toda la isla de Tenerife.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
            >
              Solicitar precio al por mayor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Materials;
