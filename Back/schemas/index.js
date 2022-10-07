'use strict';
const Joi = require('joi');

//Validación registro nuevo usuaio.
const registrationSchema = Joi.object().keys({
  email: Joi.string()
    .required()
    .email()
    .max(100)
    .messages(new Error('The email must be a valid email')),
  password: Joi.string()
    .required()
    .regex(/^\S+$/)
    .min(6)
    .max(20)
    .error(
      new Error(
        'Password length not correct, remember it must have a length between 6-20 without empty spaces'
      )
    ),
});



//Validación nueva contraseña
const newPasswordSchema = Joi.string()
  .required()
  .regex(/^\S+$/)
  .min(6)
  .max(20)
  .error(
    new Error(
      'Password not correct, remember it must have a length between 6-20 without empty spaces '
    )
  );

//Validación actualización datos usuario
const editUserSchema = Joi.object().keys({
  name: Joi.string()
    .optional()
    .max(50)
    .error(
      new Error(
        'The length name is not correct it must be less 50 characters long'
      )
    ),
  email: Joi.string().required().email().max(100).messages({
    'string.email': 'The email must be a valid email',
    'any.required': 'The email is required',
  }),
});
module.exports = {
  registrationSchema,
  newPasswordSchema,
  editUserSchema,
};