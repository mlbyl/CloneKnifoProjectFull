const { where } = require("sequelize")
const { ErrorResponse } = require("../helpers/responseHandler")
const Brand = require("../models/Brand")

const getAllBrands = async () => {
  try {
    const allBrands = await Brand.findAll()
    return allBrands
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getBrandByName = async (brandName) => {
  try {
    const brand = await Brand.findOne({ where: { name:brandName } })
    return brand
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getBrandById = async (id) => {
  try {
    const brand = await Brand.findOne({ where: { id } })
    return brand
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const createBrand = async (brandName) => {
  const isBrandExist = await getBrandByName(brandName)
  if (isBrandExist) {
    throw new ErrorResponse('Brand already exist', 400)
  }
  try {
    const brand = await Brand.create({ name: brandName })
    return brand
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const udpateBrand = async (id, newBrandName) => {
  const updateableBrand = await getBrandById(id)
  if (!updateableBrand) {
    throw new ErrorResponse('Brand not found', 404)
  }
  const { name } = updateableBrand
  if (name === newBrandName) {
    throw new ErrorResponse('No changes made to Brand, as the provided data identical to the existing data', 400)
  }
  const updatedData = {
    name: newBrandName
  }
  try {
    const updatedBrand = await Brand.update(updatedData, {
      where: { id },
      returning: true
    })
    return updatedBrand[1][0]
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const deleteBrand = async (id) => {
  const deleteableBrand = await getBrandById(id)
  if (!deleteableBrand) {
    throw new ErrorResponse('Brand not found', 404)
  }
  try {
    const deletedBrand = await Brand.destroy({ where: { id } })
    if (deletedBrand === 0) {
      throw new ErrorResponse('No Brand was deleted', 400)
    }
    return deleteableBrand;
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }

}

module.exports = { getAllBrands, getBrandById, getBrandByName, createBrand, udpateBrand, deleteBrand }