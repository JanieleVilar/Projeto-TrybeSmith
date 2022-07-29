import express from 'express';
import addUserController from '../controllers/usersController';

const routerUsers = express.Router();

routerUsers.post('/', addUserController);

export default routerUsers;
