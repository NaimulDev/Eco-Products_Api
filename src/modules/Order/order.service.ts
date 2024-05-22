import { EOrder } from "./order.interface";
import { Order } from "./order.schema";

//create a Order
const createOrder = async (orderData: EOrder) => {
  const result = new Order(orderData);
  return await result.save();
};

//get all Order
const getallOrder = async () => {
  const result = await Order.find();
  return result;
};

//get Order BY Email
const getOrderByEmail = async (email: string) => {
  return await Order.find({ email });
};

export const OrderService = {
  createOrder,
  getallOrder,
  getOrderByEmail,
};
