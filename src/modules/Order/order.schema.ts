import mongoose, { Schema } from "mongoose";
import { EOrder } from "./order.interface";

//create a schema
export const EOrderSchema = new Schema({
  email: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

//create a model
export const Order = mongoose.model<EOrder>("Order", EOrderSchema);
