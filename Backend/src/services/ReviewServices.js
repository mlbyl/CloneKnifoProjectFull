const { ErrorResponse } = require('../helpers/responseHandler')
const Product = require('../models/Product')
const Review = require('../models/Review')
const User = require('../models/User')



const createReview = async (rating, comment, productId, userId) => {
  const isProductExists = await Product.findByPk(productId)
  if (!isProductExists) {
    throw new ErrorResponse('Product not found', 404)
  }
  const isUserExists = await User.findByPk(userId)
  if (!isUserExists) {
    throw new ErrorResponse('User not found', 404)
  }
  try {
    const newReview = await Review.create({
      rating,
      comment,
      productId,
      userId
    })
    return newReview
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const updateReview = async (id, newRating, newComment, newProductId, newUserId) => {
  console.log(newComment)
  const isProductExists = await Product.findByPk(newProductId)
  if (!isProductExists) {
    throw new ErrorResponse('Product not found', 404)
  }
  const isUserExists = await User.findByPk(newUserId)
  if (!isUserExists) {
    throw new ErrorResponse('User is not found', 404)
  }
  const updateableReview = await getReviewById(id)
  if (!updateableReview) {
    throw new ErrorResponse('Review not found', 404)
  }
  const { rating, comment } = updateableReview
  if (rating === newRating && comment === newComment) {
    throw new ErrorResponse('No changes made to Review, as provided data identical to the existing data', 400)
  }
  const updatedData = {
    rating: newRating,
    comment: newComment,
    productId: newProductId,
    userId: newUserId
  }
  try {
    const updatedReview = await Review.update(updatedData, {
      where: { id },
      returning: true
    })
    
    return updatedReview[1][0]
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

const getReviewById = async (id) => {
  try {
    const review = await Review.findByPk(id)
    return review
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

const deleteReview = async (id) => {
  const deleteableReview = await Review.findByPk(id)
  if (!deleteableReview) {
    throw new ErrorResponse('Review not found', 404)
  }
  try {
    const deletedReview = await Review.destroy({ where: { id } })
    if (deletedReview === 0) { throw new ErrorResponse('No Review was deleted', 400) }
    return deleteableReview
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

module.exports = { createReview, updateReview, deleteReview, getReviewById }