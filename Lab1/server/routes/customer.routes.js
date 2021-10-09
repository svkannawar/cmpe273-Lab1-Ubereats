const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
    const customers = require("../controllers/custDetails.controller.js");
  
    app.post("/getCustProfile", customers.getCustProfile);
  
    app.put("/updateCustDetail", customers.updateCustDetail);
  };