const sql = require("./db.js");

// constructor
const OrderDishes = function(orderDishes) {
    this.id = orderDishes.custid;
    this.orderid  = orderDishes.orderid ;
    this.name  = orderDishes.time ;
    this.ingredients = orderDishes.ingredients ;
    this.dishImageUrl=orderDishes.dishImageUrl;
    this.price  =orderDishes.price  ;
    this.description = orderDishes.description;
    this.category  =orderDishes.category  ;
    this.type = orderDishes.type;
    this.qty  = orderDishes.qty ;
  };
  
// promise for adding dishes details to orderDishes table
OrderDishes.addOrderdDishesPromise = (
    orderid,
    name,
    dishImageUrl,
    price,
    description,
    qty
  ) => {
    return new Promise((resolve) => {
      const query = `INSERT INTO OrderDishes (orderid, name, dishImageUrl,  price, description, qty) VALUES ('${orderid}', '${name}', '${dishImageUrl}', '${price}', '${description}', '${qty}');`;
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };
  

  OrderDishes.fetchAllDishesForOrder = (orderid) => {
    return new Promise((resolve) => {
      const query = `select * from OrderDishes where orderid='${orderid}';`;
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };
  


  module.exports = OrderDishes
