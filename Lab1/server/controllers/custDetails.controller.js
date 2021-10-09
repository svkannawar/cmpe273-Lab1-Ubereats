
const sql = require("../models/db.js");
const Credential = require("../models/creds.model.js");
const Customer = require("../models/custDetails.model.js");
const Restaurant = require("../models/restDetails.model.js");


exports.getCustProfile = async (req, res) => {
    try {
      const id = req.body.id;
  
      const [err1, result1] = await Customer.getCustProfilePromise(id);
  
      if (err1) {
        res.status(400).json({ msg: "Unable to fetch customer profile." });
        return;
      }
  
      res.status(200).json(result1);
    } catch (error) {
      res.status(400).json(err);
    }
  };
  
  exports.updateCustDetail = async (req, res) => {
    try {
  
      const [err1, result1] = await Customer.updateCustProfilePromise(
        req.body.name,
        req.body.DOB,
        req.body.city,
        req.body.state,
        req.body.country,
        req.body.nickname,
        req.body.phone,
        req.body.id,
        req.body.about
      );
  
      if (err1) {
     
        res.status(400).json({ msg: err1 });
        return;
      }
  
      const [err2, result2] = await Customer.getCustProfilePromise(id);
  
      if (err2) {
        res.status(400).json({ msg: "Unable to fetch customer profile." });
        return;
      }
  
      res.status(200).json(result2);
    } catch (error) {
      res.status(400).json(err);
    }
  };
  