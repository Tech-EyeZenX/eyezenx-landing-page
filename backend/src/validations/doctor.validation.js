import Joi from "joi";

export const doctorSignupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    licenseNumber: Joi.string().required(),
    specialty: Joi.string().required(),
    experience: Joi.number().min(0).required(),
    role: Joi.string().valid("doctor").default("doctor")
})


export const doctorLoginSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().required()
})

