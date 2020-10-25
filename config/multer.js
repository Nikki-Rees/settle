const multer = require("multer");
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "ConditionReportImages",
    allowedFormats: ["jpg", "png"],
    transformation: [{
        width: 500,
        height: 500,
        crop: "limit"
    }],

});

module.exports = multer({ storage: storage });