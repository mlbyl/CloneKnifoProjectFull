const { validationResult } = require("express-validator")
const { ErrorResponse, SuccessResponse } = require("../helpers/responseHandler")
const userServices = require('../services/UserServices')

const getAllUsers = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  try {
    const allUsers = await userServices.getAllUsers()
    if (allUsers.length === 0) {
      return res.status(404).send(new ErrorResponse('No users founded'))
    }
    return res.status(200).send(new SuccessResponse('Users founded succesfully', allUsers))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

const getUserWithOrderItems = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  console.log("user from request ", req.user)
  const { id } = req.user
  try {
    const userWithOrderItems = await userServices.getUserWithOrderItems(id)
    return res.status(200).send(new SuccessResponse('User founded succesfully', userWithOrderItems))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

const registerUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { firstname, lastname, email, password, role } = req.body
  try {
    const newUser = await userServices.registerUser(firstname, lastname, email, password, role)
    return res.status(201).send(new SuccessResponse('User registered succesfully', newUser))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const loginUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { email, password } = req.body
  try {
    const { user, token } = await userServices.loginUser(email, password)
    return res.status(200).send(new SuccessResponse('User loggined succesfully', { user, token }))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const updateUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const id = req.user.id
  const { firstname, lastname, password, email, role } = req.body
  try {
    const updatedUser = await userServices.updateUser(id, firstname, lastname, email, password, role)
    return res.status(200).send(new SuccessResponse('User updated succesfully', updatedUser))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

const deleteUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array())
  }
  const { id } = req.params
  try {
    const deletedUser = await userServices.deleteUser(id)
    return res.status(200).send(new SuccessResponse('User deleted succesfully', deletedUser))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}



const getUserByFirstName = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { firstname } = req.params
  try {
    const user = await userServices.getUserByFirstName(firstname)
    if (!user) {
      return res.status(404).send(new ErrorResponse('User not found'))
    }
    return res.status(200).send(new SuccessResponse('User founded succesfully', user))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const getUserByLastName = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { lastname } = req.params
  try {
    const user = await userServices.getUserByLastName(lastname)
    if (!user) {
      return res.status(404).send(new ErrorResponse('User not found'))
    }
    return res.status(200).send(new SuccessResponse('User founded succesfully', user))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const getUserByEmail = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { email } = req.params
  try {
    const user = await userServices.getUserByEmail(email)
    if (!user) {
      return res.status(404).send(new ErrorResponse('User not found'))
    }
    return res.status(200).send(new SuccessResponse('User founded succesfully', user))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const getUserById = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const id = req.user.id
  try {
    const user = await userServices.getUserById(id)
    if (!user) {
      return res.status(404).send(new ErrorResponse('User not found'))
    }
    return res.status(200).send(new SuccessResponse('User founded succesfully', user))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

module.exports = {
  getAllUsers, registerUser, loginUser, getUserByFirstName, getUserByLastName,
  getUserByEmail, getUserById, updateUser, deleteUser, getUserWithOrderItems
}