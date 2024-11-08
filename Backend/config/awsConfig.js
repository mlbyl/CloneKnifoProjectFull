const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: process.env.KNIFO_AWS_REGION, 
  credentials: {
    accessKeyId: process.env.KNIFO_AWS_ACCESS_KEY,
    secretAccessKey: process.env.KNIFO_AWS_SECRET_KEY
  }
});

module.exports = s3;
