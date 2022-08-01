import Joi from 'joi';

const nameIsRequired = '"name" is required';
const nameMustBeAString = '"name" must be a string';
const nameLength = '"name" length must be at least 3 characters long';
const amountIsRequired = '"amount" is required';
const amounMustBeAString = '"amount" must be a string';
const amountLength = '"amount" length must be at least 3 characters long';

const validateProductInfos = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.title': nameMustBeAString,
    'string.min': nameLength,
    'string.required': nameIsRequired,
  }),
  amount: Joi.string().min(3).required().messages({
    'string.required': amountIsRequired,
    'string.title': amounMustBeAString,
    'string.min': amountLength,
  }),
});

export default validateProductInfos;
