const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
  
    const credentials = require("../controllers/creds.controller.js");
    
  
     app.post("/creds",     credentials.create);
  
     app.post("/signin", credentials.signin);
    
     app.post("/jwtcheck", authenticateToken, credentials.jwtcheck);
  };