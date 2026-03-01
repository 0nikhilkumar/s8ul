const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const cloudinaryConfig = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
};

cloudinary.config(cloudinaryConfig);

const uploadOnCloudinary = async (localFilePath, foldername, publicId = null) => {
    try {

        const uploadOptions = {
            folder: `s8ul/esports/${foldername}`,
            resource_type: 'auto'
        }

        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
            uploadOptions.public_id = publicId;
            uploadOptions.overwrite = true;
        }

        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, uploadOptions);

        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
};

module.exports = {
    uploadOnCloudinary,
};