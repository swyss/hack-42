import { z } from "zod";
import validator, { isEmail } from "validator";

export const LoginSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(6, "Password must be at least 12 letters")
    .max(50, "Password can't exeed 255 letters"),
});
