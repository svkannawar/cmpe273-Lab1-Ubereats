const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
    const credentials = require("../controllers/creds.controller.js");
    
  
    const { check } = require("express-validator");

    // Create a new Customer
     app.post("/creds",
    //[
    //   check("email", "Please enter a valid email address")
    //   .isEmail(),
    //   check("password", "Please enter a password greater than 7 letters")
    //   .isLength({
    //     min: 6
    //   })
    // ],
     credentials.create);
  
   //signin 
    app.post("/signin", credentials.signin);


     //jwtcheck 
     app.post("/jwtcheck", authenticateToken, credentials.jwtcheck);
  
    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", customers.findOne);
  
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
  
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
  
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
  };