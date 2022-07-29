import { Product } from '../intefaces';
import { addProduct, listProducts } from '../models/productsModel';

export const addProductService = async (product: Product) => {
  const result = await addProduct(product);
  return result;
};

export const listProductsService = async () => {
  const result = await listProducts();
  return result;
};
