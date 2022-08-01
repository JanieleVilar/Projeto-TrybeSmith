import express from 'express';
import routerLogin from './routes/loginRoutes';
import routerOrders from './routes/ordersRoutes';
import routerProducts from './routes/productsRoutes';
import routerUsers from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);

app.use('/users', routerUsers);

app.use('/orders', routerOrders);

app.use('/login', routerLogin);

export default app;
