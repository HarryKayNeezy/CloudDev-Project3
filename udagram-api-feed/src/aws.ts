import AWS = require('aws-sdk');
import {config} from './config/config';


// Configure AWS
//const credentials = new AWS.SharedIniFileCredentials({profile: config.aws_profile});
//AWS.config.credentials = credentials;

const credentials = {
  //accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  accessKeyId: "AKIAQZTAJPSAD7MAF7W3",
  //secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  secretAccessKey: "h0fA+drRavGVl5x811Jei22JLVSxik+KDoPRfSkk",
  httpOptions: { timeout: 30000, connectTimeout: 5000 },
  region: "us-east-1" //Enter your Region.
}
AWS.config.update(credentials);

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: config.aws_region,
  params: {Bucket: config.aws_media_bucket},
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('getObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('putObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
