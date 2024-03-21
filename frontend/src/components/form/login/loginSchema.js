import { z } from "zod";
import validator, { isEmail } from "validator";

export const LoginSchema = z.object({
    email: z.string(validator.isEmail),
    password: z.string()
    .min(12, "Firstname must be at least 12 letters")
    .max(255, "Lastname can't exeed 255 letters")
});
