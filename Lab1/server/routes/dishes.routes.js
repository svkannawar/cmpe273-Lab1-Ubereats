const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
  
    const dishes = require("../controllers/dishes.controller.js");
    
app.post("/addDishes",  dishes.addDishes);
app.post("/getDishes",  dishes.getDishesOfRest);
app.put("/editDishes", dishes.editDish);
app.get("/editDish", dishes.editDishWithId);
app.put("/editDishImage", dishes.updateDishPicToDb);
};