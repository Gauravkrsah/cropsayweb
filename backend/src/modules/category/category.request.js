const joi = require("joi")

const CategoryDTO = joi.object({
    title: joi.string().min(3).max(100).required(),
});

module.exports = CategoryDTO