const sql = require("./db.js");

// constructor
const Credential = function(credential) {
  this.email = credential.email;
  this.password = credential.password;
  this.location= credential.location;
  this.role=credential.role;
  this.name=credential.name;
};

Credential.create = (newCredential, result) => {
  sql.query("INSERT INTO creds SET ?", newCredential, (err, res) => {
    console.log("new -----creds",newCredential );
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("User created: res is next", res, { id: res.insertId, ...newCredential });
    result(null, { id: res.insertId, ...newCredential, msg: "success" });
  });
};



Credential.findByEmail = (email, cb) => {
  console.log("---------findbyemail entry----------")
  sql.query(`SELECT * FROM creds WHERE email = "${email}"`, (err, res) => {
   // console.log("emailfinder model me", email );
    if (err) {
      console.log("error: ", err);
      cb(err, null);
     // return;
    }
    else{
       
    
      cb(null, res);
    }
   
  });
};













































































// Customer.findById = (customerId, result) => {
//   sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found customer: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found Customer with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// Customer.getAll = result => {
//   sql.query("SELECT * FROM customers", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("customers: ", res);
//     result(null, res);
//   });
// };

// Customer.updateById = (id, customer, result) => {
//   sql.query(
//     "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
//     [customer.email, customer.name, customer.active, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found Customer with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated customer: ", { id: id, ...customer });
//       result(null, { id: id, ...customer });
//     }
//   );
// };

// Customer.remove = (id, result) => {
//   sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Customer with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted customer with id: ", id);
//     result(null, res);
//   });
// };

// Customer.removeAll = result => {
//   sql.query("DELETE FROM customers", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} customers`);
//     result(null, res);
//   });
// };

module.exports = Credential;