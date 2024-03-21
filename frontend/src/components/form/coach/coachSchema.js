import validator from "validator";
import { z } from "zod";

export const CoachSchema = z.object({
  firstname: z
    .string()
    .min(2, "Firstname must be at least 2 letters")
    .max(50, "Firstname can't exceed 50 letters"),
  lastname: z
    .string()
    .min(2, "Lastname must be at least 2 letters")
    .max(50, "Lastname can't exeed 50 letters"),
  email: z.string(validator.isEmail),
  phoneNumber: z.string(validator.isMobilePhone("de-CH")),
  country: z
    .string()
    .min(2, "Country must be at least 2 letters")
    .max(30, "Country can't exceed 30 letters"),
});
