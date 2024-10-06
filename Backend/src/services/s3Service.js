const { PutObjectCommand, DeleteObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3')
const s3 = require('../../config/awsConfig')
const { ErrorResponse } = require('../helpers/responseHandler')

const uploadToS3 = async (file, filePath) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: filePath,
    Body: file.buffer,
    ContentType: file.mimetype
  }
  try {
    const command = new PutObjectCommand(params)
    await s3.send(command)

    const fileUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodeURIComponent(params.Key)}`
    return fileUrl
  } catch (error) {
    throw new ErrorResponse(error.message)
  }

}
const deleteFromS3 = async (fileKey) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: decodeURIComponent(fileKey)
  }
  try {
    const command = new DeleteObjectCommand(params)
    await s3.send(command)

  } catch (error) {
    throw new ErrorResponse(error.message)
  }
}
const getImageFromS3 = async (fileKey) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: decodeURIComponent(fileKey)
  }
  try {
    const command = new HeadObjectCommand(params)
    await s3.send(command)
    return true
    //true
  } catch (error) {
    if (error.name === 'NotFound' || error.code === 'NotSuchKey') {
      return false;
      //false
    }
    throw new ErrorResponse('Error checking S3 object');
  }
}

module.exports = { uploadToS3, deleteFromS3, getImageFromS3 }