const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../../middlewares/imageUploadMiddleware')
const imageControllers = require('../../controllers/imageControllers')
const imageUploadValidator = require('../../middlewares/Image-Validations/imageUploadValidation')
const imageIdValidator = require('../../middlewares/Image-Validations/imageIdValidation')

router.get('/imagebyid/:id', imageIdValidator, imageControllers.getImageById)
router.post('/upload', imageUploadValidator, uploadMiddleware.single('image'), imageControllers.uploadImage)
router.delete('/delete/:id', imageIdValidator, imageControllers.deleteImage)

module.exports = router