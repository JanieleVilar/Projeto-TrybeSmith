import express from 'express';
import getOrdersController from '../controllers/ordersController';

const routerOrders = express.Router();

routerOrders.get('/', getOrdersController);

export default routerOrders;
