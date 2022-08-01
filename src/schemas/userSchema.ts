import Joi from 'joi';

const userNameIsRequired = '"username" is required';
const usernameMustBeAString = '"username" must be a string';
const usernameLength = '"username" length must be at least 3 characters long';
const classeMustBeAString = '"classe" must be a string';
const classeIsRequired = '"classe" is required';
const classeLength = '"classe" length must be at least 3 characters long';
const levelIsRequired = '"level" is required';
const levelPositive = '"level" must be greater than or equal to 1';
const levelIsNumber = '"level" must be a number';
const passMustBeAString = '"password" must be a string';
const passIsRequired = '"password" is required';
const passLength = '"password" length must be at least 8 characters long';

const validateUsername = Joi.object({
  username: Joi.string().required().min(3).messages({
    'string.title': usernameMustBeAString,
    'string.required': userNameIsRequired,
    'string.min': usernameLength,
  }),
  classe: Joi.string().required().min(3).messages({
    'string.title': classeMustBeAString,
    'string.required': classeIsRequired,
    'string.min': classeLength,
  }),
  level: Joi.number().required().positive().messages({
    'number.required': levelIsRequired,
    'number.positive': levelPositive,
    'number.base': levelIsNumber,
  }),
  password: Joi.string().required().min(8).messages({
    'string.title': passMustBeAString,
    'string.required': passIsRequired,
    'string.min': passLength,
  }),
});

export default validateUsername;
