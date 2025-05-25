
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Stories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageBanner 
        title="Строим с умом и объясняем просто" 
        description="Полезные статьи о строительстве деревянных домов от экспертов Bosque Nórdico"
        backgroundImage="/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-8">
            {/* Первая статья */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>25 мая 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 мин чтения</span>
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Почему OSB укладывается с зазором?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 mb-6">
                  <p className="font-medium">ЗДЕСЬ БУДЕТ СХЕМА:</p>
                  <p>Зазор между листами OSB</p>
                </div>

                <p>
                  OSB расширяется при изменении влажности. Если уложить плотно, плиты вспучиваются, создавая дефекты отделки. 
                  Мы всегда оставляем зазор 3–4 мм между листами. Это правило зафиксировано в стандартах (EN 1995, Egger, Kronospan) 
                  и обязательно для соблюдения.
                </p>

                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 mb-6">
                  <p className="font-medium">ЗДЕСЬ БУДЕТ СХЕМА:</p>
                  <p>Вентилируемый фасад</p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Как работает вентилируемый фасад?</h3>
                <p>
                  Между фасадной отделкой (например, вагонкой) и стеной оставляется воздушный зазор — обычно 30–48 мм. 
                  Он позволяет влаге испаряться наружу, защищает стену от перегрева и продлевает срок службы отделки. 
                  Без вентиляции — риск накопления влаги и разрушения конструкции.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Почему мы не используем XPS в стенах?</h3>
                
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 mb-6">
                  <p className="font-medium">ЗДЕСЬ БУДЕТ СХЕМА:</p>
                  <p>Пример точки росы и пирога стены</p>
                </div>

                <p>
                  XPS не пропускает пар. Если он оказывается в середине пирога стены, пар скапливается и не выходит. 
                  Это приводит к скрытому увлажнению, гниению и проблемам. Поэтому в каркасных стенах мы используем только 
                  паропроницаемые материалы (вата + умная пароизоляция + мембрана).
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Что такое точка росы — и почему важна пароизоляция?</h3>
                <p>
                  Когда тёплый воздух изнутри дома проходит сквозь стену и остывает, при определённой температуре пар превращается в воду — 
                  это точка росы. Если она находится внутри утеплителя и нет пароизоляции, влага остаётся в стене. 
                  С умной пароизоляцией пар выходит дозированно и безопасно.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Почему вагонка не монтируется прямо на пароизоляцию?</h3>
                <p>
                  Между пароизоляцией и внутренней отделкой (вагонкой, гипсом) всегда делается обрешётка. 
                  Она создаёт вентиляционный зазор и защищает мембрану от повреждений. Иначе пар не выйдет, 
                  мембрана будет мокнуть, а отделка быстро испортится.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Почему OSB внутри, если есть отделка?</h3>
                <p>
                  OSB 9 мм с внутренней стороны — это не отделка, а конструктивная стабилизация. 
                  Он удерживает стойки, защищает утеплитель и создаёт монтажную базу. 
                  Поверх OSB уже можно крепить гипс, панели или вагонку.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
