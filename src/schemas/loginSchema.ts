import Joi from 'joi';

const message1 = '"username" is required';
const message2 = '"password" is required';

const validateLogin = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': message1,
    'string.required': message1,
  }),
  password: Joi.string().required().messages({
    'string.required': message2,
    'string.empty': message2,
  }),
});

export default validateLogin;
