const { body } = require('express-validator')

const productCreateValidation = [
  body('name')
    .notEmpty().withMessage('Product name is required')
    .isLength({ min: 3, max: 50 }).withMessage('Product name must be between 3 and 50 characters long'),

  body('description')
    .notEmpty().withMessage('Description is required')
    .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long ')
    .isString().withMessage('Description must be String format'),

  body('price')
    .notEmpty().withMessage('Price is required')
    .isFloat({ gt: 0 }).withMessage('Price must be a decimal number greater than zero'),

  body('stock')
    .notEmpty().withMessage('Stock is required')
    .isInt({ gt: -1 }).withMessage('Stock must be a non-negative integer'),

  body('brandId')
    .notEmpty().withMessage('Brand ID is required')
    .isInt().withMessage('Brand ID must be a integer')
]

module.exports = productCreateValidation