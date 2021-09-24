const sql = require("./db.js");

// constructor
const Customer = function(customer) {
    this.credid = customer.credid;
    this.email  = customer.email ;
    this.name  = customer.name ;
    this.DOB = customer.DOB ;
    this.city =customer.city ;
    this.state =customer.state ;
    this.country  = customer.country ;
    this.nickname  = customer.nickname ;
    this.phone = customer.phone ;
    this.prof_pic=customer.prof_pic;
    this.about =customer.about ;
  };
  
  Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO CustDetails  SET ?", newCustomer, (err, res) => {
      console.log("new -----cust",newCustomer.email );
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Customer details added: ", { id: res.insertId, ...newCustomer });
      result(null, { id: res.insertId, ...newCustomer, msg: "success" });
    });
  };
  
  module.exports = Customer;