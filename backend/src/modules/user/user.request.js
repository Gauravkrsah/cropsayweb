const Joi = require("joi");

const userCreateDTO = Joi.object({
    name : Joi.string().regex(/^[a-zA-Z\s]+$/i).min(2).max(50).required(),
    email : Joi.string().email().required().messages({
        "string.email" : "Email must have a valid format"
    }),
    address :Joi.string().optional(),
    phone : Joi.string().min(10).max(15).optional(),
    password : Joi.string().regex(/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/).required().messages({
        "string.pattern.base" : "password must contain small letter, capital letter, number and special character"
    }),
    confirmPassword : Joi.string().equal(Joi.ref('password')).required().messages({
        "any.only" : "password and confirm password should match"
    }),
 
    image :Joi.array(),
    role : Joi.string().messages({
        "string.pattern.base" : "Role should be admin or customer"
    }),
    wishlist: Joi.array().items(Joi.string()).optional()

})

PasswordUpdateDTO = Joi.object({
    password : Joi.string().regex(/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/).required().messages({
        "string.pattern.base" : "password must contain small letter, capital letter, number and special character"
    }),
    confirmPassword : Joi.string().equal(Joi.ref('password')).required().messages({
        "any.only" : "password and confirm password should match"
    }),
})

module.exports = {
    userCreateDTO,
    PasswordUpdateDTO
}