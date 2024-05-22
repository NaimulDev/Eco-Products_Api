import express from "express";
import { ProductControllar } from "./product.controllar";
import { validate } from "../Validation/validate";
import { productSchema } from "../Validation/product.validation";

const router = express.Router();

// Create a new product with validation
router.post("/", validate(productSchema), ProductControllar.createProductDb);

// Get all products
router.get("/", ProductControllar.getAllProductDb);

// Search for products
router.get("/search", ProductControllar.searchProductDb);

// Get a single product by ID
router.get("/:productId", ProductControllar.getASingleProductDb);

// Update a product by ID
router.put("/:productId", ProductControllar.updateProductDb);

// Delete a product by ID
router.delete("/:productId", ProductControllar.deleteProductDb);

export const ProductRouter = router;
