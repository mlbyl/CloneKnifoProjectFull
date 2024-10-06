const { param } = require('express-validator')

const orderItemDeleteValidator = [
  param("id")
    .isInt({ min: 1 }).withMessage('Id must be a positive number')
]

module.exports=orderItemDeleteValidator