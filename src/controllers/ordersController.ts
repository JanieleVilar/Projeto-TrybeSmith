import { Request, Response } from 'express';
import getOrdersService from '../services/ordersService';

const getOrdersController = async (_req: Request, res: Response) => {
  const result = await getOrdersService();
  res.json(result);
};

export default getOrdersController;
