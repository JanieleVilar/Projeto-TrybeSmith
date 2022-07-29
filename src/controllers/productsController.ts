import { Request, Response } from 'express';
import { Product } from '../intefaces';
import addProductService from '../services/productsService';

const addProductController = async (req: Request, res: Response) => {
  const product = req.body as Product;
  
  const result = await addProductService(product);
  res.status(201).json(result);
};

export default addProductController;
