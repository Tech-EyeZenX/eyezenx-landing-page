import Joi from "joi"
export const adminSignupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    address: Joi.string().optional(),
    phone: Joi.string().optional(),
    role: Joi.string().valid("admin").default("admin")
});



export const adminLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
