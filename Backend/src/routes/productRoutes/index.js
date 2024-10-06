const express = require('express')
const router = express.Router()
const productControllers = require('../../controllers/productControllers')
const productNameValidation = require('../../middlewares/Product-Validations/productNameValidation')
const productIdValidation = require('../../middlewares/Product-Validations/productIdValidation')
const productCreateValidation = require('../../middlewares/Product-Validations/productCreateValidation')
const productUpdateValidation = require('../../middlewares/Product-Validations/productUpdateValidation')

router.get('/', productControllers.getAllProducts)
router.get('/productswithimages',productControllers.getAllProductsWithImages)
router.get('/productbyname/:name', productNameValidation, productControllers.getProductByName)
router.get('/productbyid/:id', productIdValidation, productControllers.getProductById)
router.post('/create', productCreateValidation, productControllers.createProduct)
router.post('/update/:id', productUpdateValidation, productControllers.updateProduct)
router.delete('/delete/:id', productIdValidation, productControllers.deleteProduct)

module.exports = router