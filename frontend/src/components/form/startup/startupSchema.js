import { z } from "zod";
export const StartupSchema = z.object({
  name: z
    .string()
    .min(2, "Startup must have at least 2 letters")
    .max(50, "Name can't exceed 50 letters"),
  industry: z
    .string()
    .min(2, "Industry must have at least 2 letters")
    .max(50, "Industry can't exceed 50 letters"),
  description: z
    .string()
    .min(10, "Description should be least 10 letters")
    .max(100, "Description can't exceed 100 letters"),
  potential: z
    .string()
    .min(10, "Potential should be least 10 letters")
    .max(100, "Potential can't exceed 100 letters"),
  motivation: z
    .string()
    .min(10, "Motivation should be least 10 letters")
    .max(100, "Motivation can't exceed 100 letters"),
  chooseSTART: z
    .string()
    .min(10, "Why START Fellowship should be least 10 letters")
    .max(100, "Why START Fellowship can't exceed 100 letters"),
  coFounderCount: z.string(),
  coFounderNames: z.string(),
});
