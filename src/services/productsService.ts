import { Product } from '../intefaces';
import addProduct from '../models/productsModel';

const addProductService = async (product: Product) => {
  const result = await addProduct(product);
  return result;
};

export default addProductService;
