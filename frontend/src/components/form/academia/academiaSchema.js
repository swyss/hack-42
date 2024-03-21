import { z } from "zod";

export const AcademiaSchema = z.object({
  university: z
    .string()
    .min(5, "University must have at least 5 letters")
    .max(50, "University can't exceed 50 letters"),
  major: z
    .string()
    .min(2, "Major must have at least 2 letters")
    .max(50, "Major can't exceed 50 letters"),
  student_lvl: z.enum(
    ["Bsc", "Msc", "PhD"],
    "Please select a valid Student Level"
  ),
  proof: z.string().min(1, "Please upload a file"),
  uniStart: z.coerce.date(),
  uniEnd: z.coerce.date(),
});
