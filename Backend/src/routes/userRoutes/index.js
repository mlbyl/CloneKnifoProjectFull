const express = require('express')
const router = express.Router()
const userControllers = require('../../controllers/userController')
const userRegisterValidator = require('../../middlewares/User-validations/userRegistertrationValidation')
const userLoginValidator = require('../../middlewares/User-validations/userLoginValidation')
const userFirstNameValidator = require('../../middlewares/User-validations/userFirstnameValidation')
const userLastnameValidation = require('../../middlewares/User-validations/userLastnameValidation')
const userEmailValidation = require('../../middlewares/User-validations/userEmailValidation')
const userIdValidation = require('../../middlewares/User-validations/userIdValidation')
const authMiddleware = require('../../middlewares/authMiddleware')
const userUpdateValidator = require('../../middlewares/User-validations/userUpdateValidation')


router.get('/userwithorderitems/',authMiddleware,userControllers.getUserWithOrderItems)

router.get('/', userControllers.getAllUsers)
router.get('/userbyfirstname/:firstname', userFirstNameValidator, userControllers.getUserByFirstName)
router.get('/userbylastname/:lastname', userLastnameValidation, userControllers.getUserByLastName)
router.get('/userbyemail/:email', userEmailValidation, userControllers.getUserByEmail)
router.get('/userbyid/', authMiddleware, userControllers.getUserById)
router.post('/register', userRegisterValidator, userControllers.registerUser)
router.post('/login', userLoginValidator, userControllers.loginUser)
router.put('/update/',authMiddleware, userUpdateValidator, userControllers.updateUser)
router.delete('/delete/:id', userIdValidation, userControllers.deleteUser)


module.exports = router