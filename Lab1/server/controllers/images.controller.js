const sql = require("../models/db.js");
const Credential = require("../models/creds.model.js");
const Customer = require("../models/custDetails.model.js");
const Restaurant = require("../models/restDetails.model.js");


// update rest and cust image on db
exports.updateImageUrl = async (req, res) => {
    try {
      const requestBody = req.body;
  
      if (requestBody.role === "restaurant") {
        const [err1, result1] = await Restaurant.upadateRestPicPromise(
          requestBody.id,
          requestBody.url
        );
  
        if (err1) {
          res.status(400).json({
            msg: "Unable to update restaurant profile picture in database.",
          });
          return;
        }
  
        const [err2, result2] = await Restaurant.getRestPicUrl(requestBody.id);
  
        if (err2) {
          res.status(400).json({
            msg: "Unable to fetch updated restaurant image url from database.",
          });
          return;
        }
  
        res.status(200).json(result2);
      } else {
        const [err3, result3] = await Customer.upadateCustPicPromise(
          requestBody.id,
          requestBody.url
        );
  
        if (err3) {
          res.status(400).json({
            msg: "Unable to update customer profile picture in database.",
          });
          return;
        }
  
        const [err4, result4] = await Customer.getCustPicUrl(requestBody.id);
  
        if (err4) {
          res.status(400).json({
            msg: "Unable to fetch updated customer image url from database.",
          });
          return;
        }
  
        res.status(200).json(result4);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  // fetch cust and rest image from db
  exports.fetchImageUrl = async (req, res) => {
    try {
      console.log("inside restimgchangeapidd")
      const id = req.query.id;
      const role = req.query.role;
  console.log(role);
      if (role ==="restaurant") {
        console.log("inside for rest")
        const [err1, result1] = await Restaurant.getRestPicUrl(id);
  
        if (err1) {
          res.status(400).json({
            msg: "Unable to fetch updated restaurant image url from database.",
          });
          return;
        }
  
        res.status(200).json(result1);
      } else {
        console.log("inside for cust")
        const [err2, result2] = await Customer.getCustPicUrl(id);
  
        if (err2) {
          res.status(400).json({
            msg: "Unable to fetch updated customer image url from database.",
          });
          return;
        }
  
        res.status(200).json(result2);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  };
  