import getOrders from '../models/ordersModel';

const getOrdersService = async () => {
  const result = await getOrders();
  return result;  
};

export default getOrdersService;
