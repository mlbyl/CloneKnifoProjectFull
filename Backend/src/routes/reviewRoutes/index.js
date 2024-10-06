const express = require('express')
const router = express.Router()
const reviewControllers = require('../../controllers/reviewControllers')
const reviewIdValidator = require('../../middlewares/Review-Validations/reviewIdValidation')
const reviewUpdateValidator = require('../../middlewares/Review-Validations/reviewUpdateValidations')
const reviewCreateValidator = require('../../middlewares/Review-Validations/reviewCreateValidation')

router.get('/:id', reviewIdValidator, reviewControllers.getReviewById)
router.post('/create', reviewCreateValidator, reviewControllers.createReview)
router.post('/update/:id', reviewUpdateValidator, reviewControllers.updateReview)
router.delete('/delete/:id', reviewIdValidator, reviewControllers.deleteReview)


module.exports = router