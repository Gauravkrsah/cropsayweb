const cloudinary = require('cloudinary').v2;
require("dotenv").config()

cloudinary.config({
  secure: true,
  api_key:process.env.CLOUDINARY_API_KEY,
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (imagePath) => {
     const options = {
      use_filename: true,
      unique_filename: true,
      overwrite: false,
    };

    try {
      const result = await cloudinary.uploader.upload(imagePath, options);
      return result.secure_url;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

module.exports = uploadImage