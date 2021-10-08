//import { generateUploadURL } from "../UploadImagesS3/s3Bucket";

const R =require("../UploadImagesS3/s3Bucket")
// upload picture function
exports.uploadToS3Bucket = async (req, res) => {
  try {
    const uploadUrl = await R.generateUploadURL();
    console.log(uploadUrl);
    res.status(200).json(uploadUrl);
  } catch (error) {
    res.status(400).json(error);
  }
};
