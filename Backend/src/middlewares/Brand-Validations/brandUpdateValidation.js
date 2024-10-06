const { body, param } = require('express-validator')

const brandUpdateValidator = [
  param('id')
    .isInt({ min: 1 }).withMessage('Id must be a positive number'),

  body('name')
    .notEmpty().withMessage('Brand name is required')
    .isLength({ min: 3, max: 50 }).withMessage('Brand name must be between 3 and 50 characters long ')
]
module.exports = brandUpdateValidator