const sql = require("../models/db.js");
const Credential = require("../models/creds.model.js");
const Customer = require("../models/custDetails.model.js");
const Restaurant = require("../models/restDetails.model.js");
const Favorite = require("../models/Favorites.model")
const DeliveryAddresses = require("../models/deliveryAddresses.model")



// add delivery address to DeliveryAddresses table
exports.addAddress = async (req, res) => {
    try {
        const requestBody = req.body;
        const [err1, result1] = await DeliveryAddresses.addAddressPromise(requestBody.userId, requestBody.address);

        if (err1) {
            res.status(400).json({msg: "Unable to add delivery addresses to database."});
            // res.json(err1);
            return
        }

        const insertId = result1.insertId;
        const [err2, result2] = await DeliveryAddresses.getUserAddressesPromise(userId);

        if (err2) {
            res.status(400).json({msg: "Unable to fetch added delivery addresses from database."});
            return
        }
        
        res.status(200).json(result2);

    } catch (error) {
        res.status(400).json(error);
    }
}

// get user's all previous delivery addresses from DeliveryAddresses table
exports.getUserAddresses = async (req, res) => {
    try {
        const userId = req.query.userId;
        const [err1, result1] = await DeliveryAddresses.getUserAddressesPromise(userId);

        if (err1) {
            res.status(400).json({msg: "Unable to add delivery addresses to database."});
            // res.json(err1);
            return
        }
        
        res.status(200).json(result1);

    } catch (error) {
        res.status(400).json(error);
    }
}