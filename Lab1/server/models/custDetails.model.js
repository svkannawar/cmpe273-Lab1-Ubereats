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
    this.profileUrl=customer.profileUrl;
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

  Customer.getCustLocation = (id) => {
    return new Promise((resolve) => {
        const query = `select city from CustDetails where credid = '${id}'; `;
        sql.query(query, (err, result) => {
            resolve([err, result]);
        });
    });
}

// promise for fetching customer profile
Customer.getCustProfilePromise = (id) => {
  return new Promise((resolve) => {
    const query = `select * from CustDetails where credid = '${id}'; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for updating customer profile
Customer.updateCustProfilePromise = (
  name,
  DOB,
  city,
  state,
  country,
  nickname,
  phone,
  id
) => {
  return new Promise((resolve) => {
    const query = `update CustDetails set name = '${name}', DOB = '${DOB}', city = '${city}', state = '${state}', country = '${country}', nickname = '${nickname}', phone = '${phone}' where credid = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for getting cust image url back from DB
Customer.getCustPicUrl = (id) => {
  return new Promise((resolve) => {
    const query = `select profileUrl from CustDetails where credid = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

Customer.upadateCustPicPromise = (id, url) => {
  return new Promise((resolve) => {
    const query = `UPDATE CustDetails SET profileUrl='${url}' WHERE credid='${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
  
  module.exports = Customer;