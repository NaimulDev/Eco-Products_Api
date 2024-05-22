import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";


//validated with All Products and All Orders
export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.errors[0].message,
      });
    }
  };
