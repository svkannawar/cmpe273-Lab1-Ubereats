const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
  
    const restaurants = require("../controllers/restaurants.controller");
  
    
     app.post("/displayAllRest", restaurants.displayAllRests);
  
 
    app.post("/search",  restaurants.displaySearch);
    app.post("/filter", restaurants.displayFilteredRests);
  app.put("/updateRestProfile", restaurants.updateRestProfile);
  app.post("/getRestProfile", restaurants.getRestProfile);
  app.post("/searcByhModeOfDeliveryOnly", restaurants.searcByhModeOfDeliveryOnly );
  };