import express from "express";
import { OrderControllar } from "./order.controllar";

const router = express.Router();

//create a order
router.post("/", OrderControllar.createOrderDb);

// //getOrdersByEmail
// router.get("/", OrderControllar.getOrderByEmailDb);

//get all order
router.get("/", OrderControllar.getallOrderDb);

export const OrderRouter = router;
