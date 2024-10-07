const joi = require("joi")

const BrandDTO = joi.object({
    title: joi.string().min(3).max(100).required(),
});

module.exports = BrandDTO