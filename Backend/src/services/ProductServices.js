const { ErrorResponse } = require('../helpers/responseHandler')
const Brand = require('../models/Brand')
const Product = require('../models/Product')
const Image = require('../models/Image')

const getAllProducts = async () => {
  try {
    const allProdcuts = await Product.findAll()
    return allProdcuts
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getAllProductsWithImages = async () => {

  try {
    const allProdcuts = await Product.findAll({ include: { model: Image, where: { isMain: true } } })
    return allProdcuts
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }

}
const getProductByName = async (name) => {
  try {
    const product = await Product.findOne({ where: { name } })
    return product
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode)
  }
}
const getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id, { include: [{ model: Image }, { model: Brand }] })
    // const product = await Product.findOne({ where: { id } })
    return product
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode)
  }
}

const createProduct = async (name, description, price, stock, brandId) => {
  const isBrandExists = await Brand.findByPk(brandId)
  if (!isBrandExists) {
    throw new ErrorResponse('Brand does not exist', 400)
  }
  const isProductExists = await Product.findOne({ where: { name, brandId } })
  if (isProductExists) {
    throw new ErrorResponse('Product already exists', 400)
  }
  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      brandId
    })
    return newProduct
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode)
  }
}
const updateProduct = async (id, newName, newDescription, newPrice, newStock, newBrandId) => {
  const isBrandExists = await Brand.findByPk(newBrandId)
  if (!isBrandExists) {
    throw new ErrorResponse('Brand does not exist', 400)
  }
  const updateableProduct = await getProductById(id)
  if (!updateableProduct) {
    throw new ErrorResponse('Product not found', 404)
  }
  const { name, description, price, stock, brandId } = updateableProduct
  const formattedPrice = parseFloat(price).toFixed(2)
  const formattedNewPrice = parseFloat(newPrice).toFixed(2)

  if (name === newName && description === newDescription && formattedPrice === formattedNewPrice && stock === newStock && brandId === newBrandId) {
    throw new ErrorResponse('No changes made to Product, as the provided data identical to the existing data', 400)
  }
  const updatedData = {
    name: newName,
    description: newDescription,
    price: newPrice,
    stock: newStock,
    brandId: newBrandId
  }
  try {
    const updatedProduct = await Product.update(updatedData, {
      where: { id },
      returning: true
    })
    return updatedProduct[1][0]
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const deleteProduct = async (id) => {
  const deleteableProduct = await getProductById(id)
  if (!deleteableProduct) {
    throw new ErrorResponse('Product not found', 404)
  }
  try {
    const deletedProduct = await Product.destroy({ where: { id } })
    if (deletedProduct === 0)
      throw new ErrorResponse('No Product was deleted', 400)
    return deleteableProduct
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
module.exports = { getAllProducts, getAllProductsWithImages, getProductById, getProductByName, createProduct, updateProduct, deleteProduct }