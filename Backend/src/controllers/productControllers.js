const { validationResult } = require('express-validator')
const productServices = require('../services/ProductServices')
const { ErrorResponse, SuccessResponse } = require('../helpers/responseHandler')

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productServices.getAllProducts()
    if (allProducts.length === 0) {
      return res.status(404).send(new ErrorResponse('No Products found'))
    }
    return res.status(200).send(new SuccessResponse('Products founded succesfully', allProducts))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const getAllProductsWithImages = async (req, res) => {
  try {
    const allProducts = await productServices.getAllProductsWithImages()
    if (allProducts.length === 0) {
      return res.status(404).send(new ErrorResponse('No Products found'))
    }
    return res.status(200).send(new SuccessResponse('Products founded succesfully', allProducts))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

const getProductByName = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { name } = req.params
  try {
    const product = await productServices.getProductByName(name)
    if (!product) {
      return res.status(404).send(new ErrorResponse('No Product found'))
    }
    return res.status(200).send(new SuccessResponse('Product founded succesfully', product))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}
const getProductById = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const product = await productServices.getProductById(id)
    if (!product) {
      return res.status(404).send(new ErrorResponse('No Product found'))
    }
    return res.status(200).send(new SuccessResponse('Product founded succesfully', product))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}

const createProduct = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { name, description, price, stock, brandId } = req.body
  try {
    const newProduct = await productServices.createProduct(name, description, price, stock, brandId)
    return res.status(201).send(new SuccessResponse('Product created succesfully', newProduct))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}
const updateProduct = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  const { name, description, price, stock, brandId } = req.body
  try {
    const updatedProduct = await productServices.updateProduct(id, name, description, price, stock, brandId)
    return res.status(200).send(new SuccessResponse('Product updated succesfully', updatedProduct))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}

const deleteProduct = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const deletedProduct = await productServices.deleteProduct(id)
    return res.status(200).send(new SuccessResponse('Product deleted succesfully', deletedProduct))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}

module.exports = { getAllProducts,getAllProductsWithImages, getProductById, getProductByName, createProduct, updateProduct, deleteProduct }