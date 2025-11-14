import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ImageViewer from "@/components/ImageViewer";
import HoverInteractiveSchema from "@/components/HoverInteractiveSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BosquePlatform = () => {
  const [isModelModalOpen, setIsModelModalOpen] = useState(false);
  const [expandedModels, setExpandedModels] = useState<{[key: string]: boolean}>({});
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});
  const [imageViewer, setImageViewer] = useState({
    isOpen: false,
    images: [] as string[],
    currentIndex: 0,
    alt: ""
  });

  const architecturalLines = [
    {
      name: "Techo Simple",
      description: "minimalismo, geometría clara, tejado a una agua (35–90 m²)",
      sizes: "35–90 m²",
      quote: "",
      image: "/lovable-uploads/35499c13-25ef-4b1d-90dc-9f754301fe36.png",
      models: [
        {
          size: "35 м²",
          images: [
            "/lovable-uploads/58d93ef7-c4b1-4962-93ea-beb999296e61.png",
            "/lovable-uploads/0f4a7d96-b590-49b2-9622-78768f76403a.png"
          ],
          description: `🏠 Techo Simple 35,58 m² (útil 29 m2)
💶 Precio cerrado:
🏗 ESTANDART: 789 €/m² → 28.100 €
🌅 Terraza cubierta de 21 m² bajo voladizo — incluida en el precio

🌿 Compacta, luminosa, sin excesos
Este modelo de 35,58 m² es perfecto para empezar. Una casa pequeña, pero con lo esencial: espacio para vivir, para descansar, para respirar. La cubierta a un agua y la fachada en machihembrado vertical le dan una estética limpia, sobria y natural.
Todo está donde debe estar — sin complicaciones, sin adornos.

🏡 Distribución abierta, interior flexible
El corazón del proyecto es un espacio abierto con cocina, comedor y sala integrados. La habitación está separada visualmente, pero sin puerta: la privacidad se sugiere, no se impone. El baño es completo, con ventana y luz natural.
📐 Ideal para vivir simple, sin renunciar al confort.

📦 Versiones disponibles
🏗 ESTANDART 
✔️ Estructura BOSQUE PLATFORM con cerramiento OSB 9 mm exterior e interior 
✔️ Aislamiento completo 
✔️ Suelo técnico OSB 22 mm 
✔️ Instalación de carpinterías exteriores (puertas y ventanas) suministradas por el cliente, con sellado y junta de expansión incluidos
✔️ Tabiquería interior con yeso y pintura blanca final 
✔️ Fachada exterior en machihembrado 19 mm 
✔️ Instalaciones preinstaladas (sin conexión)
📌 Otros acabados bajo pedido (revoco, frisos, madera interior, etc.).

⚠️ Notas:
Las puertas y ventanas no están incluidas en el precio, pero se instalan si son suministradas por el cliente.
La cimentación se cotiza por separado según terreno.
La conexión final de luz y agua debe realizarse por técnicos autorizados. Nosotros dejamos las preinstalaciones listas.

✅ Ideal para:
vivienda de inicio o retiro
escapadas rurales o turismo slow
vivir con lo justo, pero bien hecho
🧭 Una casa pequeña, honesta y clara. Empieza mucho con muy poco.`
        },
        {
          size: "52 м²",
          images: [
            "/lovable-uploads/24f984b3-7c67-4428-936e-9c1c396aa1c0.png",
            "/lovable-uploads/95e1f66c-209e-491f-a0c3-c57458b48878.png"
          ],
          description: `🏠 Techo Simple 51,89 m² (útil 41 m2)
💶 Precio cerrado:
🏗 ESTANDART: 719 €/m² → 37.315 €
🌅 Terraza abierta de 25 m² incluida en el precio – integrada en la estructura, sin coste adicional.

🌿 Geometría limpia, claridad natural, estructura honesta
Este modelo de 51,89 m² ofrece una síntesis equilibrada de forma y función: volumen compacto, líneas puras, terraza protegida bajo el voladizo. Pensada para quien busca lo esencial con una presencia arquitectónica clara.
Una vivienda sencilla, bien diseñada y adaptada al clima de las Islas Canarias.

🏡 Distribución abierta, con carácter
El interior propone un espacio principal con cocina lineal, comedor y sala integrados. Dos dormitorios simétricos ofrecen descanso y orden. El baño cuenta con ventana y luz natural. La entrada conecta directamente con la terraza cubierta de 2,5 m de profundidad: protegida pero abierta al entorno.
📐 Ideal para vivir con claridad, sin renunciar al diseño.

📦 Versiones disponibles
🏗 ESTANDART 
✔️ Estructura BOSQUE PLATFORM con cerramiento OSB 9 mm exterior e interior 
✔️ Aislamiento completo 
✔️ Suelo técnico OSB 22 mm 
✔️ Instalación de carpinterías exteriores (puertas y ventanas) suministradas por el cliente, con sellado y junta de expansión incluidos 
✔️ Tabiquería interior con yeso y pintura blanca final 
✔️ Fachada exterior en machihembrado 19 mm 
✔️ Instalaciones preinstaladas (sin conexión)
📌 Otros acabados bajo pedido (revoco, frisos, madera interior, etc.).

⚠️ Notas:
Las puertas y ventanas no están incluidas en el precio, pero se instalan si son suministradas por el cliente.
La cimentación se cotiza por separado según terreno.
La conexión final de electricidad y agua debe realizarse por técnicos autorizados. Nosotros dejamos las preinstalaciones listas.

✅ Ideal para:
vivienda compacta de uso diario
alquiler turístico en montaña o costa
parejas o teletrabajo con estilo
quien valora sencillez, orden y presencia
🧭 51,89 m² bien resueltos. Pura intención. Puro equilibrio.`
        },
        {
          size: "67 м²",
          images: [
            "/lovable-uploads/6ab7167c-38b8-4d8b-9395-4edf250c2263.png",
            "/lovable-uploads/9af6cd26-eb12-4502-82fe-af4a52f17dca.png"
          ],
          description: `🏠 Techo Simple 67 m² (útil 60 m2)
💶 Precio cerrado:
🏗 ESTANDART: 751 €/m² → 50.333 €
🌅 Terraza cubierta de 31 m² bajo voladizo — incluida en el precio

🌿 El equilibrio perfecto entre espacio, claridad y estructura
Este modelo de 60 m² actúa como modelo de referencia de la serie MonoRoof. Volumen bien proporcionado, líneas limpias, fachada clara. Tres ventanales verticales conectan el interior con la terraza y el entorno: luz natural, ventilación cruzada y amplitud visual.
La pérgola integrada da sombra sin recargar el diseño. Cada elemento tiene una función precisa.

🏡 Distribución abierta y flexible
El interior ofrece salón, cocina y comedor en un mismo espacio fluido. Dos habitaciones —o una suite y un despacho— adaptables a las necesidades del cliente. Cada metro está pensado para ser útil, sin desperdicio.
La entrada principal es frontal, con posibilidad de ventilación cruzada. El baño tiene ventana y espacio para una ducha cómoda.
📐 Claridad, funcionalidad y libertad de uso.

📦 Versiones disponibles
🏗 ESTANDART 
✔️ Estructura BOSQUE PLATFORM con cerramiento OSB 9 mm exterior e interior ✔️ Aislamiento completo ✔️ Suelo técnico OSB 22 mm ✔️ Instalación de carpinterías exteriores (puertas y ventanas) suministradas por el cliente, con sellado y junta de expansión incluidos ✔️ Tabiquería interior con yeso y pintura blanca final ✔️ Fachada exterior en machihembrado 19 mm ✔️ Instalaciones preinstaladas (sin conexión)
📌 Otros acabados bajo pedido (revoco, frisos, madera interior, etc.).

⚠️ Notas:
Puertas y ventanas no están incluidas en el precio base.
La cimentación se calcula según las condiciones del terreno.
La conexión final de luz y agua debe ser realizada por técnicos autorizados. Nosotros dejamos las preinstalaciones listas.

✅ Ideal para:
vivienda principal o segunda residencia
familias pequeñas con visión de futuro
turismo rural o alquiler con confort
quienes valoran luz, orden y estructura
🧭 Una casa pensada. Luminosa, funcional, sin excesos. El siguiente paso lo decide el cliente.`
        }
      ]
    },
    {
      name: "Techo Volado", 
      description: "asimetría, voladizo, acento arquitectónico (35–80 m²)",
      sizes: "35–80 m²",
      quote: "",
      image: "/lovable-uploads/457a07f4-54a5-40fb-bcfe-b0ad56bd6578.png",
      models: [
        {
          size: "35 м²",
          images: [
            "/lovable-uploads/bc53684c-1eae-477f-a924-037a54f88395.png",
            "/lovable-uploads/aebac7a2-b4f2-4df9-b813-6756932fab63.png"
          ],
          description: `🏠 Techo Volado 35,58 m² (útil 29 m2)
💶 Precio cerrado:
🏗   ESTANTADT: 830 €/m² → 29.536 €
🌅 Terraza abierta de 21 m² incluida en el precio – integrada en la estructura, sin coste adicional.

🌄 Arquitectura con carácter. Minimalismo con vuelo.
Techo Volado no es solo una casa pequeña. Es una declaración arquitectónica en 35 m²: asimetría, luz, líneas prolongadas y un tejado que "vuela" hacia el horizonte. Minimalista. Funcional. Contemporáneo. Pensado para paisajes del sur — desde Canarias hasta Cataluña.

🧭 Distribución eficiente y expresiva
Zona SALÓN-COCINA (~17,7 m²): 
✔️ Ventanal panorámico de 1800×2100 mm 
✔️ Ventana vertical hasta el suelo de 600×2100 mm 
✔️ Cocina en forma de "L" + espacio de estar 
✔️ Ventana 1200×1000 mm con luz lateral
Dormitorio (~7,8 m²):
✔️ Ventana 600×1200 mm a 1000 mm del suelo 
✔️ Luz natural y privacidad
Baño (~3,6 m²): 
✔️ Ventana 530×1000 mm 
✔️ Preparado para ducha amplia

📦 Versiones disponibles
🏗 ESTANDART 
✔️ Estructura BOSQUE PLATFORM con cerramiento OSB 9 mm exterior e interior 
✔️ Aislamiento completo 
✔️ Suelo técnico OSB 22 mm 
✔️ Instalación de carpinterías exteriores (puertas y ventanas) suministradas por el cliente, con sellado y junta de expansión incluidos 
✔️ Tabiquería interior con yeso y pintura blanca final 
✔️ Fachada exterior en machihembrado 19 mm 
✔️ Instalaciones preinstaladas (sin conexión)
📌 Otros acabados bajo pedido (revoco, frisos, madera interior, etc.).

🌞 Arquitectura exterior distintiva
• Cubierta inclinada, asimétrica, con voladizo en esquina de hasta 1700 mm • Terraza de 2,5 m + prolongación lateral de 700 mm a cada lado • Fachada en machihembrado vertical 19 mm (tono miel claro) • Marcos de ventanas empotrados (aluminio negro) • Lamas verticales decorativas 45×60 mm para ritmo visual • Zócalo oscuro: contraste, sombra y base visual

⚠️ Notas:
Las puertas y ventanas no están incluidas en el precio, pero se instalan si son suministradas por el cliente.
La cimentación se calcula según condiciones del terreno.
La conexión final de luz y agua debe ser realizada por técnicos autorizados. Nosotros dejamos las preinstalaciones listas.

✅ Ideal para:
Primera vivienda / Tiny house
Alojamiento turístico o glamping premium
Showroom / oficina jardín
Casa de fin de semana con estilo
✏️ Detalles con personalidad
Contraste entre luz y sombra
Geometría expresiva
Mínimos elementos, máximo sentido
Pensado para sol intenso y horizontes abiertos
🟢 Techo Volado 35 m² no es solo una casa — es una idea. La idea de que incluso 35 m² pueden parecer arquitectura.`
        },
        {
          size: "46 м²",
          images: [
            "/lovable-uploads/3b23cd21-4831-4c6b-ae2e-bbcc1a7c96b7.png",
            "/lovable-uploads/9c622b89-a3f1-45c4-8a7e-67a684e33a6c.png"
          ],
          description: `🏠 Techo Volado 46 m² (útil 40 m2)
💶 Precio cerrado:
🏗 ESTANDART: 868 €/m² → 39.943 €
🌅 Terraza abierta de 10 m² incluida en el precio – integrada en la estructura, sin coste adicional.

🌄 Geometría con carácter, interior luminoso, vida funcional
Este modelo de 46 m² destaca por su equilibrio entre forma, proporción y sensación habitable. La cubierta inclinada en doble plano le da un perfil distintivo — moderno, sin estridencias. El revestimiento en machihembrado vertical aporta textura natural, calidez y ritmo. Una casa que transmite orden, claridad y sensación de hogar.

🏡 Espacio pensado, distribución sencilla
Zona de estar abierta con cocina, comedor y sala integrados. Dos habitaciones permiten diferentes configuraciones: dormitorio principal + estudio, invitados, despacho o uso mixto. El baño es funcional, con ducha, ventana y ventilación cruzada.
Desde el salón se accede directamente a la terraza frontal cubierta. El espacio fluye, la casa respira.
📐 Distribución clara, adaptable al uso diario o turístico.

📦 Versiones disponibles
🏗 ESTANDART 
✔️ Estructura BOSQUE PLATFORM con cerramiento OSB 9 mm exterior e interior 
✔️ Aislamiento completo 
✔️ Suelo técnico OSB 22 mm 
✔️ Instalación de carpinterías exteriores (puertas y ventanas) suministradas por el cliente, con sellado y junta de expansión incluidos 
✔️ Tabiquería interior con yeso y pintura blanca final 
✔️ Fachada exterior en machihembrado 19 mm 
✔️ Instalaciones preinstaladas (sin conexión)
📌 Otros acabados bajo pedido (revoco, frisos, madera interior, etc.).

⚠️ Notas:
El precio no incluye ventanas ni puertas. Si el cliente las suministra o encarga con BOSQUE, se instalan sin coste adicional y con sellado correcto.
La cimentación se calcula por separado según condiciones del terreno.
La conexión final de luz y agua debe ser realizada por técnicos autorizados.

✅ Ideal para:
quien busca vivienda compacta sin renunciar a diseño
parejas con teletrabajo o invitados
alquiler turístico o segunda residencia
comenzar con lo esencial, con margen para personalizar
🧭 Diseño con carácter. Espacio útil. Y una estructura que funciona. Sin adornos innecesarios: solo arquitectura bien resuelta.`
        }
      ]
    },
    {
      name: "Estilo Moderno",
      description: "cubierta plana y estética contemporánea (40–90 m²)",
      sizes: "40–90 m²", 
      quote: "",
      image: "/lovable-uploads/04e241c4-f827-4fc2-b77f-4ea27ce7093d.png"
    },
    {
      name: "Techo Alto",
      description: "cubiertas altas a dos aguas, amplitud y verticalidad (36–90+ m²)",
      sizes: "36–90+ m²",
      quote: "",
      image: "/lovable-uploads/e216aff7-3ceb-4cb2-8806-e4b7de5053bf.png",
      models: [
        {
          size: "Modelo Barn",
          images: [
            "/lovable-uploads/barn1.jpg",
            "/lovable-uploads/barn2.jpg",
            "/lovable-uploads/barn3.jpg",
            "/lovable-uploads/barn5.png",
            "/lovable-uploads/barn4.png",
            "/lovable-uploads/barn6.png"
          ],
          description: `🏠 Techo Alto - Modelo Barn
💶 Precio: Por consultar

🌿 Descripción disponible próximamente
Este modelo presenta una cubierta alta a dos aguas que maximiza el espacio interior y crea una sensación de amplitud y verticalidad única.

Características principales:
✔️ Cubierta a dos aguas con alta inclinación
✔️ Máximo aprovechamiento del espacio vertical
✔️ Diseño tipo barn contemporáneo
✔️ Amplias zonas de cristal para máxima luminosidad
✔️ Acabados en madera natural

📦 Más información próximamente
Para más detalles sobre este modelo, contacte con nuestro equipo.`
        }
      ]
    },
    {
      name: "Bosque Kit",
      description: "formato para autoconstrucción o montaje con terceros",
      sizes: "18–36 м²",
      quote: "",
      image: "/lovable-uploads/ef6c249e-c0e4-4067-aded-4a577418842c.png"
    }
  ];

  const handleConsultationClick = () => {
    window.postMessage({
      type: 'OPEN_CONSULTATION_CHAT',
      message: 'Хочу получить консультацию по системе BOSQUE PLATFORM. Выберите удобный способ связи:'
    }, '*');
  };

  const openImageViewer = (images: string[], startIndex: number, alt: string) => {
    setImageViewer({
      isOpen: true,
      images,
      currentIndex: startIndex,
      alt
    });
  };

  const closeImageViewer = () => {
    setImageViewer(prev => ({ ...prev, isOpen: false }));
  };

  const handlePreviousImage = () => {
    setImageViewer(prev => ({
      ...prev,
      currentIndex: prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.images.length - 1
    }));
  };

  const handleNextImage = () => {
    setImageViewer(prev => ({
      ...prev,
      currentIndex: prev.currentIndex < prev.images.length - 1 ? prev.currentIndex + 1 : 0
    }));
  };

  const toggleModelDescription = (modelKey: string) => {
    setExpandedModels(prev => ({
      ...prev,
      [modelKey]: !prev[modelKey]
    }));
  };

  const toggleCardDescription = (cardName: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  const getShortDescription = (description: string) => {
    const lines = description.split('\n');
    return lines.slice(0, 4).join('\n');
  };

  const getFullDescription = (description: string) => {
    const lines = description.split('\n');
    return lines.slice(4).join('\n');
  };

  const renderModelButton = (line, index) => {
    if (line.name === "Techo Simple" || line.name === "Techo Volado" || line.name === "Techo Alto") {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full border-wood text-wood hover:bg-wood hover:text-white text-sm md:text-base"
            >
              Ver modelos
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-wood-dark">
                Modelos {line.name}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
              {line.models.map((model, modelIndex) => (
                <Card key={modelIndex} className="overflow-hidden">
                  <CardContent className="p-0">
                    {model.images ? (
                      <div>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {model.images.map((image, imageIndex) => (
                              <CarouselItem key={imageIndex}>
                                <div 
                                  className="relative overflow-hidden group cursor-pointer h-48"
                                  onClick={() => openImageViewer(model.images, imageIndex, `${line.name} ${model.size}`)}
                                >
                                  <img 
                                    src={image} 
                                    alt={`${line.name} ${model.size} - ${imageIndex === 0 ? 'фасад' : 'планировка'}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 origin-center"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/50 px-3 py-1 rounded">
                                      Нажмите для увеличения
                                    </div>
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-wood-dark mb-4">
                            {line.name} {model.size}
                          </h3>
                          <div className="text-sm text-gray-600 whitespace-pre-line">
                            {line.name === "Techo Simple" ? (
                              <div>
                                <div>{getShortDescription(model.description)}</div>
                                {expandedModels[`${line.name}-${model.size}`] && (
                                  <div className="mt-4">
                                    {getFullDescription(model.description)}
                                  </div>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleModelDescription(`${line.name}-${model.size}`)}
                                  className="mt-2 text-wood hover:text-wood-dark"
                                >
                                  {expandedModels[`${line.name}-${model.size}`] ? "Ocultar detalles" : "Ver más"}
                                </Button>
                              </div>
                            ) : line.name === "Techo Volado" ? (
                              <div>
                                <div>{getShortDescription(model.description)}</div>
                                {expandedModels[`${line.name}-${model.size}`] && (
                                  <div className="mt-4">
                                    {getFullDescription(model.description)}
                                  </div>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleModelDescription(`${line.name}-${model.size}`)}
                                  className="mt-2 text-wood hover:text-wood-dark"
                                >
                                  {expandedModels[`${line.name}-${model.size}`] ? "Ocultar detalles" : "Ver más"}
                                </Button>
                              </div>
                            ) : line.name === "Techo Alto" ? (
                              <div>
                                <div>{getShortDescription(model.description)}</div>
                                {expandedModels[`${line.name}-${model.size}`] && (
                                  <div className="mt-4">
                                    {getFullDescription(model.description)}
                                  </div>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleModelDescription(`${line.name}-${model.size}`)}
                                  className="mt-2 text-wood hover:text-wood-dark"
                                >
                                  {expandedModels[`${line.name}-${model.size}`] ? "Ocultar detalles" : "Ver más"}
                                </Button>
                              </div>
                            ) : (
                              model.description
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div 
                          className="relative overflow-hidden group cursor-pointer h-48"
                          onClick={() => openImageViewer([model.image], 0, `${line.name} ${model.size}`)}
                        >
                          <img 
                            src={model.image} 
                            alt={`${line.name} ${model.size}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 origin-center"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/50 px-3 py-1 rounded">
                              Нажмите для увеличения
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-wood-dark mb-2">
                            {line.name} {model.size}
                          </h3>
                          <p className="text-gray-600">
                            Минимализм и функциональность в компактном формате
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      );
    } else {
      return (
        <Button 
          variant="outline" 
          className="w-full border-wood text-wood hover:bg-wood hover:text-white text-sm md:text-base"
        >
          Ver modelos
        </Button>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="BOSQUE PLATFORM" 
        description="Soluciones en entramado ligero"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />
      
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-wood-dark">
                En la base de BOSQUE PLATFORM<br />
                se encuentran distintas formas sobre un mismo sistema constructivo.<br />
                Elige la forma que más te guste
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
                Construimos según una lógica estructural clara: módulos repetitivos, uniones confiables y compatibilidad total en obra.
                <br className="hidden md:block" />
                Desde Techo Simple hasta Bosque Kit — todo se basa en una misma lógica: adaptado al clima de Canarias y preparado para el montaje.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              {/* First 3 cards */}
              {architecturalLines.slice(0, 3).map((line, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow h-full flex flex-col">
                  <CardHeader className="pb-4 text-center">
                    <div className="text-wood-dark mb-2">
                      <img 
                        src={line.image} 
                        alt={line.name}
                        className="w-20 h-20 mx-auto mb-4 object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-wood-dark">
                      {line.name}
                    </CardTitle>
                  </CardHeader>
                   <CardContent className="flex-1 flex flex-col px-4 md:px-6">
                     <p className="text-sm md:text-base text-gray-700 mb-3 text-center">
                       {line.description}
                     </p>
                      {/* Removed size text and quote section */}
                     {renderModelButton(line, index)}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Last 2 cards centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
              {architecturalLines.slice(3).map((line, index) => (
                <Card key={index + 3} className="hover:shadow-xl transition-shadow h-full flex flex-col">
                  <CardHeader className="pb-4 text-center">
                    <div className="text-wood-dark mb-2">
                      <img 
                        src={line.image} 
                        alt={line.name}
                        className="w-20 h-20 mx-auto mb-4 object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-wood-dark">
                      {line.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col px-4 md:px-6">
                    <p className="text-sm md:text-base text-gray-700 mb-3 text-center">
                      {line.description}
                    </p>
                     {/* Removed size text and quote section */}
                    {renderModelButton(line, index + 3)}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center -mt-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Cómo están hechas nuestras casas
              </h3>
              <HoverInteractiveSchema>
                <button 
                  className="p-4 transition-all duration-300 hover:scale-105 bg-transparent border-none outline-none"
                >
                  <img 
                    src="/lovable-uploads/e87d112a-83fd-4b68-bbd0-0dc258bb2c74.png" 
                    alt="Consultoría" 
                    className="w-32 h-32 object-contain"
                  />
                </button>
              </HoverInteractiveSchema>
            </div>
          </div>
        </div>
      </section>

      <ImageViewer
        isOpen={imageViewer.isOpen}
        onClose={closeImageViewer}
        images={imageViewer.images}
        currentIndex={imageViewer.currentIndex}
        onPrevious={handlePreviousImage}
        onNext={handleNextImage}
        alt={imageViewer.alt}
      />
      
      <Footer />
    </div>
  );
};

export default BosquePlatform;
