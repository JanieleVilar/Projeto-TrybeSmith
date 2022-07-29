import express from 'express';
import { addProductController, listProducts } from '../controllers/productsController';

const routerProducts = express.Router();

routerProducts.post('/', addProductController);

routerProducts.get('/', listProducts);

export default routerProducts;
