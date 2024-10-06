const { ErrorResponse, SuccessResponse } = require("../helpers/responseHandler")
const OrderItem = require("../models/OrderItem")
const Product = require("../models/Product")
const User = require("../models/User")


const getOrderItemByUserIdAndProductId = async (userId, productId) => {
  try {
    const order = await OrderItem.findOne({ where: { userId, productId } })
    return order
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode)
  }
}

const createOrderItem = async (userId, price, productId, quantity) => {
  const order = await getOrderItemByUserIdAndProductId(userId, productId)
  const isUserExists = await User.findByPk(userId)
  if (!isUserExists) {
    throw new ErrorResponse('User does not exist', 400)
  }
  const isProductExists = await Product.findByPk(productId)
  if (!isProductExists) {
    throw new ErrorResponse('Product does not exist', 400)
  }
  if (order && order.userId === userId && order.productId === productId) { // if the order user and order product are the same in the database, the product is only updated
    const updatedOrderItem = await updateOrderItem(order.id, userId, price, productId, quantity)
    return new SuccessResponse('Order item updated succesfully', updatedOrderItem)
  }

  const totalPrice = price * quantity
  try {
    const newOrderItem = await OrderItem.create({
      userId,
      quantity,
      price,
      productId,
      totalPrice
    })
    return newOrderItem
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode)
  }

}
const updateOrderItem = async (id, userId, price, productId, quantity) => {
  const dbData = await getOrderItemByUserIdAndProductId(userId, productId)
  const totalPrice = price * quantity
  const updatedData = {
    userId: userId,
    quantity: dbData.quantity + quantity,//each quantity will collected with in database one  
    price: price,
    totalPrice,
    productId: productId,
  }
  try {
    const updatedOrderItem = await OrderItem.update(updatedData, {
      where: { id },
      returning: true
    })
    return updatedOrderItem[1][0]
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode)
  }
}
const deleteOrderItem = async (id) => {
  const deleteableOrderItem = await OrderItem.findByPk(id)
  if (!deleteableOrderItem) {
    throw new ErrorResponse('Order item not found', 404)
  }
  try {
    const deletedOrderItem = await OrderItem.destroy({ where: { id } })
    if (deletedOrderItem === 0)
      throw new ErrorResponse('No Order item was deleted', 400)
    return deleteableOrderItem
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

module.exports = { createOrderItem, deleteOrderItem, updateOrderItem }