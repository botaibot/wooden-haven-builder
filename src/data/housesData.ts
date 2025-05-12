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
    id: 8,
    title: "Black Eco Box",
    area: "60 м² плюс терраса 22 м²",
    dimensions: "10.6 x 5.7 м",
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
      "/lovable-uploads/1eef88b2-05cb-40e6-97af-76cac27cb226.png",
      "/lovable-uploads/c91210e3-7e57-4c99-ab7f-27781fd2a6e2.png",
      "/lovable-uploads/d540d538-a4e8-4099-a43a-59b3cb3c21a1.png", 
      "/lovable-uploads/0a31d33c-f3f2-4781-9beb-a62465a57315.png",
      "/lovable-uploads/549095ac-c56f-4c84-badc-4ad68bab331e.png",
      "/lovable-uploads/4e0bc79b-f069-4bed-aba5-034816928b65.png",
      "/lovable-uploads/38788190-a61c-459a-8797-4df2fa00dc81.png",
      "/lovable-uploads/349b05a3-6beb-47ce-baec-61ab775f4a22.png",
      "/lovable-uploads/9cce6fb1-2025-4543-a6ae-1154748da486.png"
    ],
    floorPlanImage: "/lovable-uploads/a978f057-676e-4915-a206-cffe41d7c02b.png"
  },
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
    floorPlanImage: "/lovable-uploads/9324f8cd-508f-43a2-85da-14a2b930230d.png"
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
      "/lovable-uploads/ce61eb08-bb96-4fb9-aa02-218c1a144755.png",
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
      "/lovable-uploads/3c586d9b-6f30-4404-a370-5b6e68224828.png",
      "/lovable-uploads/6785cca5-755c-4b4b-aa32-c17dc0580e5f.png",
      "/lovable-uploads/ce9ebb39-e322-4731-b8ff-5059c5c3906e.png",
      "/lovable-uploads/068b49f4-b09a-4b6d-b876-f748ededa156.png",
      "/lovable-uploads/8e7a9847-aa39-43e8-bbba-209e56dcd534.png",
      "/lovable-uploads/cbfee098-4d29-4792-826d-3f54c1b374ac.png",
      "/lovable-uploads/8007b988-25ef-4fed-aa85-18c756b99abc.png"
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
