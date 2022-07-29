import express from 'express';
import addProductController from '../controllers/productsController';

const routerProducts = express.Router();

routerProducts.post('/', addProductController);

export default routerProducts;
