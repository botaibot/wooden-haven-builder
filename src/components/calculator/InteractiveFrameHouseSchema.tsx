
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
    title: "Фундамент",
    description: "Регулируемые металлические опоры обеспечивают надежную основу дома. Они позволяют компенсировать неровности участка и обеспечивают вентиляцию подпольного пространства.",
    image: "/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png"
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
              <p className="text-gray-700 leading-relaxed">
                {selectedWallDetail.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveFrameHouseSchema;
