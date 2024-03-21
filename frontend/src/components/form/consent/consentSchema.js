import validator from "validator";
import { z } from "zod";

export const ConsentSchema = z.object({
  emailConfirm: z.string(validator.isEmail),
  requirements: z.boolean().refine(
    (value) => {
      // Custom validation logic
      if (!value) {
        throw new Error("Boolean value must be true.");
      }
      return true;
    },
    {
      message: "Please confirm the requirements",
    }
  ),
  consent: z.boolean().refine(
    (value) => {
      // Custom validation logic
      if (!value) {
        throw new Error("Boolean value must be true.");
      }
      return true;
    },
    {
      message: "Please accept the consent",
    }
  ),

  terms: z.boolean().refine(
    (value) => {
      // Custom validation logic
      if (!value) {
        throw new Error("Boolean value must be true.");
      }
      return true;
    },
    {
      message: "Please accept the terms",
    }
  ),
});
