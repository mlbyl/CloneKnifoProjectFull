const { param } = require('express-validator')

const brandNameValidator = [
  param('name')
    .trim()
    .isLength({ min: 3, max: 50 }).withMessage('Brand name must be between 3 and 50 characters long')
]
module.exports = brandNameValidator