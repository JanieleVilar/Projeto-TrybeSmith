import express from 'express';
import routerProducts from './routes/productsRoutes';
import routerUsers from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);

app.use('/users', routerUsers);

export default app;
