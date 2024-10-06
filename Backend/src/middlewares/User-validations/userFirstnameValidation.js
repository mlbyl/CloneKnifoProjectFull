const { param } = require('express-validator')

const userFirstnameValidation = [
  param('firstname')
    .trim()
    .isLength({ min: 3, max: 50 }).withMessage('Firstname must be between 3 and 50 character long.'),

]

module.exports = userFirstnameValidation