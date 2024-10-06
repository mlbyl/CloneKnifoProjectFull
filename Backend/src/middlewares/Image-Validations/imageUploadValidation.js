const { check, body } = require('express-validator')
const { ErrorResponse } = require('../../helpers/responseHandler')

const imageUploadValidator = [
  body('file')
    .notEmpty().withMessage('File is required to upload'),
  body('isMain')
    .notEmpty().withMessage('isMain field is required')
    .isBoolean().withMessage('isMain field must be a boolean')
];


module.exports = imageUploadValidator