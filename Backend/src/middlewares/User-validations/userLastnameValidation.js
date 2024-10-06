const { param } = require('express-validator')

const userLastnameValidation = [
  param('lastname')
    .trim()
    .isLength({ min: 3, max: 50 }).withMessage('Lastname must be between 3 and 50 character long.'),
]

module.exports = userLastnameValidation