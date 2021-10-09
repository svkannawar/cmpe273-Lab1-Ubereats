const sql = require("./db.js");

// constructor
const Dishes = function(dishes) {
    this.id = dishes.id;
    this.restid  = dishes.restid ;
    this.name  = dishes.name ;
    this.ingredients  = dishes.ingredients ;
    this.dishImageUrl  = dishes.dishImageUrl ;
    this.price = dishes.price ;
    this.description=dishes.description;
    this.category  =dishes.category  ;
    this.type = dishes.type;
  };
  

Dishes.addDishesPromise = (restid, dishName, mainIngredients, dishImage, dishPrice, description, dishCategory, dishType) => {
    return new Promise((resolve) => {

        const query = `INSERT INTO Dishes (restid, name, ingredients, dishImageUrl, price, description, Category, type) VALUES ('${restid}', '${dishName}', '${mainIngredients}', '${dishImage}', '${dishPrice}', '${description}', '${dishCategory}', '${dishType}');`;
        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}


Dishes.getDishPromise = (id) => {
    return new Promise((resolve) => {

        const query = `select * from Dishes where id = '${id}'; `;

        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}


Dishes.getDishesOfRestPromise = (restId) => {
    return new Promise((resolve) => {

        const query = `select * from Dishes where restid = '${restId}'; `;

        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}


Dishes.editDishPromise = (dishId, dishName, mainIngredients,  dishPrice, description, dishCategory, dishType) => {
    return new Promise((resolve) => {

        const query = `update Dishes set name = '${dishName}',  ingredients = '${mainIngredients}', price = '${dishPrice}', description = '${description}', Category = '${dishCategory}', type = '${dishType}' where id = '${dishId}';`;

        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}

Dishes.getDishPicUrl = (id) => {
    return new Promise((resolve) => {
      const query = `select dishImageUrl from Dishes where id = '${id}';`;
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };
  
  Dishes.upadateDishPicPromise = (id, url) => {
    return new Promise((resolve) => {
      const query = `UPDATE Dishes SET dishImageUrl='${url}' WHERE id='${id}';`;
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };
  
 
  Dishes.getDishPicUrl = (id) => {
    return new Promise((resolve) => {
      const query = `select dishImageUrl from Dishes where id = '${id}';`;
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };



  Dishes.fetchAllDishesForOrder = (orderid) => {
    return new Promise((resolve) => {
      const query = `select * from OrderDishes where orderid='${orderid}';`;
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };
  
  module.exports = Dishes