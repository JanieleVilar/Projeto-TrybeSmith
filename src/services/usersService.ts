import createToken from '../helpers/createToken';
import { User } from '../intefaces';
import addUser from '../models/usersModel';

const addUserService = async (user: User) => {
  const { id, username } = await addUser(user);
  const token = createToken({ id, username });
  return { token };
};

export default addUserService;
