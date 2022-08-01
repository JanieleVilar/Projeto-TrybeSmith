import { Request, Response } from 'express';
import { User } from '../intefaces';
import addUserService from '../services/usersService';

const addUserController = async (req: Request, res: Response) => {
  const user = req.body as User;
  const { status, message, token } = await addUserService(user);
  if (message) {
    return res.status(status).json({ message }); 
  }
  return res.status(status).json({ token });
};

export default addUserController;
