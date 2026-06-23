import Joi from "joi";

export const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
});

export const addCommentSchema = Joi.object({
  text: Joi.string().required(),
  author: Joi.string().required(),
});
