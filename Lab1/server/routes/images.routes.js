const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
  
    const images = require("../controllers/images.controller.js");
    
  
    app.put("/addImage", images.updateImageUrl);
app.get("/getImage", images.fetchImageUrl);
     
  };