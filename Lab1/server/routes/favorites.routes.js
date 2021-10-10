const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
  
    const favourites = require("../controllers/favorites.controller.js");
    
    app.post("/addFavs",  favourites.addFavRest);
    app.delete("/removeFavs",  favourites.remFavRest);
    app.get("/getFavs",  favourites.getFavRests);
   
  };