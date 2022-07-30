import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getOrders = async () => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS prod
    ON prod.orderId = ord.id
    GROUP BY ord.id
    ORDER BY ord.userId;`,
  );
  return result;
};

export default getOrders;
