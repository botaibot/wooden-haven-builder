
// Константы цен для калькулятора

export const PRICES = {
  BASE_PRICE_PER_SQM: {
    frame: 550,
    glued_beam: 800
  },
  TERRACE_PRICE_PER_SQM: 200,
  CANOPY_PRICE_PER_SQM: 200,
  ROOF_INSULATION: {
    polystyrene_40mm: 0, // базовая комплектация
    rockwool_60mm: 0,    // базовая комплектация
    custom: 100          // наценка за индивидуальный расчет
  },
  FOUNDATION: {
    adjustable_metal: 0, // базовая комплектация
    monolithic: 250,     // наценка за монолитный фундамент
    screw_piles: 150     // наценка за винтовые сваи
  },
  METAL_SUPPORT: {
    price_per_unit: 60,
    additional_costs: 40, // работа, щебень, блоки и т.д.
    units_per_10sqm: 7
  }
};

export const formatCurrency = (value: number) => {
  return value.toLocaleString() + " €";
};

export const getRoofInsulationLabel = (value: string): string => {
  switch(value) {
    case "polystyrene_40mm": return "Пенополистирол 40 мм";
    case "rockwool_60mm": return "Каменная вата 60 мм";
    case "custom": return "Индивидуальная толщина (по запросу)";
    default: return value;
  }
};

export const getFoundationLabel = (value: string): string => {
  switch(value) {
    case "adjustable_metal": return "Регулируемая металлическая опора";
    case "monolithic": return "Монолитный фундамент (+250 €/м²)";
    case "screw_piles": return "Винтовые сваи (+150 €/м²)";
    default: return value;
  }
};

export const formSchema = {
  houseType: ["frame", "glued_beam"] as const,
  width: { min: 3, max: 15 },
  length: { min: 3, max: 20 },
  thickness: ["standard", "120mm", "195mm", "100mm", "200mm"] as const,
  terraceSize: { min: 0, max: 100 },
  canopySize: { min: 0, max: 50 },
  roofInsulation: ["polystyrene_40mm", "rockwool_60mm", "custom"] as const,
  foundation: ["adjustable_metal", "monolithic", "screw_piles"] as const,
};
