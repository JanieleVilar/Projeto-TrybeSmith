import { RowDataPacket } from 'mysql2';
import { Login } from '../intefaces';
import connection from './connection';

const login = async (loginUser: Login) => {
  const { username, password } = loginUser;
  const [[result]] = await connection.execute<RowDataPacket[]>(
    `SELECT id, username FROM Trybesmith.Users
      WHERE username = ? AND password = ?;`,
    [username, password],
  );
  
  return result;
};

export default login;