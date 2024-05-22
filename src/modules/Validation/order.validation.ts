import { z } from "zod";


//validated for Orders
export const orderSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  productId: z.string(),
  price: z.number({ message: "Please type in the Number Price" }),
  quantity: z.number(),
});
