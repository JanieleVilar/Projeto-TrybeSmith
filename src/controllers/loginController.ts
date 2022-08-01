import { Request, Response } from 'express';
import { Login } from '../intefaces';
import loginService from '../services/loginService';

const loginController = async (req: Request, res: Response) => {
  const loginUser = req.body as Login;
  const { status, message, token } = await loginService(loginUser);
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json({ token });
};

export default loginController;
