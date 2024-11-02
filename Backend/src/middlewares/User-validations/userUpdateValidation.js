const { body, param } = require('express-validator')

const userUpdateValidator = [
  body('firstname')
    .optional()
    .notEmpty().withMessage('Firstname is required.')
    .isLength({ min: 3, max: 50 }).withMessage('Firstname must be between 3 and 50 character long.'),

  body('lastname')
    .optional()
    .notEmpty().withMessage('Lastname is required.')
    .isLength({ min: 3, max: 50 }).withMessage('Lastname must be between 3 and 50 characters long.'),

  body('email')
    .isEmail().withMessage('Please enter a valid email.')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 8, max: 64 }).withMessage('Password must be between 8 and 64 characters long.')
    .matches(/[a-zA-Z]/).withMessage('Password must contain at least one letter.')
    .matches(/\d/).withMessage('Password must contain at least one number.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character.'),
]


module.exports = userUpdateValidator