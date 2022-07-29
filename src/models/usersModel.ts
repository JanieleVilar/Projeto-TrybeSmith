import { ResultSetHeader } from 'mysql2';
import { User } from '../intefaces';
import connection from './connection';

const addUser = async (user: User) => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?);',
    [username, classe, level, password],
  );
  return { id: result.insertId, username };
};

export default addUser;
