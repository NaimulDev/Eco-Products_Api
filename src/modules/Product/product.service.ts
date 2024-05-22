import { EProduct } from "./product.interface";
import { Product } from "./product.model";

//create Porduct
const createProduct = async (Prodectdata: EProduct) => {
  const result = await Product.create(Prodectdata);
  return result;
};

//get all Product
const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};

//export all function
export const ProductService = {
  createProduct,
  getAllProduct,
};
