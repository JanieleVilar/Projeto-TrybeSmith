import { Request, Response } from 'express';
import { Product } from '../intefaces';
import { addProductService, listProductsService } from '../services/productsService';

export const addProductController = async (req: Request, res: Response) => {
  const product = req.body as Product;
  
  const result = await addProductService(product);
  res.status(201).json(result);
};

export const listProducts = async (_req: Request, res: Response) => {
  const result = await listProductsService();
  res.json(result);
};