const sql = require("./db.js");

// constructor
const Restaurant = function(restarunt) {
    this.credid = restarunt.credid;
    this.email  = restarunt.email ;
    this.name  = restarunt.name ;
    this.location  = restarunt.location ;
    this.description  = restarunt.description ;
    this.phone = restarunt.phone ;
    this.timing=restarunt.timing;
    this.modeOfDelivery  =restarunt.modeOfDelivery  ;
  };
  
  Restaurant.create = (newRestaurant, result) => {
    sql.query("INSERT INTO RestDetails  SET ?", newRestaurant, (err, res) => {
      console.log("new -----rest",newRestaurant.email );
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Restaurant details added: ", { id: res.insertId, ...newRestaurant });
      result(null, { id: res.insertId, ...newRestaurant, msg: "success" });
    });
  };
  
  module.exports = Restaurant;