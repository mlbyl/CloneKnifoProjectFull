const { validationResult } = require('express-validator')
const brandServices = require('../services/BrandServices')
const { ErrorResponse, SuccessResponse } = require('../helpers/responseHandler')

const getAllBrands = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  try {
    const brands = await brandServices.getAllBrands()
    if (brands.length === 0) {
      return res.status(404).send(new ErrorResponse('No Brands found'))
    }
    return res.status(200).send(new SuccessResponse('Brands founded succesfully', brands))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const getBrandById = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const brand = await brandServices.getBrandById(id)
    if (!brand) {
      return res.status(404).send(new ErrorResponse('No Brand found'))
    }
    return res.status(200).send(new SuccessResponse('Brand founded succesfully', brand))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

const getBrandByName = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { name } = req.params
  try {
    const brand = await brandServices.getBrandByName(name)
    if (!brand) {
      return res.status(404).send(new ErrorResponse('No Brand founded'))
    }
    return res.status(200).send(new SuccessResponse('Brand found succesfully', brand))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

const createBrand = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { name } = req.body
  try {
    const newBrand = await brandServices.createBrand(name)
    return res.status(201).send(new SuccessResponse('Brand created succesfully', newBrand))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const updateBrand = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  const { name } = req.body
  try {
    const updatedBrand = await brandServices.udpateBrand(id, name)
    return res.status(200).send(new SuccessResponse('Brand updated succesfully', updatedBrand))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}
const deleteBrand = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(new ErrorResponse(errors.array()))
  }
  const { id } = req.params
  try {
    const deletedBrand = await brandServices.deleteBrand(id)
    return res.status(200).send(new SuccessResponse('Brand deleted succesfully', deletedBrand))
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message))
  }
}

module.exports = { getAllBrands, getBrandById, getBrandByName, createBrand, updateBrand, deleteBrand }