
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MaterialCalculatorProps {
  width: number; // Width of one piece in mm
  length: number; // Length of one piece in mm
}

const MaterialCalculator = ({ width, length }: MaterialCalculatorProps) => {
  const [wallWidth, setWallWidth] = useState<number>(0);
  const [wallHeight, setWallHeight] = useState<number>(0);
  const [totalArea, setTotalArea] = useState<number>(0);
  const [piecesNeeded, setPiecesNeeded] = useState<number>(0);

  useEffect(() => {
    if (wallWidth > 0 && wallHeight > 0) {
      const area = wallWidth * wallHeight;
      setTotalArea(area);

      // Calculate number of pieces needed
      // Formula: Area (m²) / (Width_mm × Length_mm / 1,000,000)
      const pieceAreaInSqM = (width * length) / 1000000;
      const pieces = area / pieceAreaInSqM;
      setPiecesNeeded(Math.ceil(pieces)); // Round up to ensure enough pieces
    } else {
      setTotalArea(0);
      setPiecesNeeded(0);
    }
  }, [wallWidth, wallHeight, width, length]);

  return (
    <div className="bg-nature-light/20 p-4 rounded-md mt-4">
      <h4 className="text-sm font-semibold mb-3">Калькулятор материалов</h4>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <Label htmlFor="wall-width" className="text-sm mb-1 block">
            Ширина стены (м)
          </Label>
          <Input
            id="wall-width"
            type="number"
            min="0"
            step="0.1"
            value={wallWidth || ""}
            onChange={(e) => setWallWidth(parseFloat(e.target.value) || 0)}
            className="h-9"
          />
        </div>
        <div>
          <Label htmlFor="wall-height" className="text-sm mb-1 block">
            Высота стены (м)
          </Label>
          <Input
            id="wall-height"
            type="number"
            min="0"
            step="0.1"
            value={wallHeight || ""}
            onChange={(e) => setWallHeight(parseFloat(e.target.value) || 0)}
            className="h-9"
          />
        </div>
      </div>
      
      {totalArea > 0 && (
        <div className="space-y-1 text-sm">
          <p className="font-medium">
            Общая площадь: <span className="text-nature-dark">{totalArea.toFixed(2)} м²</span>
          </p>
          <p className="font-medium">
            Необходимое количество: <span className="text-nature-dark">{piecesNeeded} шт.</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            * Рекомендуем добавить 5-10% запаса на подрезку
          </p>
        </div>
      )}
    </div>
  );
};

export default MaterialCalculator;
