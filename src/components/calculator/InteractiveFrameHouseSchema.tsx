
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
    title: "Paredes exteriores",
    description: "El sistema BOSQUE PLATFORM utiliza una estructura portante de madera con aislamiento mineral. La composición puede variar según el acabado, pero siempre se basa en materiales confiables y fácilmente disponibles.\n🔹 Estructura portante típica:\n• montantes de 45×120 mm con paso de 600 mm, (si se necesita mayor resistencia estructural, se utilizan secciones de 45×145 mm o 45×195 mm),\n• travesaños horizontales a 1,2–1,3 m (para rigidez y facilitar la instalación),\n• paneles OSB estructurales instalados por defecto en ambas caras del muro, lo que garantiza una rigidez espacial elevada,\n• barrera cortaviento transpirable (membrana),\n• cámara de ventilación y acabado exterior (madera, revoco, fachada ventilada, etc.).\n🧰 Características clave:\n• aislamiento mineral de 600 mm de ancho (instalado con ajuste a presión),\n• posibilidad de instalar una membrana inteligente por el interior en zonas frías o húmedas,\n• acabado interior sobre rastreles o directamente sobre OSB.\n🏠 Esta pared no solo protege del frío y del calor, sino que asegura la resistencia, rigidez y durabilidad de toda la vivienda.",
    image: "/lovable-uploads/665821f0-29b3-4a9b-87cb-4aedd75f3eff.png"
  },
  insulation: {
    title: "🪵 Suelo del edificio",
    description: "En el sistema BOSQUE PLATFORM el suelo se monta siempre como una estructura resistente, aislada y transpirable.\n🔹 Estructura típica:\n• Vigas de 45×195 mm con paso óptimo de 417 mm (calculado para una luz de 2,8 m, garantiza una flecha inferior a 1 mm),\n• Tablero OSB de 22 mm montado con adhesivo y clavos, para formar una capa monolítica estructural que distribuye cargas (diafragma rígido),\n• Aislamiento mineral entre las vigas,\n• Acabado interior según necesidad: madera, tarima, suelo técnico, etc.\n🔸 En caso de suelos aislados (con calefacción o en zonas frías):\n• Se utiliza aislamiento mineral de espesor adecuado,\n• Desde el lado interior se instala una membrana inteligente (como Pro Clima Intello Plus o Vario KM Duplex UV), que regula el paso del vapor según las condiciones del clima,\n• Si no se requiere aislamiento, se deja una cámara ventilada para la evacuación de humedad.\n🔸 Protección inferior:\n• Por debajo del OSB se instala una membrana hidro- y cortaviento, igual que en las paredes exteriores,\n• Esta protección es imprescindible en suelos elevados o sobre pilotes.\n🏡 Como resultado: el suelo es estructuralmente estable, cálido, transpirable y protegido frente a la humedad.",
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
        src="/lovable-uploads/d2d8ccd9-ed8c-46be-8d95-6330da758c49.png" 
        alt="Схема каркасного дома" 
        className="w-full h-auto rounded-lg shadow-lg scale-130"
      />
      
      {/* Кнопки для различных элементов конструкции */}
      
      {/* Крыша */}
      <Button
        size="sm"
        variant="default"
        className="absolute top-[10%] left-[40%] bg-red-500 hover:bg-red-600 text-white border-0"
        onClick={() => handleDetailClick('roof')}
      >
        <Info className="h-4 w-4 mr-1" />
        Cubierta
      </Button>

      {/* Каркас стены */}
      <Button
        size="sm"
        variant="default"
        className="absolute top-[40%] left-[10%] bg-amber-500 hover:bg-amber-600 text-white border-0"
        onClick={() => handleDetailClick('frame')}
      >
        <Info className="h-4 w-4 mr-1" />
        Paredes
      </Button>

      {/* Пол */}
      <Button
        size="sm"
        variant="default"
        className="absolute top-[60%] right-[25%] bg-green-500 hover:bg-green-600 text-white border-0"
        onClick={() => handleDetailClick('insulation')}
      >
        <Info className="h-4 w-4 mr-1" />
        Suelo
      </Button>

      {/* Фундамент */}
      <Button
        size="sm"
        variant="default"
        className="absolute bottom-[5%] left-[30%] bg-blue-500 hover:bg-blue-600 text-white border-0"
        onClick={() => handleDetailClick('foundation')}
      >
        <Info className="h-4 w-4 mr-1" />
        Cimentación
      </Button>

      {/* Диалог с подробной информацией */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>
              {selectedWallDetail?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedWallDetail && (
            <div className="overflow-y-auto flex-1 space-y-4">
              <div className="flex justify-center">
                <img 
                  src={selectedWallDetail.image} 
                  alt={selectedWallDetail.title}
                  className="max-h-[40vh] rounded-md border border-gray-200"
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
