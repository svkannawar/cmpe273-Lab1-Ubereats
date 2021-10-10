const sql = require("../models/db.js");
const Restaurant = require("../models/restDetails.model.js");
const Customer = require("../models/custDetails.model.js")

exports.displayAllRests = async (req, res) => {



  try {
    const [err1, result1] = await Customer.getCustLocation(req.body.id);

    if (result1.length === 0) {
        res.status(400).json({msg: `No user with id ${req.body.id}`});
        return
    }

    const city = result1[0].city;
    if (err1) {
        res.status(400).json({msg: "Error in fetching user location"});
        return
    } else {
        const city = result1[0].city;
    }
    

    if (city) {
        const [err2, result2] = await Restaurant.getAllRestWithLoc(city);
        if (err2) {
            res.status(400).json({msg: `Error in fetching restaurants wich are located in ${city}`})
            return
        } else {
            const allRestWithLoc = result2;
        }
        
        const [err3, result3] = await Restaurant.getAllRestExceptLoc(city);
        if (err3) {
            res.status(400).json({msg: `Error in fetching restaurants which are not located in ${city}`})
            return
        } else {
            const allrestExceptLoc = result3;
        }
       
        const allRest = [...result2, ...result3];
        res.status(200).json(allRest);
    } else {
        const [err4, result4] = await Restaurant.getAllRest();
        if (err4) {
            res.status(400).json({msg: `Error in fetching all restaurants`})
            return

        }else {
            const allRestWithLoc = result4;
         
            res.status(200).json(allRestWithLoc);
        }
    }
} catch (error) {
  
    res.status(402).json(error);
}


}


exports.displaySearch = async (req, res) => {

    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!!"
        });
      }

    try {
        let searchStr = "";
        if ((req.body.search).length) {
            searchStr = req.body.search;
        } else {
            const emptyArr = [];
            res.staus(400).json(emptyArr);
            
        }

        const [err1, result1] = await Restaurant.getRestWithSearAndMod(searchStr, req.body.modeOfDelivery);
        if (err1) {
            res.status(400).json({msg: "Error while fetching restaurant data from database"});
            return
        }else if (result1.length === 0){
            res.status(400).json(result1);
        } else {
            const modAndSearch = result1;
            res.status(200).json(modAndSearch);
        } 
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.searcByhModeOfDeliveryOnly = async (req, res) => {
    try {
      const [err1, result1] = await Customer.getCustLocation(req.body.userId);
  
      let city = "";
      if (err1) {
        res.status(400).json({ msg: "Error in fetching user location" });
        return;
      } else {
        city = result1[0].city;
      }
  
      const [err2, result2] = await Restaurant.getModRestsPromise(
        req.body.modeOfDelivery,
        city
      );
  
      if (err2) {
        res
          .status(400)
          .json({ msg: "Error while fetching restaurant data from database" });
        return;
      }
  
      const [err3, result3] = await Restaurant.getModRestsNotLocPromise(
        req.body.modeOfDelivery,
        city
      );
  
      if (err3) {
        res.status(400).json({
          msg: "Error while fetching reamining restaurant data from database",
        });
        return;
      }
      const modRests = [...result2, ...result3];
  
      res.status(200).json(modRests);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  

exports.displayFilteredRests = async (req, res) => {
    try {
      const [err1, result1] = await Customer.getCustLocation(req.body.id);
  
      let city = "";
      if (err1) {
        res.status(400).json({ msg: "Error in fetching user location" });
        return;
      } else {
        city = result1[0].city;
      }
  
      let veg = req.body.veg ? "veg" : "";
      let nonVeg = req.body.nonveg ? "non-veg" : "";
      let vegan = req.body.vegan ? "vegan" : "";
      
  
      const [err2, result2] = await Restaurant.getFilteredRsts(veg, nonVeg, vegan, city);
  
      if (err2) {
        res
          .status(400)
          .json({ msg: "Error while fetching restaurant data from database" });
        return;
      }
  
      const [err3, result3] = await Restaurant.getFilteredRstsNotLoc(
        veg,
        nonVeg,
        vegan,
        city
      );
  
      if (err3) {
        res.status(400).json({
          msg: "Error while fetching reamining restaurant data from database",
        });
        return;
      }
      const filteredRests = [...result2, ...result3];
  
      res.status(200).json(filteredRests);
    } catch (error) {
      res.status(400).json(error);
    }
  };


exports.updateRestProfile = async (req, res) => {
    try {
      const requestBody = req.body;
      const [err1, result1] = await Restaurant.updateRestProfilePromise(
        requestBody.id,
        requestBody.name,
        requestBody.location,
        requestBody.phone,
        requestBody.description,
        requestBody.timing,
        requestBody.restProfileUrl,
        requestBody.modeOfDelivery
      );
  
      if (err1) {
        res.status(400).json({ msg: "Unable to update restaurant profile." });
        return;
      }
  
      const [err2, result2] = await Restaurant.getRestPorfile(requestBody.id);
  
      if (err2) {
        res
          .status(400)
          .json({ msg: "Unable to fetch updated data from database." });
        return;
      }
  
      res.status(200).json(result2);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  

exports.getRestProfile = async (req, res) => {
    try {
      const restId = req.body.restId;
      const [err, result] = await Restaurant.getRestPorfilePromise(restId);
  
      if (err) {
        res.status(400).json({ msg: "Error in fetching restaurant details" });
        return;
      }
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ msg: "Error in fetching restaurant details" });
    }
  };
  