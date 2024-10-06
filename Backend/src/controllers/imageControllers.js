const { validationResult } = require('express-validator')
const { SuccessResponse, ErrorResponse } = require('../helpers/responseHandler')
const imageServices = require('../services/imageServices')

const uploadImage = async (req, res) => {
  const { isMain } = req.body
  if (!req.file) {
    return res.status(400).send(new ErrorResponse('File is required to upload'))
  }
  if (typeof req.body.isMain === 'undefined') {
    return res.status(400).send(new ErrorResponse('isMain field is required'))
  }
  if (req.body.isMain !== 'true' && req.body.isMain !== 'false') {
    return res.status(400).send(new ErrorResponse('isMain field must be a boolean'))
  }
  if (typeof req.body.productId === 'undefined') {
    return res.status(400).send(new ErrorResponse('Product id is required'))
  }
  const productId = Number(req.body.productId)
  if (isNaN(productId) || productId <= 0) {
    return res.status(400).send(new ErrorResponse('Product id must be a positive number '))
  }


  try {
    const image = await imageServices.uploadImage(req.file, productId, isMain)
    if (isMain === true) {
      return res.status(201).send(new SuccessResponse('Main image uploaded succesfully', image))
    }
    return res.status(201).send(new SuccessResponse('Image uploaded succesfully', image))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const deleteImage = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const deletedImage = await imageServices.deleteImage(id)
    return res.status(200).send(new SuccessResponse('Image deleted succesfully', deletedImage))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const getImageById = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const image = await imageServices.getImageById(id)
    return res.status(200).send(new SuccessResponse('Image found succesfully', image))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
module.exports = { uploadImage, deleteImage, getImageById }