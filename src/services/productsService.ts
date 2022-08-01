import { Product } from '../intefaces';
import { addProduct, listProducts } from '../models/productsModel';
import validateProductInfos from '../schemas/productSchema';

export const addProductService = async (product: Product) => {
  const { error } = validateProductInfos.validate(product);
  if (error?.message.includes('required')) {
    return { status: 400, message: error.message };
  }
  if (error) {
    return { status: 422, message: error.message };
  }
  const result = await addProduct(product);
  return { status: 201, result };
};

export const listProductsService = async () => {
  const result = await listProducts();
  return result;
};
