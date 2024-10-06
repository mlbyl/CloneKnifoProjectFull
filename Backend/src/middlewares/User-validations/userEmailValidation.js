const { param } = require('express-validator')

const userEmailValidation = [
  param('email')
    .isEmail().withMessage('Please enter a valid email.')
]

module.exports = userEmailValidation