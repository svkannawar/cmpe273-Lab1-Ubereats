module.exports = app => {

    const img = require("../controllers/uploadImageS3.controller.js");
app.get("/uploadImage",  img.uploadToS3Bucket);

};