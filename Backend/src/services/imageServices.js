const { ErrorResponse } = require("../helpers/responseHandler");
const s3Service = require('./s3Service')
const Image = require("../models/Image");
const Product = require("../models/Product");

const uploadImage = async (file, productId, isMainImage) => {

  const product = await Product.findByPk(productId);
  if (!product) {
    throw new ErrorResponse('Product not found', 404);
  }
  const encodedFileName = encodeURIComponent(file.originalname)
  const filePath = `images/${Date.now()}_${encodedFileName}`;
  const fileUrl = await s3Service.uploadToS3(file, filePath)

  try {

    const image = await Image.create({
      url: fileUrl,
      productId: product.id,
      isMain: isMainImage
    });

    return image;
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new ErrorResponse('A product can only have one main image', 400)
    }
    throw new ErrorResponse(error.message, error.statusCode || 500);
  }

};

const deleteImage = async (imageId) => {
  const image = await Image.findByPk(imageId)
  if (!image) {
    throw new ErrorResponse('Image not found', 404)
  }
  try {
    const fileKey = image.url.split('/').pop()

    await s3Service.deleteFromS3(fileKey)
    const deletedImage = await Image.destroy({ where: { id: imageId } })
    if (deletedImage === 0) {
      throw new ErrorResponse('No image was deleted', 400)
    }
    const deletedImageName = decodeURIComponent(fileKey).split('/')[1].split('_')[1]
    return deletedImageName
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500);
  }
}

const getImageById = async (id) => {
  try {
    const image = await Image.findByPk(id)
    if (!image) {
      throw new ErrorResponse('Image not found', 404)
    }
    const fileKey = image.url.split('/').pop()
    const isImageExistOnCloud = await checkIsImageExistOnS3(fileKey)
    if (isImageExistOnCloud) {
      return image;
    }
    await deleteImage(id)
    throw new ErrorResponse('Image not found on Cloud and deleted from database', 404)
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const checkIsImageExistOnS3 = async (fileKey) => {
  try {
    const isImageExistOnS3 = await s3Service.getImageFromS3(fileKey)
    return isImageExistOnS3
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

module.exports = { uploadImage, deleteImage, getImageById };
