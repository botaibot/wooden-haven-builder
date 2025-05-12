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
    id: 9,
    title: "Ecopino Modern",
    area: "54 м²",
    dimensions: "8.5 x 6.4 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: false,
    balcony: true,
    porch: true,
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
    images: [
      "/lovable-uploads/f4354d1a-0c79-4025-88cd-88913cd73e26.png"
    ],
    floorPlanImage: "/lovable-uploads/caf15d38-3d5b-43a7-a1f9-bcb3a8b2f2e2.png"
  },
  {
    id: 10,
    title: "Ecopino Lux Studio",
    area: "31.5 м²",
    dimensions: "7 x 4.5 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "600 € м²",
    warmContourCost: "750 € м²",
    turnkeyCost: "1200 € м²",
    images: [
      "/lovable-uploads/ccd9bf16-bd15-484a-8e0a-bd91c85288e3.png",
      "/lovable-uploads/efd46ec3-1c51-4d1d-bf8b-f523d2aabb12.png",
      "/lovable-uploads/9b10fb6c-f1b7-4a04-b863-03b2e62e1985.png",
      "/lovable-uploads/7474051c-cc7d-464a-9bc7-5b304febc919.png",
      "/lovable-uploads/f6d80fab-0234-4c19-a2b6-ebd32134b7dc.png",
      "/lovable-uploads/88335b5d-cfd7-4774-9877-056ea1b73425.png",
      "/lovable-uploads/a8165cb6-a086-450b-8b39-e5fe4991038e.png",
      "/lovable-uploads/8c7d1a37-e043-4e10-b474-88b2a317b09b.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 6,
    title: "Ecopino 42",
    area: "42 м²",
    dimensions: "7 x 6 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "850 € м²",
    warmContourCost: "1200 € м²",
    turnkeyCost: "1600 € м²",
    images: [
      "/lovable-uploads/6f2fd81a-e154-42e4-aa78-5a772a37edeb.png",
      "/lovable-uploads/2de7c5a9-d9dc-48da-a9da-620fd9fb8ff2.png",
      "/lovable-uploads/4d449e75-0e99-4477-9ca9-60de754701c3.png",
      "/lovable-uploads/ce61eb08-bb96-4fb9-aa02-218c1a144755.png", // New images
      "/lovable-uploads/05e7f9d0-8fbe-457a-830d-09fc1efbc5d2.png",
      "/lovable-uploads/1c14b59f-71a9-4b80-9fd7-82f42fbc3afd.png",
      "/lovable-uploads/f1e93128-2d34-461c-a1c9-e3d227ef998a.png",
      "/lovable-uploads/76a870d9-d6eb-4ed7-a67c-93760bf4f795.png",
      "/lovable-uploads/6c439f6a-8b9f-4946-ae41-e97102b0435a.png",
      "/lovable-uploads/ce6b9128-85fc-40c6-b336-3c89924fab88.png",
      "/lovable-uploads/0572beef-ee29-4ce6-bb34-6fa6d7021f25.png",
      "/lovable-uploads/c82a2f06-1230-42b8-841d-0987ed048ec7.png",
      "/lovable-uploads/56275e07-80d3-40c6-8a5f-0be63eb2a0e6.png",
      "/lovable-uploads/00c9f9a1-00c4-4ccd-906a-989a0efad538.png",
      "/lovable-uploads/d8f73c16-41ff-435b-8343-46b3eeaf34b6.png",
      "/lovable-uploads/3c586d9b-6f30-4404-a370-5b6e68224828.png"
    ],
    floorPlanImage: "/lovable-uploads/4d449e75-0e99-4477-9ca9-60de754701c3.png"
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
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
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
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
    images: [
      "/lovable-uploads/75ef7468-bc72-4500-a0c0-b549d7116eb8.png",
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
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
    images: [
      "/lovable-uploads/f6dc5a1e-aede-4698-911e-e45ebca21f9d.png",
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
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
    images: [
      "/lovable-uploads/44faeda4-fa57-438b-a071-25b592003a2e.png",
      "/lovable-uploads/0c336174-8a70-4ee8-bbab-5df7497ef968.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
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
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
    images: [
      "/lovable-uploads/a3c8109b-ad9e-4cab-aee3-117b5126739e.png",
      "/lovable-uploads/9c7608b9-d224-491a-8cf9-e6c5f3783bed.png",
      "/lovable-uploads/876a7692-1ae2-4ec0-861f-762eaf151e79.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 8,
    title: "Black Eco Box",
    area: "35 м²",
    dimensions: "7 x 5 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
    images: [
      "/lovable-uploads/8b8b75f6-4e84-464f-ac3d-f2df410db0b5.png",
      "/lovable-uploads/aea18e32-2f4c-467e-801c-a6f8a3b67628.png"
    ],
    floorPlanImage: "/lovable-uploads/47682191-0f0e-4ac6-8daa-f5aff33c9b9c.png"
  },
  {
    id: 7,
    title: "Ecopino 18",
    area: "18 м²",
    dimensions: "7.6 x 2.4 м",
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    terrace: true,
    balcony: false,
    porch: false,
    frameCost: "550 € м²",
    warmContourCost: "650 € м²",
    turnkeyCost: "1000 € м²",
    images: [
      "/lovable-uploads/f0d9acad-0fff-41af-9285-47a4c32b8896.png"
    ],
    floorPlanImage: "/lovable-uploads/c3b38557-fc33-40de-92a8-9c31177c7976.png"
  }
];

export const getHouseById = (id: number): HouseData => {
  return houses.find((h) => h.id === id) || houses[0];
};

export default houses;
