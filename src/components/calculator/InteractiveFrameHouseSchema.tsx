
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface WallDetail {
  title: string;
  description: string;
  image: string;
}

const wallDetails: { [key: string]: WallDetail } = {
  foundation: {
    title: "Регулируемая металлическая опора",
    description: "Толщина металла 6 мм. Регулируемые металлические опоры — базовый и самый экономичный вариант. Позволяет быстро установить дом на подготовленной площадке и при необходимости регулировать высоту. Для маленьких домов до 30м² выкапывается земля под металлические опоры размером 50×50×50 см, делается подсыпка щебня и песка, укладывается бетонный блок, к которому прикручиваются опоры. Входит в базовую комплектацию. Стоимость одной опоры: 60 € + 40 € (работа, материалы). Примерный расход: 7 опор на каждые 10 м² площади пола.",
    image: "/lovable-uploads/85729617-ae77-4f48-831a-aca0d62cf8c1.png"
  },
  frame: {
    title: "Каркас стены",
    description: "Деревянный каркас из досок 50x150мм или 50x195мм образует основу стены. Стойки устанавливаются с шагом 600мм для обеспечения прочности конструкции.",
    image: "/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png"
  },
  insulation: {
    title: "Утеплитель",
    description: "Минеральная вата заполняет пространство между стойками каркаса. Толщина утеплителя соответствует толщине каркаса (120мм или 195мм).",
    image: "/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png"
  },
  vapor: {
    title: "Пароизоляция",
    description: "Умная пароизоляция защищает утеплитель от влаги изнутри дома, при этом позволяя конструкции 'дышать' при необходимости.",
    image: "/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png"
  },
  membrane: {
    title: "Ветрозащитная мембрана",
    description: "Диффузионная мембрана защищает от ветра и влаги снаружи, но пропускает пар изнутри конструкции наружу.",
    image: "/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png"
  },
  facade: {
    title: "Фасадная отделка",
    description: "Вентилируемый фасад с воздушным зазором 30-48мм обеспечивает долговечность отделки и дополнительную защиту стены.",
    image: "/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png"
  },
  roof: {
    title: "🏠 Cubierta",
    description: "En las casas de entramado ligero BOSQUE se utiliza una cubierta a un agua o a dos aguas con una composición constructiva eficiente, adaptada al clima de las Islas Canarias.\n\nSistema tipo:\n• Vigas de 60×140 mm (si es necesario, 60×160 mm), con paso de 500 mm.\n• Revestimiento interior con machihembrado de 19 mm (techo visible).\n• Sobre él — membrana inteligente de control de vapor (por ejemplo, INTELLO Plus).\n• Luego — tablas de 45×95 mm colocadas de canto, alineadas con las vigas.\n• Aislante mineral de 80–90 mm de espesor, instalado entre las tablas.\n• Contralistones de 48×48 mm, que aseguran una cámara de ventilación.\n• OSB de 18 mm, instalado a rompejuntas, con juntas de dilatación de 3–4 mm.\n• Sobre el OSB — membrana impermeable y transpirable WÜTOP 2SK.\n• Acabado final — teja asfáltica Tegola Americana u otra similar.\n\n🔸 Todos los elementos están seleccionados para ofrecer aislamiento térmico y respirabilidad en un clima soleado y húmedo.",
    image: "/lovable-uploads/675ff4d5-ce2d-4aba-ae5f-fa43015f51a1.png"
  }
};

const InteractiveFrameHouseSchema = () => {
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDetailClick = (detailKey: string) => {
    setSelectedDetail(detailKey);
    setIsDialogOpen(true);
  };

  const selectedWallDetail = selectedDetail ? wallDetails[selectedDetail] : null;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img 
        src="/lovable-uploads/91ae336b-7848-48df-b3c7-bdaf65b1669d.png" 
        alt="Схема каркасного дома" 
        className="w-full h-auto rounded-lg shadow-lg"
      />
      
      {/* Кнопки для различных элементов конструкции */}
      
      {/* Фундамент */}
      <Button
        size="sm"
        variant="secondary"
        className="absolute bottom-[5%] left-[25%] bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => handleDetailClick('foundation')}
      >
        <Info className="h-4 w-4 mr-1" />
        Фундамент
      </Button>

      {/* Каркас стены */}
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-[40%] left-[15%] bg-amber-500 hover:bg-amber-600 text-white"
        onClick={() => handleDetailClick('frame')}
      >
        <Info className="h-4 w-4 mr-1" />
        Каркас
      </Button>

      {/* Утеплитель */}
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-[50%] left-[25%] bg-green-500 hover:bg-green-600 text-white"
        onClick={() => handleDetailClick('insulation')}
      >
        <Info className="h-4 w-4 mr-1" />
        Утеплитель
      </Button>

      {/* Пароизоляция */}
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-[35%] right-[30%] bg-purple-500 hover:bg-purple-600 text-white"
        onClick={() => handleDetailClick('vapor')}
      >
        <Info className="h-4 w-4 mr-1" />
        Пароизоляция
      </Button>

      {/* Мембрана */}
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-[60%] left-[5%] bg-cyan-500 hover:bg-cyan-600 text-white"
        onClick={() => handleDetailClick('membrane')}
      >
        <Info className="h-4 w-4 mr-1" />
        Мембрана
      </Button>

      {/* Фасад */}
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-[70%] right-[15%] bg-orange-500 hover:bg-orange-600 text-white"
        onClick={() => handleDetailClick('facade')}
      >
        <Info className="h-4 w-4 mr-1" />
        Фасад
      </Button>

      {/* Крыша */}
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-[15%] left-[45%] bg-red-500 hover:bg-red-600 text-white"
        onClick={() => handleDetailClick('roof')}
      >
        <Info className="h-4 w-4 mr-1" />
        Крыша
      </Button>

      {/* Диалог с подробной информацией */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {selectedWallDetail?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedWallDetail && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <img 
                  src={selectedWallDetail.image} 
                  alt={selectedWallDetail.title}
                  className="max-h-[60vh] rounded-md border border-gray-200"
                />
              </div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedWallDetail.description}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveFrameHouseSchema;
