const { body } = require('express-validator')
const brandCreateValidation = [
  body('name')
    .notEmpty().withMessage('Brand name required')
    .isLength({ min: 3, max: 50 }).withMessage('Brand name must be between 3 and 50 characters long')
]
module.exports = brandCreateValidation