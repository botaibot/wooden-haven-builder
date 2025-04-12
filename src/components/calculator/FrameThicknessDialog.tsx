
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { FRAME_THICKNESS_DETAILS } from "./constants";
import { ScrollArea } from "@/components/ui/scroll-area";

const FrameThicknessDialog = ({ houseType }: { houseType: string }) => {
  // Determine which tabs to show based on house type
  const tabKeys = houseType === "frame" 
    ? ["frame_120mm", "frame_195mm"] 
    : ["glued_beam_100mm", "glued_beam_200mm"];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          Подробнее о {houseType === "frame" ? "каркасе" : "брусе"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Информация о {houseType === "frame" ? "каркасе" : "брусе"}
          </DialogTitle>
          <DialogDescription>
            Структура и характеристики {houseType === "frame" ? "каркасного дома" : "дома из клееного бруса"}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh]">
          <Tabs defaultValue={tabKeys[0]} className="mt-4">
            <TabsList className="grid grid-cols-2 mb-4">
              {tabKeys.map(key => (
                <TabsTrigger key={key} value={key}>
                  {FRAME_THICKNESS_DETAILS[key].title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tabKeys.map(key => (
              <TabsContent key={key} value={key} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">{FRAME_THICKNESS_DETAILS[key].title}</h3>
                    <p className="text-muted-foreground mb-4">{FRAME_THICKNESS_DETAILS[key].description}</p>
                    
                    {FRAME_THICKNESS_DETAILS[key].structure && (
                      <div className="mt-4">
                        <h4 className="text-md font-medium mb-2">Структура:</h4>
                        <div className="space-y-2">
                          {FRAME_THICKNESS_DETAILS[key].structure.map((layer, index) => (
                            <div key={index} className={`bg-${["slate", "amber", "blue", "yellow", "green"][index % 5]}-100 p-3 rounded`}>
                              <p className="text-sm">{layer}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {'note' in FRAME_THICKNESS_DETAILS[key] && (
                      <div className="mt-6 bg-amber-50 p-4 rounded-md border border-amber-100">
                        <p className="text-sm text-amber-800">{FRAME_THICKNESS_DETAILS[key].note}</p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/b4a28c2b-ae59-48c5-a199-7e16a42b13db.png" 
                      alt="Структура каркаса" 
                      className="rounded-md border border-gray-200 w-full"
                    />
                    
                    <h4 className="text-lg font-medium mb-3">Преимущества:</h4>
                    <ul className="space-y-2">
                      {FRAME_THICKNESS_DETAILS[key].advantages.map((advantage, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FrameThicknessDialog;
