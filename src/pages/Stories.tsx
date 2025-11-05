import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "¿Por qué se instala OSB con espacios entre placas?",
      content: [
        {
          subtitle: "Espacio entre placas de OSB",
          text: "El OSB se expande con los cambios de humedad. Si se instala sin espacios, las placas se hinchan, creando defectos en el acabado. Siempre dejamos un espacio de 3–4 mm entre placas. Esta regla está establecida en las normas (EN 1995, Egger, Kronospan) y es obligatoria."
        },
        {
          subtitle: "¿Cómo funciona una fachada ventilada?",
          text: "Entre el acabado de fachada (por ejemplo, revestimiento de madera) y la pared se deja un espacio de aire — normalmente 30–48 mm. Permite que la humedad se evapore hacia el exterior, protege la pared del sobrecalentamiento y prolonga la vida útil del acabado. Sin ventilación existe riesgo de acumulación de humedad y deterioro de la estructura."
        },
        {
          subtitle: "¿Por qué no usamos XPS en las paredes?",
          text: "El XPS no deja pasar el vapor. Si queda en medio del muro, el vapor se acumula y no puede salir. Esto conduce a humedades ocultas, pudrición y problemas. Por eso en muros de entramado solo usamos materiales permeables al vapor (lana mineral + barrera de vapor inteligente + membrana)."
        },
        {
          subtitle: "¿Qué es el punto de rocío y por qué es importante la barrera de vapor?",
          text: "Cuando el aire cálido del interior de la casa atraviesa la pared y se enfría, a cierta temperatura el vapor se convierte en agua — ese es el punto de rocío. Si se encuentra dentro del aislamiento y no hay barrera de vapor, la humedad queda en la pared. Con una barrera de vapor inteligente el vapor sale de forma controlada y segura."
        },
        {
          subtitle: "¿Por qué el revestimiento interior no se monta directamente sobre la barrera de vapor?",
          text: "Entre la barrera de vapor y el acabado interior (revestimiento, yeso) siempre se coloca un rastrelado. Crea un espacio de ventilación y protege la membrana de daños. De lo contrario el vapor no saldrá, la membrana se humedecerá y el acabado se deteriorará rápidamente."
        },
        {
          subtitle: "¿Por qué OSB en el interior si hay acabado?",
          text: "El OSB de 9 mm en el interior no es acabado, sino estabilización estructural. Sujeta los montantes, protege el aislamiento y crea una base de montaje. Sobre el OSB ya se puede fijar yeso, paneles o revestimiento."
        }
      ]
    },
    {
      id: 2,
      title: "Por qué no construimos con paneles SIP",
      content: [
        {
          subtitle: "1. Panel SIP — es un sándwich",
          text: "Es un panel de dos placas (normalmente OSB), entre las cuales hay aislamiento (poliestireno o PUR). Todo se pega en fábrica."
        },
        {
          subtitle: "2. En teoría suena conveniente",
          text: "Construcción rápida, buen aislamiento térmico, paredes planas — parece ideal."
        },
        {
          subtitle: "3. Pero en la práctica — muchos problemas ocultos",
          text: "Los problemas incluyen:",
          list: [
            "Construcción cerrada — la humedad no puede salir, se acumula dentro",
            "OSB dentro del panel teme la humedad, puede deteriorarse con el tiempo",
            "Imposible modificar la estructura — no se puede pasar cableado fácilmente, cambiar huecos, añadir elementos",
            "Requiere sellado perfecto — cualquier error y el panel pierde propiedades",
            "Peligro de sobrecalentamiento — en clima cálido los paneles se calientan mucho"
          ]
        },
        {
          subtitle: "4. En las Islas Canarias es especialmente importante:",
          text: "Humedad, sol y cambios de temperatura — el panel SIP no funciona bien sin medidas de protección especiales. El panel no respira — si entra humedad en algún punto, queda dentro."
        },
        {
          subtitle: "5. ¿Qué hacemos en su lugar?",
          text: "Construimos un sistema de entramado abierto:",
          list: [
            "Las paredes 'respiran', la humedad puede salir",
            "Todas las capas se pueden controlar y modificar",
            "Se pueden tender instalaciones fácilmente",
            "Las paredes no dependen del montaje de fábrica — lo hacemos todo nosotros, de forma fiable y transparente"
          ]
        },
        {
          subtitle: "📌 Conclusión:",
          text: "No usamos SIP porque es un sistema cerrado y arriesgado. Para nosotros es más importante: calidad, durabilidad y control. Por eso elegimos el entramado BOSQUE PLATFORM — un sistema abierto, fiable, adaptado a las Islas Canarias."
        }
      ]
    },
    {
      id: 3,
      title: "Dónde se puede construir con paneles SIP",
      content: [
        {
          subtitle: "📍1. Canadá y EE.UU.",
          text: "Los mercados más activos de SIP. Se usan principalmente en clima seco, frío o templado. A menudo — para construcciones temporales, casas económicas, anexos, edificios pequeños. El sistema funciona si se organiza correctamente la ventilación y protección contra humedad."
        },
        {
          subtitle: "📍2. Escandinavia (de forma limitada)",
          text: "En Noruega y Suecia a veces se usan paneles SIP, pero principalmente:",
          list: [
            "para construcciones auxiliares",
            "con protección exterior y en zonas secas",
            "no como tecnología masiva"
          ],
          additionalText: "El entramado tradicional con aislamiento se prefiere mucho más."
        },
        {
          subtitle: "📍3. Polonia, Chequia, Rumanía, Países Bálticos",
          text: "SIP se usa para casas económicas de construcción rápida. A menudo — para exportación. Dentro del país — más en el segmento económico. Prácticamente no se usa en viviendas de alta calidad."
        },
        {
          subtitle: "⚠️ Europa en general — no usa SIP en construcción masiva",
          text: "Razones:",
          list: [
            "Normativas de incendios — el poliestireno y PUR requieren protección estricta",
            "Eficiencia energética — SIP no ofrece buena permeabilidad al vapor sin soluciones complejas",
            "Estándares de durabilidad — SIP genera dudas en uso por más de 30 años",
            "Modularidad — los europeos prefieren poder cambiar distribuciones, SIP no da esa flexibilidad"
          ]
        },
        {
          subtitle: "📌 Dónde no conviene construir con SIP:",
          list: [
            "En zonas de alta humedad o con cambios de temperatura (por ejemplo, Islas Canarias, zonas costeras)",
            "Donde es importante la durabilidad, adaptación de la estructura y simplicidad de instalaciones",
            "En construcción de casas pensadas para décadas, no para 15–20 años"
          ]
        },
        {
          subtitle: "🧾 Conclusión:",
          text: "En Europa los paneles SIP se usan de forma muy limitada, más como tecnología de construcción rápida o vivienda temporal. Para una casa seria, fiable y duradera se prefiere el sistema de entramado, CLT, o ladrillo/bloque."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Diario de construcción" 
        description="Conozca más sobre nuestros enfoques de construcción y por qué elegimos específicamente tecnologías de entramado de madera"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {stories.map((story) => (
              <article key={story.id} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-wood-dark">
                  {story.title}
                </h2>
                
                <div className="space-y-6">
                  {story.content.map((section, index) => (
                    <div key={index} className="border-l-4 border-nature-dark pl-6">
                      <h3 className="text-xl font-semibold mb-3 text-wood-dark">
                        {section.subtitle}
                      </h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {section.text}
                      </p>
                      {section.list && (
                        <ul className="space-y-2 mb-3">
                          {section.list.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 flex items-start gap-3">
                              <span className="text-nature-dark mt-2 text-xs">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.additionalText && (
                        <p className="text-gray-700 leading-relaxed">
                          {section.additionalText}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Stories;
