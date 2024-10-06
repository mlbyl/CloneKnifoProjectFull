const express = require('express')
const router = express.Router()
const orderItemControllers = require('../../controllers/orderItemControllers')
const OrderItemCreateValidator = require('../../middlewares/OrderItem-Validations/createOrderValidations')
const orderItemUpdateValidator= require('../../middlewares/OrderItem-Validations/updateOrderItemValidation')
const orderItemDeleteValidator = require('../../middlewares/OrderItem-Validations/deleteOrderItemValidations')

router.post("/create", OrderItemCreateValidator, orderItemControllers.createOrderItem)
router.delete('/delete/:id',orderItemDeleteValidator, orderItemControllers.deleteOrderItem)
router.put('/update/:id',orderItemUpdateValidator, orderItemControllers.updateOrderItem)

module.exports = router
