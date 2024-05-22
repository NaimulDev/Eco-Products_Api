import { z } from "zod";


//validated Product
export const productSchema = z.object({
  name: z
    .string()
    .max(20, { message: "This Name is not find please 20 characters" })
    .min(1, { message: "First name is required" }),
  description: z.string(),
  price: z.number().min(5, { message: "First Price is required" }),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    }),
  ),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});
