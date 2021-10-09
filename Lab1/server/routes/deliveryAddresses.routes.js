const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
  
    const address = require("../controllers/deliveryAddresses.controller.js");
    
  
    app.post("/addAddress",  address.addAddress);
    app.get("/getAddresses",  address.getUserAddresses);
   
  };