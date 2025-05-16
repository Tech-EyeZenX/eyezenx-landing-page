import Joi from "joi"
export const shopOwnerSignupSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required(),
    address:Joi.string().required(),
    phone:Joi.string().required(),
    role:Joi.string().valid("shop_owner").default("shop_owner")
})


export const showOwnerLoginSchema = Joi.object({
    email:Joi.string().email()
.required(),
password:Joi.string().required()
})