const { param } = require('express-validator')

const reviewIdValidator = [
  param('id')
    .isInt({ min: 1 }).withMessage('Id must be a positive number '),
]

module.exports = reviewIdValidator