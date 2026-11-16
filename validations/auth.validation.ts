import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),

  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
  Terms: z.literal("on", {
    error: "Please Accept Terms and Conditions"
  })
  ,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password is too long"),

  confirmPassword: z
    .string()
}).refine(
  (data) => { return data.password === data.confirmPassword },
  {
    message: "Password do not match",
    path: ["confirmPassword"]
  }
)

export type RegisterInput = z.infer<typeof registerSchema>;
