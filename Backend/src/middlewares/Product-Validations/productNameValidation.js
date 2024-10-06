const { param } = require('express-validator')

const productNameValidation = [
  param('name')
    .trim()
    .isLength({ min: 3, max: 50 }).withMessage('Product name must be between 3 and 50 characters long')
]
module.exports = productNameValidation