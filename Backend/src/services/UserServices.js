const { ErrorResponse, SuccessResponse } = require('../helpers/responseHandler')
const Image = require('../models/Image')
const OrderItem = require('../models/OrderItem')
const Product = require('../models/Product')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll({ attributes: { exclude: 'password' } })
    return allUsers
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getUserWithOrderItems = async (id) => {
  try {
    // const UserWithOrderItems = await User.findByPk(id, { include: [{ model: OrderItem, include: [{ model: Product}] }] })//veri guud join here 
    const UserWithOrderItems = await User.findByPk(id, {
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
              attributes:['name'],
              include: [
                {
                  model: Image,
                  where: { isMain: true },
                  attributes:['url']
                }
              ]
            }
          ]
        }
      ]
    })
    const { password: _, ...UserWithoutPassword } = UserWithOrderItems.toJSON()
    return UserWithoutPassword
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const registerUser = async (firstname, lastname, email, password, role) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  const isEmailexist = await getUserByEmail(email)
  if (isEmailexist) {
    throw new ErrorResponse('Email already exist', 400)
  }
  try {
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role
    })
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
    const { password: _, ...newUserWithoutPassword } = newUser.toJSON()
    return { user: newUserWithoutPassword, token }
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new ErrorResponse('A User with the same Firstname and Lastname already exists', 400)
    }
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } })
  if (!user) {
    throw new ErrorResponse('User not found', 404)
  }
  const checkPassword = await bcrypt.compare(password, user.password)
  if (!checkPassword) {
    throw new ErrorResponse('Incorrect Password', 400)
  }
  try {
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
    const { password: _, ...userWithoutPassword } = user.toJSON()
    return { user: userWithoutPassword, token }
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const updateUser = async (id, newFirstname, newLastname, newEmail, newPassword, newRole) => {
  const updateableUser = await User.findOne({ where: { id } })
  if (!updateableUser) {
    throw new ErrorResponse('User not found', 404)
  }
  let isPasswordSame = true
  const { firstname, lastname, email, password, role } = updateableUser
  const hashedPassword = newPassword ? await bcrypt.hash(newPassword, 10) : password
  isPasswordSame = await bcrypt.compare(newPassword, password)
  if (
    firstname === newFirstname &&
    lastname === newLastname &&
    email === newEmail &&
    role === newRole &&
    isPasswordSame
  ) {
    throw new ErrorResponse('No changes made to User, as the provided data is identical to the existing data', 400)

  }
  const updatedData = {
    firstname: newFirstname || firstname,
    lastname: newLastname || lastname,
    email: newEmail || email,
    password: hashedPassword || password,
    role: newRole || role
  }
  try {
    const updatedUser = await User.update(updatedData, {
      where: { id },
      returning: true,
      individualHooks: true
    })
    const updatedUserTable = updatedUser[1][0]
    const { password: _, ...updatedUserWithoutPassword } = updatedUserTable.toJSON()
    return updatedUserWithoutPassword
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const deleteUser = async (id) => {
  const deleteableUser = await getUserById(id)
  if (!deleteableUser) {
    throw new ErrorResponse('User not found', 404)
  }
  try {
    const deletedUser = await User.destroy({ where: { id } })
    if (deletedUser === 0) {
      throw new ErrorResponse('No User was deleted', 400)
    }
    return deleteableUser
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode)
  }
}
const findUser = async (field) => {
  try {
    const user = await User.findOne({ where: field, attributes: { exclude: 'password' } })
    return user || null
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getUserByFirstName = (firstname) => findUser({ firstname })
const getUserByLastName = (lastname) => findUser({ lastname })
const getUserByEmail = (email) => findUser({ email })
const getUserById = (id) => findUser({ id })




module.exports = {
  getAllUsers, getUserByEmail, getUserByFirstName, getUserByLastName, getUserById,
  registerUser, loginUser, updateUser, deleteUser, getUserWithOrderItems
}