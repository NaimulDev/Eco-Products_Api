import express from "express";
import { OrderControllar } from "./order.controllar";
import { validate } from "../Validation/validate";
import { orderSchema } from "../Validation/order.validation";

const router = express.Router();

//create a order
router.post("/", validate(orderSchema), OrderControllar.createOrderDb);

//get all order
router.get("/", OrderControllar.getallOrderDb);

export const OrderRouter = router;
