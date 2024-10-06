const { SuccessResponse, ErrorResponse } = require('../helpers/responseHandler')
const orderItemServices = require('../services/OrderItemServices')
const { validationResult } = require('express-validator')





const createOrderItem = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { userId, price, productId, quantity } = req.body
  try {
    const newOrderItem = await orderItemServices.createOrderItem(userId, price, productId, quantity)
    if (newOrderItem.status) {
      return res.status(200).send(new SuccessResponse(newOrderItem.message, newOrderItem.data))
    }
    return res.status(201).send(new SuccessResponse('Order item created succesfully', newOrderItem))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const updateOrderItem = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  const { userId, price, productId, quantity } = req.body
  try {
    const updatedOrderItem = await orderItemServices.updateOrderItem(id, userId, price, productId, quantity)
    return res.status(200).send(new SuccessResponse('Order item updated succesfully', updatedOrderItem))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const deleteOrderItem = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const deletedOrderItem = await orderItemServices.deleteOrderItem(id)
    return res.status(200).send(new SuccessResponse('Order item deleted succesfully', deletedOrderItem))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}

module.exports = { createOrderItem, deleteOrderItem, updateOrderItem }