import express from 'express';
import routerProducts from './routes/productsRoutes';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);

export default app;
