import * as Joi from 'joi';
export const JoiValidationSchema = Joi.object({
  DATABASE_MONGO: Joi.required(),
  APP_PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(6)
});