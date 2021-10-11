const sql = require("../models/db.js");
const Credential = require("../models/creds.model.js");
const Customer = require("../models/custDetails.model.js");
const Restaurant = require("../models/restDetails.model.js");
const Favorite = require("../models/Favorites.model")


exports.addFavRest = async (req, res) => {
    try {
      const requestBody = req.body;
      const [err1, result1] = await Favorite.addFavRestPromise(
        requestBody.userId,
        requestBody.restId
      );
  
      if (err1) {
        res
          .status(400)
          .json({ msg: "Unable to add favorite restaurant into database." });
        return;
      }
  
      const insertId = result1.insertId;
      const [err2, result2] = await Favorite.getFavPromise(insertId);
  
      if (err2) {
        res
          .status(400)
          .json({ msg: "Unable to fetch favorite restaurant from database." });
        return;
      }
  
      res.status(200).json(result2);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  

  exports.remFavRest = async (req, res) => {
   
    try {
     
      const requestBody = req.body;
      const [err1, result1] = await Favorite.remFavRestPromise(
        requestBody.userId,
        requestBody.restId
      );
  
      if (err1) {
        res
          .status(400)
          .json({ msg: "Unable to remove favorite restaurant from database." });
        return;
      }
  
      const [err2, result2] = await Favorite.getAllFavPromise();
  
      if (err2) {
        res.status(400).json({ msg: "Unable to fetch data from database." });
        return;
      }
  
      res.status(200).json(result2);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  exports.getFavRests = async (req, res) => {
    try {
      const userId = req.query.id;
      const [err1, result1] = await Restaurant.getAllFavRestsPromise(userId);
  
      if (err1) {
        res
          .status(400)
          .json({ msg: "Unable to fetch favorite restaurants from database." });
        return;
      }
  
      res.status(200).json(result1);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  
  


exports.getRestAsFav = async (req, res) => {
  try {
    const requestBody = req.body;
    const [err1, result1] = await Favorite.getRestAsFav(
      requestBody.userId,
      requestBody.restId
    );

    if (err1) {
      res
        .status(400)
        .json({ msg: "Unable to add favorite restaurant into database." });
      return;
    }


    res.status(200).json(result1);
  } catch (error) {
    res.status(400).json(error);
  }
};