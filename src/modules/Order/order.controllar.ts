import { Request, Response } from "express";
import { OrderService } from "./order.service";

interface CustomError extends Error {
  statusCode?: number;
}

//create order
const createOrderDb = async (req: Request, res: Response) => {
  try {
    const Orderdata = req.body;
    const result = await OrderService.createOrder(Orderdata);
    res.status(200).json({
      success: true,
      message: "Your Order Created Successfully",
      data: result,
    });
  } catch (err) {
    const error = err as CustomError;
    res.status(400).json({
      success: false,
      message: "This Order Not Create",
      error: error.message,
    });
  }
};

//get all Order conditional and get Order By Email
const getallOrderDb = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;
    //Get Email
    let result;
    if (email) {
      result = await OrderService.getOrderByEmail(email);

      //Not Orders found email
      if (!result.length) {
        return res.status(404).json({
          success: false,
          message: "No orders found for the specified email",
        });
      }
    } else {
      result = await OrderService.getallOrder();
    }
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    const error = err as CustomError;
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching orders",
      error: error.message,
    });
  }
};

export const OrderControllar = {
  createOrderDb,
  getallOrderDb,
};
