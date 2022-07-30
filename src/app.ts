import express from 'express';
import routerOrders from './routes/ordersRoutes';
import routerProducts from './routes/productsRoutes';
import routerUsers from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);

app.use('/users', routerUsers);

app.use('/orders', routerOrders);

export default app;
