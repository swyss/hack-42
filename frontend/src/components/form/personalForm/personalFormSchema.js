import { z } from "zod";
import validator, { isEmail } from "validator";
const birthdaySchema = z.object({
  month: z.number(),
  day: z.number(),
  year: z.number(),
});
export const PersonalFormSchema = z.object({
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
  city: z
    .string()
    .min(2, "City must be at least 2 letters")
    .max(30, "City can't exceed 30 letters"),
  country: z
    .string()
    .min(2, "Country must be at least 2 letters")
    .max(30, "Country can't exceed 30 letters"),

  gender: z.string(),
  EU_pass: z.enum(["true", "false"], {
    required_error: "You need to select if you have an EU Passport",
  }),
});
PersonalFormSchema.extend({
  birthday: birthdaySchema,
});
