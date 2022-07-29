import { Request, Response } from 'express';
import { User } from '../intefaces';
import addUserService from '../services/usersService';

const addUserController = async (req: Request, res: Response) => {
  const user = req.body as User;
  const result = await addUserService(user);
  res.status(201).json(result);
};

export default addUserController;
