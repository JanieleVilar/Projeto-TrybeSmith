import jwt from 'jsonwebtoken';
import { Token } from '../intefaces';

const jwtSecret = 'password';

const createToken = (data: Token) => {
  const token = jwt.sign(data, jwtSecret, {
    expiresIn: '5h',
    algorithm: 'HS256',
  });
  return token;
};

export default createToken;
