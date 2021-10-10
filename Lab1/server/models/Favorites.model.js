const sql = require("./db.js");

// constructor
const Favorite = function(favourite) {
    this.favId = favourite.favId;
    this.userid  = favourite.userid ;
    this.restaurantid  = favourite.restaurantid ;
    
  };

Favorite.addFavRestPromise = (userId, restId) => {
  return new Promise((resolve) => {
    const query = `INSERT INTO Favorites (userid, restaurantid) VALUES ('${userId}', '${restId}');`;
    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Favorite.getFavPromise = (id) => {
  return new Promise((resolve) => {
    const query = `select * from Favorites where favId = '${id}'; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

Favorite.getAllFavPromise = () => {
  return new Promise((resolve) => {
    const query = `select * from Favorites;`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Favorite.remFavRestPromise = (userId, restId) => {
  return new Promise((resolve) => {
    const query = `DELETE FROM Favorites WHERE userid = ${userId} and restaurantid = ${restId};`;
    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};



  module.exports = Favorite;