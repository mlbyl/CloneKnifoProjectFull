const express = require('express')
const router = express.Router()
const brandControllers = require('../../controllers/brandController')
const brandNameValidator = require('../../middlewares/Brand-Validations/brandNameValidation')
const brandUpdateValidation = require('../../middlewares/Brand-Validations/brandUpdateValidation')
const brandIdValidation = require('../../middlewares/Brand-Validations/brandIdValidation')
const brandCreateValidatior = require('../../middlewares/Brand-Validations/brandCreateValidation')

router.get('/', brandControllers.getAllBrands)
router.get('/brandbyid/:id', brandIdValidation, brandControllers.getBrandById)
router.get('/brandbyname/:name', brandNameValidator, brandControllers.getBrandByName)
router.post('/create', brandCreateValidatior, brandControllers.createBrand)
router.post('/update/:id', brandUpdateValidation, brandControllers.updateBrand)
router.delete('/delete/:id', brandIdValidation, brandControllers.deleteBrand)

module.exports = router