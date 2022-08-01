import createToken from '../helpers/createToken';
import { User } from '../intefaces';
import addUser from '../models/usersModel';
import validateUsername from '../schemas/userSchema';

const addUserService = async (user: User) => {
  const { error } = validateUsername.validate(user);
  if (error?.message.includes('required')) {
    return { status: 400, message: error.message };
  }
  if (error) {
    return { status: 422, message: error.message };
  }
  const { id, username } = await addUser(user);
  const token = createToken({ id, username });
  return { status: 201, token };
};

export default addUserService;
