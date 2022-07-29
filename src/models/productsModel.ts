import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../intefaces';

const addProduct = async (product: Product) => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products(name, amount)
    VALUES (?, ?);
    `,
    [name, amount],
  );
  return { id: result.insertId, name, amount };
};

export default addProduct;
