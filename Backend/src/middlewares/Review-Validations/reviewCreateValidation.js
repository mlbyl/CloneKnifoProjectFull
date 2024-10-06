const { body } = require('express-validator')

const reviewCreateValidator = [
  body('comment')
    .optional(),

  body('rating')
    .notEmpty().withMessage('Rating is required')
    .isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),

  body('productId')
    .notEmpty().withMessage('Product id is required')
    .isInt({ min: 1 }).withMessage('Product id must be a positive number'),

  body('userId')
    .notEmpty().withMessage('User id is required')
    .isInt({ min: 1 }).withMessage('User id must be a positive number ')
]

module.exports = reviewCreateValidator