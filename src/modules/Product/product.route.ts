import express from "express";
import { ProductControllar } from "./product.controllar";

const router = express.Router();

router.post("/", ProductControllar.createProductDb);

router.get("/", ProductControllar.getAllProductDb);

router.get("/search", ProductControllar.searchProductDb);

router.get("/:productId", ProductControllar.getASingleProductDb);

router.put("/:productId", ProductControllar.updateProductDb);

export const ProductRouter = router;
