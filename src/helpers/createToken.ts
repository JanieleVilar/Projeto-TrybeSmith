import jwt from 'jsonwebtoken';

const jwtSecret = 'password';

const createToken = (data: object) => {
  const token = jwt.sign(data, jwtSecret, {
    expiresIn: '5h',
    algorithm: 'HS256',
  });
  return token;
};

export default createToken;
