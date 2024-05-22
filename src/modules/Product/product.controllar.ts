import { Request, Response } from "express";
import { ProductService } from "./product.service";

interface CustomError extends Error {
  statusCode?: number;
}

//create Product
const createProductDb = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProduct(productData);
    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: result,
    });
  } catch (err) {
    const error = err as CustomError;
    res.status(500).json({
      success: false,
      message: "Something was wrong create",
      error: error.message,
    });
  }
};

//get all Products
const getAllProductDb = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProduct();
    res.status(200).json({
      success: true,
      message: "ALl Products fetch successfully!",
      data: result,
    });
  } catch (err) {
    const error = err as CustomError;
    res.status(500).json({
      success: false,
      message: "Something was wrong product",
      error: error.message,
    });
  }
};

//export all functionality
export const ProductControllar = {
  createProductDb,
  getAllProductDb,
};
