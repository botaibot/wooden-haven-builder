
export interface HouseData {
  id: number;
  title: string;
  area: string;
  dimensions: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  terrace: boolean;
  balcony: boolean;
  porch: boolean;
  frameCost: string;
  warmContourCost: string;
  turnkeyCost: string;
  images: string[];
  floorPlanImage: string;
}

const houses: HouseData[] = [
  {
    id: 1,
    title: "Ecopino 60",
    area: "60 м²",
    dimensions: "9.75 x 6.69 м",
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 596 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 3 576 000 ₽",
    images: [
      "/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png",
      "/lovable-uploads/9c7608b9-d224-491a-8cf9-e6c5f3783bed.png",
      "/lovable-uploads/876a7692-1ae2-4ec0-861f-762eaf151e79.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 2,
    title: "Ecopino 50",
    area: "50 м²",
    dimensions: "8.5 x 6.2 м",
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 550 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 3 100 000 ₽",
    images: [
      "/lovable-uploads/5ae30882-9c91-4365-b5ba-c711c94235d3.png",
      "/lovable-uploads/4b830e79-1c28-47d9-b24e-0ad3f853a6ab.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 3,
    title: "Ecopino 25",
    area: "25 м²",
    dimensions: "5.1 x 5.1 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 350 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 1 900 000 ₽",
    images: [
      "/lovable-uploads/1b2e05da-436d-494f-a509-a3dcfeaea52e.png",
      "/lovable-uploads/6ce96eb0-f617-42ab-9b16-46c0c4f92eef.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 4,
    title: "Ecopino 25",
    area: "25 м²",
    dimensions: "5.1 x 5.1 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: false,
    balcony: false,
    porch: true,
    frameCost: "от 350 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 1 900 000 ₽",
    images: [
      "/lovable-uploads/85042101-ffb6-40dc-b3be-85bc519188fd.png",
      "/lovable-uploads/7395f239-f442-4b96-a7de-aba63a604ea0.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 5,
    title: "Ecopino 25",
    area: "25 м²",
    dimensions: "5.1 x 5.1 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 350 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 1 900 000 ₽",
    images: [
      "/lovable-uploads/44faeda4-fa57-438b-a071-25b592003a2e.png",
      "/lovable-uploads/0c336174-8a70-4ee8-bbab-5df7497ef968.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 6,
    title: "Ecopino 42",
    area: "42 м²",
    dimensions: "7.1 x 6.0 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "от 460 000 ₽",
    warmContourCost: "Цену уточняйте",
    turnkeyCost: "от 2 750 000 ₽",
    images: [
      "/lovable-uploads/6f2fd81a-e154-42e4-aa78-5a772a37edeb.png",
      "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png",
      "/lovable-uploads/4d449e75-0e99-4477-9ca9-60de754701c3.png"
    ],
    floorPlanImage: "/lovable-uploads/4d449e75-0e99-4477-9ca9-60de754701c3.png"
  }
];

export const getHouseById = (id: number): HouseData => {
  return houses.find((h) => h.id === id) || houses[0];
};

export default houses;
