import express from "express";
import { ProductControllar } from "./product.controllar";
import { validate } from "../Validation/validate";
import { productSchema } from "../Validation/product.validation";

const router = express.Router();

router.post("/", validate(productSchema), ProductControllar.createProductDb);

router.get("/", ProductControllar.getAllProductDb);

router.get("/search", ProductControllar.searchProductDb);

router.get("/:productId", ProductControllar.getASingleProductDb);

router.put("/:productId", ProductControllar.updateProductDb);

router.delete("/:productId", ProductControllar.deleteProductDb);

export const ProductRouter = router;
