import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../intefaces';

export const addProduct = async (product: Product) => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id: result.insertId, name, amount };
};

export const listProducts = async () => {
  const [result] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products;');
  return result;
};
