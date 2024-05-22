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

//get a Single Product
const getSingleProduct = async (id: string) => {
  //get id
  const result = await Product.findById(id);
  return result;
};

//Update A Product
const updateProduct = async (id: string, productData: Partial<EProduct>) => {
  const result = await Product.findByIdAndUpdate(id, productData, {
    new: true,
  });
  return result;
};

//Delete A Product
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

//Search A Product
const searchProduct = async (Term: string) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: Term, $options: "i" } },
      { description: { $regex: Term, $options: "i" } },
      { tags: { $regex: Term, $options: "i" } },
    ],
  });
  return result;
};

//export all function
export const ProductService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  searchProduct,
  deleteProduct,
};
