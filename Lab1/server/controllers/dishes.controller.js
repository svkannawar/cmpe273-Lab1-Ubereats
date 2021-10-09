const sql = require("../models/db.js");

const Order = require("../models/OrderSummary.model.js");
const OrderDishes = require("../models/orderDishes.model")
const Dishes = require("../models/dishes.model")


exports.addDishes = async (req, res) => {
    try {
        const requestBody = req.body;
        const [err1, result1] = await Dishes.addDishesPromise(requestBody.restid, requestBody.dishName, requestBody.mainIngredients, requestBody.dishImage, requestBody.dishPrice, requestBody.description, requestBody.dishCategory, requestBody.type);

        if (err1) {
            res.status(400).json({msg: "Unable to add dish into database."});
            return
        }

        const insertId = result1.insertId;

        const [err2, result2] = await Dishes.getDishPromise(insertId);

        if (err2) {
            res.status(400).json({msg: "Unable to fetch added dish from database."});
            return
        }
        
        res.status(200).json(result2);

    } catch (error) {
        res.status(400).json(error);
    }
}


exports.getDishesOfRest = async (req, res) => {
    try {
        const requestBody = req.body;
        const [err1, result1] = await Dishes.getDishesOfRestPromise(requestBody.restId);

        if (err1) {
            res.status(400).json({msg: "Unable to fetch dishes from database."});
            return
        }
        
        res.status(200).json(result1);

    } catch (error) {
        res.status(400).json(error);
    }
}



exports.editDish = async (req, res) => {
    try {
        const requestBody = req.body;
        const [err1, result1] = await Dishes.editDishPromise(requestBody.id, requestBody.dishName, requestBody.mainIngredients, requestBody.dishPrice, requestBody.description, requestBody.dishCategory, requestBody.type);

        if (err1) {
            res.status(400).json({msg: "Unable to edit dish into database."});
            return
        }

        const editedDishId = requestBody.id;
        const [err2, result2] = await Dishes.getDishPromise(editedDishId);

        if (err2) {
            res.status(400).json({msg: "Unable to fetch edited dish from database."});
            return
        }
        
        res.status(200).json(result2);

    } catch (error) {
        res.status(400).json(error);
    }
}



exports.editDishWithId = async (req, res) => {
    try {
        const id = req.query.id;
      const [err1, result1] = await Dishes.getDishPromise(id);
  
      if (err1) {
        res.status(400).json({
          msg: "Unable to fetchdish with id from dishes.",
        });
        return;
      }
  
      res.status(200).json(result1);
    } catch (error) {
      res.status(400).json(error);
    }
  };

exports.updateDishPicToDb = async (req, res) => {
    try {
      const dishId = req.body.dishId;
      const imageUrl = req.body.imageUrl;
  
      const [err1, result1] = await Dishes.upadateDishPicPromise(dishId, imageUrl);
  
      if (err1) {
        res.status(400).json({
          msg: "Unable to update Dish image in database.",
        });
        return;
      }
  
      const [err2, result2] = await Dishes.getDishPicUrl(dishId);
  
      if (err2) {
        res.status(400).json({
          msg: "Unable to fetch updated dish image url from database.",
        });
        return;
      }
  
      res.status(200).json(result2);
    } catch (error) {
      res.status(400).json(error);
    }
  };