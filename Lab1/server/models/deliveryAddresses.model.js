const sql = require("./db.js");

// constructor
const DeliveryAddress = function(deliveryAddress) {
    this.id = deliveryAddress.id;
    this.custid  = deliveryAddress.custid ;
    this.address  = deliveryAddress.address ;
  };


  

DeliveryAddress.addAddressPromise = (userId, address) => {
    return new Promise((resolve) => {
        const query = `INSERT INTO deliveryaddresses (custid, address) VALUES ('${userId}', '${address}');`;
        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}


DeliveryAddress.fetchAddressPromise = (id) => {
    return new Promise((resolve) => {
        const query = `select * from deliveryaddresses where id = '${id}'; `;
        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}


DeliveryAddress.getUserAddressesPromise = (userId) => {
    return new Promise((resolve) => {
        const query = `select * from deliveryaddresses where custid = '${userId}'; `;
        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}
  module.exports =DeliveryAddress;