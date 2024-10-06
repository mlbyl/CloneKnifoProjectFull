const { validationResult } = require("express-validator")
const { ErrorResponse, SuccessResponse } = require("../helpers/responseHandler")
const reviewServices = require('../services/ReviewServices')

const createReview = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { comment, rating, productId, userId } = req.body
  try {
    const newReview = await reviewServices.createReview(rating, comment, productId, userId)
    return res.status(201).send(new SuccessResponse('Review created succesfully', newReview))
  } catch (error) {
    return res.status(error.statusCode||500).send(new ErrorResponse(error.message))
  }
}

const updateReview = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  const { comment, rating, userId, productId } = req.body
  try {
    const updatedReview = await reviewServices.updateReview(id, rating, comment, productId, userId)
    return res.status(200).send(new SuccessResponse('Review updated succesfully', updatedReview))
  } catch (error) {
    
    return res.status(error.statusCode||500).send(new ErrorResponse(error.message))
  }
}
const deleteReview = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const deletedReview = await reviewServices.deleteReview(id)
    return errors.status(200).send(new SuccessResponse('Review deleted succesfully', deletedReview))
  } catch (error) {
    return res.status(error.statusCode||500).send(new ErrorResponse(error.message))
  }
}

const getReviewById = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const review = await reviewServices.getReviewById(id)
    if (!review) {
      return res.status(404).send(new ErrorResponse('Review not found'))
    }
    return res.status(200).send(new SuccessResponse('Review found succesfully', review))
  } catch (error) {
    return res.status(error.statusCode||500).send(new ErrorResponse(error.message))
  }
}

module.exports = { getReviewById, updateReview, deleteReview, createReview }