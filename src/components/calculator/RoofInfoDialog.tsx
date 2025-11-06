
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const RoofInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Más sobre cubierta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>Información sobre la cubierta</DialogTitle>
          <DialogDescription>
            Estructura y composición de la cubierta
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh]">
          <Tabs defaultValue="structure" className="mt-4">
            <TabsList className="grid grid-cols-1 mb-4">
              <TabsTrigger value="structure">Estructura de la cubierta</TabsTrigger>
            </TabsList>
            
            <TabsContent value="structure" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div 
                    className="transition-transform duration-300 hover:scale-130 cursor-zoom-in"
                    style={{ transformOrigin: 'center' }}
                  >
                    <img 
                      src="/lovable-uploads/675ff4d5-ce2d-4aba-ae5f-fa43015f51a1.png" 
                      alt="Esquema de la cubierta 1" 
                      className="rounded-md border border-gray-200 w-full mb-4"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div 
                    className="transition-transform duration-300 hover:scale-130 cursor-zoom-in"
                    style={{ transformOrigin: 'center' }}
                  >
                    <img 
                      src="/lovable-uploads/987076e2-de0c-4064-bd33-cb6674da2578.png" 
                      alt="Esquema de la cubierta 2" 
                      className="rounded-md border border-gray-200 w-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-md border border-slate-100 text-center mt-6">
                <h4 className="font-medium">¿Necesita ayuda con la elección?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Nuestros especialistas le ayudarán a encontrar la solución óptima para su proyecto
                </p>
                <Button variant="outline" className="mt-3">Contactar con nosotros</Button>
              </div>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RoofInfoDialog;
