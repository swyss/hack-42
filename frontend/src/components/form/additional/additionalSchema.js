import { z } from "zod";
export const AdditionalSchema = z.object({
  englishLevel: z
    .string()
    .min(2, "English proficiency test must have at least 2 letters")
    .max(50, "English proficiency test can't exceed 50 letters"),
  englishTest: z.string().min(2, "Please select a value"),
  proof: z.string().optional(),
  hear: z.string().min(1, "Please select a value"),
});
