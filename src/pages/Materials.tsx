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
        title: "Выберите размер",
        description: "Пожалуйста, выберите размер перед добавлением в корзину",
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
      title: "Добавлено в корзину",
      description: `${title} (${getSelectedSizeLabel()}) - ${quantity} шт.`,
    });
  };

  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];
  
  const DetailsButton = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="w-full mx-auto text-xs px-3 py-1 flex items-center justify-center gap-1 h-auto">
          <Info className="h-3 w-3" />
          <span>Подробнее</span>
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
        <div className="absolute top-4 left-4 bg-nature-dark text-white px-3 py-1 rounded-full text-sm">
          Новинка
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
                <SelectValue placeholder="Выберите размер" />
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
              <span className="text-sm text-gray-500 mr-2">Количество:</span>
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
          </div>
        )}
        
        {selectedSize && sizes.length > 0 && (
          <div className="bg-nature-light/20 p-3 rounded-md mb-4">
            <p className="font-medium text-nature-dark">
              Общая стоимость: €{calculateTotalCost().toFixed(2)}
              <span className="text-sm text-gray-600 ml-1">за {quantity} {unit === "м²" ? "м²" : "шт."}</span>
            </p>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-nature-dark">
            {sizes.length > 0 
              ? selectedSize 
                ? `€${getSelectedSizePrice().toFixed(2)} / ${unit}`
                : "Выберите размер" 
              : priceRange 
                ? priceRange 
                : `от €8`} 
            {unit && !sizes.length && `/ ${unit}`}
          </span>
          {sizes.length > 0 ? (
            <Button
              onClick={handleAddToCart}
              className="flex items-center gap-1 py-2 px-4 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
            >
              <ShoppingCart size={16} />
              <span>В корзину</span>
            </Button>
          ) : (
            <a 
              href="/contact"
              className="flex items-center gap-1 py-2 px-4 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
            >
              <Package size={16} />
              <span>Заказать</span>
            </a>
          )}
        </div>
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
      title: "Террасная доска",
      description: "Подходит для мощения террас, патио и зон вокруг бассейнов.\n\nПрозрачная пропитка на водной основе на основе льняного масла для защиты от гниения, насекомых и термитов.\n\nЦена указана за м². Выберите характеристики материала из доступных вариантов (цена зависит от качества) и добавьте его в корзину.\n\nДля расчета необходимого количества укажите размеры длины и ширины желаемой стены или потолка.",
      imageUrl: [
        "/lovable-uploads/6a6d8e61-066e-449d-b673-7c4c18678636.png"
      ],
      priceRange: "€24,50",
      unit: "м²",
      sizes: [
        { label: "4000 мм x 144 мм x 25 мм", value: "144mm", price: 24.5, width: 144, length: 4000 },
      ],
      isNew: true,
      category: "Отделочные материалы"
    },
    {
      id: "brushed-board",
      title: "Tabla cepillada. Grosor 19 mm",
      description: "Выберите характеристики материала из доступных вариантов и добавьте его в корзину. В корзине вы можете указать количество штук для каждого товара в вашем заказе.",
      imageUrl: [
        "/lovable-uploads/f43efb08-1cc6-45bf-b1c3-874197d6fd34.png"
      ],
      priceRange: "€8,50–€17,00",
      unit: "шт",
      sizes: [
        { label: "3900 мм x 96 мм x 19 мм", value: "96mm", price: 8.5, width: 96, length: 3900 },
        { label: "3900 мм x 116 мм x 19 мм", value: "116mm", price: 10.5, width: 116, length: 3900 },
        { label: "3900 мм x 146 мм x 19 мм", value: "146mm", price: 12.5, width: 146, length: 3900 },
        { label: "3900 мм x 196 мм x 19 мм", value: "196mm", price: 17, width: 196, length: 3900 },
      ],
      isNew: true,
      category: "Отделочные материалы"
    },
    {
      id: "planed-beam",
      title: "Viga cepillada de abeto del norte.",
      description: "Строганный брус из массива ели – универсальный строительный материал из экологически чистой древесины. Применяется для строительства деревянных домов, крыш, полов, стен, беседок, пергол. На балку, как и на обрешетку, можно монтировать: доску пола, OSB и любые другие материалы для отделки.\n\nЦена указана за единицу. Выберите ширину балки (95, 120, 140, 145, 160, 195 или 200 мм) и добавьте ее в корзину. В корзине вы можете указать количество единиц каждого товара в вашем заказе.",
      imageUrl: [
        "/lovable-uploads/5a3437b6-3793-456c-bee8-f82ecbdf1dde.png",
        "/lovable-uploads/dab0c018-25c3-4986-af1b-9bf4dc384633.png"
      ],
      priceRange: "€22,50–€110.00",
      unit: "шт",
      sizes: [
        { label: "6000 мм x 95 мм x 45 мм", value: "95x45", price: 22.5 },
        { label: "6000 мм x 120 мм x 45 мм", value: "120x45", price: 29 },
        { label: "6000 мм x 145 мм x 45 мм", value: "145x45", price: 34.5 },
        { label: "6000 мм x 195 мм x 45 мм", value: "195x45", price: 47 },
        { label: "6000 мм x 140 мм x 60 мм", value: "140x60", price: 47 },
        { label: "6000 мм x 160 мм x 60 мм", value: "160x60", price: 55 },
        { label: "6000 мм x 160 мм x 80 мм", value: "160x80", price: 70 },
        { label: "6000 мм x 200 мм x 80 мм", value: "200x80", price: 87 },
        { label: "6000 мм x 140 мм x 140 мм", value: "140x140", price: 110 },
      ],
      isNew: true,
      category: "Брус и доска"
    },
    {
      id: "beam-with-grooves",
      title: "Брус из северной ели с пазами и гребнями",
      description: "Откройте для себя универсальность и качество нашего строганного бруса с готовым соединением шип-паз.\n\nПри длине 6000 мм и ширине 200 мм этот экологически чистый строительный материал идеально подходит для различных проектов, от деревянных домов до беседок.\n\nВыберите количество в соответствии с вашими потребностями и добавьте его в корзину. \nВ случае затруднений мы можем помочь вам рассчитать необходимое количество.\n\nЭтот шпунтованный брус обладает исключительной универсальностью, позволяя создавать аутентичный вид бревенчатого сруба.\n\nДобавьте качество и экологичность в свой строительный проект с помощью нашего строганного шпунтованного бруса из северной ели.",
      imageUrl: "/lovable-uploads/ac34849d-7441-404a-b84d-d57fed166458.png",
      priceRange: "€70.00",
      unit: "шт",
      sizes: [
        { label: "6000 мм x 200 мм x 60 мм", value: "200x60", price: 70 },
      ],
      isNew: true,
      category: "Брус и доска"
    },
    {
      id: "glued-beam",
      title: "Клееный брус из северной ели. Сертифицирован по классу прочности GL24.",
      description: "Клееный брус – универсальный и долговечный строительный материал, с повышенными характеристиками прочности. Применяется для строительства деревянных домов, крыш, полов, стен, беседок, пергол. На клееный брус, как и на обрешетку, можно монтировать: доску пола, имитацию бревна.\n\nЦена указана за единицу. Выберите ширину и толщину балки (100 x 100, 60 x 120, 60 х 160, 80 x 160, 80 x 200, 120 x 120, 140 х 140) и добавьте ее в корзину. В корзине вы можете указать количество единиц каждого товара в вашем заказе.",
      imageUrl: "/lovable-uploads/2a0ac045-0ead-4028-ac0a-323154624adc.png",
      priceRange: "€49,50–€112.00",
      unit: "шт",
      sizes: [
        { label: "6000 мм x 100 мм x 100 мм", value: "100x100", price: 67 },
        { label: "6000 мм x 120 мм x 60 мм", value: "120x60", price: 49.5 },
        { label: "6000 мм x 160 мм x 60 мм", value: "160x60", price: 67 },
        { label: "6000 мм x 200 мм x 60 мм", value: "200x60", price: 84 },
        { label: "6000 мм x 160 мм x 80 мм", value: "160x80", price: 96.3 },
        { label: "6000 мм x 200 мм x 80 мм", value: "200x80", price: 112 },
        { label: "6000 мм x 120 мм x 120 мм", value: "120x120", price: 99.5 },
      ],
      isNew: true,
      category: "Брус и доска"
    },
    {
      id: "plywood-eucalyptus",
      title: "Фанера из эвкалипта/тополя",
      description: "Легкая плита с сердцевиной из европейского тополя и декоративными фасадами из плантационного эвкалипта, отличительной особенностью которой является ее эстетические качества и хорошая лрочность. Устойчивая сердцевина из тополя, высаженного с соблюдением принципов устойчивого развития, помимо исключительной легкости и простоты обработки, придает этим доскам отличную устойчивость и качество поверхности.\n\nЦена указана за один лист. В корзине вы можете указать количество листов для каждого товара в вашем заказе",
      imageUrl: "/lovable-uploads/103ea832-15f8-4db1-a9a3-e179a0796d34.png",
      priceRange: "€20.00–€80.00",
      unit: "шт",
      sizes: [
        { label: "2500 мм x 1220 мм x 3,6 мм", value: "3.6mm", price: 20 },
        { label: "2500 мм x 1220 мм x 5 мм", value: "5mm", price: 25 },
        { label: "2500 мм x 1220 мм x 9 мм", value: "9mm", price: 38 },
        { label: "2500 мм x 1220 мм x 12 мм", value: "12mm", price: 48 },
        { label: "2500 мм x 1220 мм x 15 мм", value: "15mm", price: 62 },
        { label: "2500 мм x 1220 мм x 18 мм", value: "18mm", price: 72 },
        { label: "2500 мм x 1220 мм x 22 мм", value: "22mm", price: 80 },
      ],
      isNew: true,
      category: "Фанера"
    },
    {
      id: "osb-3-panels",
      title: "Плиты OSB-3 сертифицированы PEFC",
      description: "Откройте для себя влагостойкие плиты OSB -3 PEFC в Bosque Nordico по СУПЕР ЦЕНЕ!\nЭти плиты идеально подходят для строительства и проживания в здоровом и экологичном стиле.\n\nКроме того, она позволяет использовать клеи, краски и лаки, с глянцевой поверхностью отличного качества.\n\nОна используется для стен, полов, кровельных конструкций снаружи и внутри помещений. Цена OSB зависит от толщины шпона (9, 12, 15, 18 или 22 мм).\n\nНепревзойденное соотношение цены и качества! Доступна на Канарских островах, размеры 2500 мм x 1250 мм, толщина 9 мм, 12 мм, 15 мм, 18 мм или 22 мм.\n\nВоспользуйтесь этим предложением и улучшите свои строительные проекты и внутреннюю/внешнюю облицовку.",
      imageUrl: "/lovable-uploads/3598cb51-5ce6-45ce-876c-836cdde70585.png",
      priceRange: "€19,50–€47,00",
      unit: "шт",
      sizes: [
        { label: "2500 мм x 1250 мм x 9 мм", value: "9mm", price: 19.5 },
        { label: "2500 мм x 1250 мм x 12 мм", value: "12mm", price: 24.5 },
        { label: "2500 мм x 1250 мм x 15 мм", value: "15mm", price: 33 },
        { label: "2500 мм x 1250 мм x 18 мм", value: "18mm", price: 41 },
        { label: "2500 мм x 1250 мм x 22 мм", value: "22mm", price: 47 },
      ],
      isNew: true,
      category: "Фанера"
    },
    {
      id: "vagonka",
      title: "Имитация бруса (вагонка)",
      description: "Идеальна.для облицовки стен и потолков, этот материал предлагает естественную и долговечную эстетику.\n\nИспользуется для облицовки стен и потолков.\n\nЦена указана за м². В корзине вы можете указать площадь каждого товара в вашем заказе.\n\nДля расчета необходимого количества укажите размеры длины и ширины желаемой стены или потолка.",
      imageUrl: "/lovable-uploads/76474101-721d-46a4-bdbf-74bd93975e88.png",
      priceRange: "€13,50–€17,00",
      unit: "м²",
      sizes: [
        { label: "4000 мм x 96 мм x 12,5 мм", value: "96mm", price: 13.5, width: 96, length: 4000 },
        { label: "4000 мм x 121 мм x 14 мм", value: "121mm", price: 17, width: 121, length: 4000 },
        { label: "4000 мм x 146 мм x 19 мм", value: "146mm", price: 20, width: 146, length: 4000 },
      ],
      isNew: true,
      category: "Отделочные материалы"
    },
    {
      id: "imitation-brus",
      title: "Имитация бревна с соединением шип-паз (блок-хаус)",
      description: "Имитация бревна с соединением шип-паз (блок-хаус) - материал для отделки в виде полубревна. Используется для отделки стен внутри помещений и для придания внешнего вида деревянному дому снаружи. Может монтироваться на обрешетку или непосредственно на доски.",
      imageUrl: "/lovable-uploads/7dbef968-1865-4d4c-87f9-e8329a8d5fb5.png",
      priceRange: "€20,00–€27,00",
      unit: "м²",
      sizes: [
        { label: "4000 мм x 116 мм x 19 мм", value: "19mm", price: 20, width: 116, length: 4000 },
        { label: "4000 мм x 116 мм x 24 мм", value: "24mm", price: 27, width: 116, length: 4000 },
      ],
      isNew: true,
      category: "Отделочные материалы",
      detailsButtonBottom: true
    },
    {
      id: "floor-board",
      title: "Доска пола",
      description: "Доска пола - деревянный отделочный материал. Используется для покрытия стен и полов. В отличие от имитации бревна и полубревна, имеет гладкую поверхность. Шпунтованная профильная доска может монтироваться на обрешетку, доску и на поверхность стены или перекрытия.",
      imageUrl: "/lovable-uploads/062610af-1b10-4ebd-b6f1-ba71ce2968e4.png",
      priceRange: "€28,50",
      unit: "м²",
      sizes: [
        { label: "4000 мм x 146 мм x 27 мм", value: "146mm", price: 28.5, width: 146, length: 4000 },
      ],
      isNew: true,
      category: "Отделочные материалы"
    },
    {
      id: "dry-planed-lumber",
      title: "Брусок сухой строганый с 3-х сторон",
      description: "Брусок сухой строганый с 3-х сторон - универсальный продукт из древесины (сосны). Используется как обрешетка для деревянных конструкций, деревянных трельяжей, основания пола. На обрешетку можно монтировать: имитацию бревна, половую доску, строганную доску.",
      imageUrl: "/lovable-uploads/48a131b5-ba2e-42fd-964d-61aaaf74803c.png",
      priceRange: "€3,50–€21,00",
      unit: "шт",
      sizes: [
        { label: "3900 мм x 70 мм x 70 мм", value: "70x70", price: 21 },
        { label: "3900 мм x 78 мм x 48 мм", value: "78x48", price: 11.8 },
        { label: "3900 мм x 48 мм x 48 мм", value: "48x48", price: 7.25 },
        { label: "3900 мм x 48 мм x 38 мм", value: "48x38", price: 5.75 },
        { label: "3900 мм x 48 мм x 23 мм", value: "48x23", price: 3.5 },
      ],
      isNew: true,
      category: "Брус и доска"
    }
  ];

  const categories = [
    "Все материалы", "Брус и доска", "Фанера", "Отделочные материалы"
  ];
  
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredMaterials = activeCategory === "Все материалы" 
    ? materials 
    : materials.filter(material => material.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Строительные материалы" 
        description="Широкий ассортимент высококачественных пиломатериалов для строительства и отделки: брус, фанера, доска, вагонка и многое другое"
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
            <h2 className="text-2xl font-bold text-wood-dark mb-4">Оптовым покупателям</h2>
            <p className="text-gray-700 mb-6">
              Для оптовых покупателей у нас действуют специальные цены на все виды пиломатериалов. 
              Мы обеспечиваем быструю доставку по всему острову Тенерифе и предлагаем 
              индивидуальные условия сотрудничества.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-wood text-white rounded-md hover:bg-wood-dark transition-colors"
            >
              Запросить оптовый прайс
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Materials;
