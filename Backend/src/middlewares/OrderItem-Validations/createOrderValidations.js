const { body } = require('express-validator')

const OrderItemCreateValidator = [
  body('userId')
    .notEmpty().withMessage('User ID is required')
    .isInt().withMessage('User ID must be a integer'),
  body('price')
    .notEmpty().withMessage('Price is required')
    .isFloat({ gt: 0 }).withMessage('Price must be a decimal number greater than zero'),

  body('quantity')
    .notEmpty().withMessage('Quantity is required')
    .isInt({ gt: 0 }).withMessage('Quantity must be a non-negative integer'),

  body('productId')
    .notEmpty().withMessage('Product ID is required')
    .isInt().withMessage('Product ID must be a integer')
]

module.exports = OrderItemCreateValidator