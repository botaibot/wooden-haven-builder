
import * as z from "zod";
import { formSchema } from "./constants";

export const calculatorFormSchema = z.object({
  houseType: z.enum(["frame", "glued_beam"]),
  width: z.number().min(3).max(15),
  length: z.number().min(3).max(20),
  thickness: z.string(),
  foundation: z.enum(["adjustable_metal", "strip", "monolithic"]),
  roofType: z.enum(["simple", "volado", "moderno", "alto"]),
  terrace: z.boolean(),
  terraceSize: z.number().min(0).max(100).optional(),
  canopy: z.boolean(),
  canopySize: z.number().min(0).max(50).optional(),
  roofInsulation: z.enum(["polystyrene_40mm", "custom"]),
  solarPanels: z.boolean().default(false),
  solarPower: z.number().min(0).max(20).default(5),
  fireProtection: z.boolean().default(false),
});

export type FormValues = z.infer<typeof calculatorFormSchema>;
