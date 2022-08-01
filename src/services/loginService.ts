import createToken from '../helpers/createToken';
import { Login } from '../intefaces';
import login from '../models/loginModel';
import validateLogin from '../schemas/loginSchema';

const loginService = async (loginUser: Login) => {
  const { error } = validateLogin.validate(loginUser);
  if (error) {
    return { status: 400, message: error.message };
  }

  const result = await login(loginUser);
  
  if (!result) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const token = createToken({ id: result.id, username: result.username });
  return { status: 200, token };
};

export default loginService;
