import { Types } from "mongoose";

//create a interface
export type EOrder = Document & {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};
