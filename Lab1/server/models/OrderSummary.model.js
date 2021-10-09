const sql = require("./db.js");

// constructor
const Order = function(order) {
    this.custid = order.custid;
    this.restid  = order.restid ;
    this.orderid  = order.orderid ;
    this.total  = order.total ;
    this.time  = order.time ;
    this.custName = order.custName ;
    this.restName=order.restName;
    this.modeOfDelivery  =order.modeOfDelivery  ;
    this.orderStatus = order.orderStatus;
    this.address  =order.address  ;
    this.deliveryStatus = order.deliveryStatus;
  };
  
  Order.getOrderStatusPromise = (Orderid) => {
    return new Promise((resolve) => {
      const query = `select orderStatus, deliveryStatus from OrderSummary where Orderid = '${Orderid}'; `;
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };
  

  Order.updateOrderStatusPromise = (orderId, orderStatus) => {
    return new Promise((resolve) => {
      let query = "";
      if (
        orderStatus === "Order Received" ||
        orderStatus === "Preparing" ||
        orderStatus === "On the Way" ||
        orderStatus === "Pick up Ready"
      ) {
        query = `update OrderSummary set orderStatus = '${orderStatus}', deliveryStatus = 'New Order' where orderid = '${orderId}';`;
      } else if (orderStatus === "Delivered" || orderStatus === "Picked Up") {
        query = `update OrderSummary set orderStatus = '${orderStatus}', deliveryStatus = 'Delivered' where orderid = '${orderId}';`;
      }
  
      sql.query(query, (err, result) => {
        resolve([err, result]);
      });
    });
  };

Order.filterOrderDetailsPromise = (orderStatus) => {
  return new Promise((resolve) => {
    const query = `select * from OrderSummary where orderStatus='${orderStatus}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Order.getAllOrdersPromise = () => {
  return new Promise((resolve) => {
    const query = `select * from OrderSummary;`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Order.getAllOrdersCustomerPromise = (id) => {
  return new Promise((resolve) => {
    const query = `select * from OrderSummary where custid='${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Order.getAllOrdersRestaurantPromise = (id) => {
  return new Promise((resolve) => {
    const query = `select * from OrderSummary where restid='${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};




Order.addOrderDetailsPromise = (
  custName,
  custid,
  modeOfDelivery,
  restName,
  restid,
  total,
  address
) => {
  return new Promise((resolve) => {
    const query = `INSERT INTO OrderSummary (custid, custName, restid, restName,  modeOfDelivery, total, orderStatus, deliveryStatus, address)
        VALUES ('${custid}', '${custName}', '${restid}', '${restName}', '${modeOfDelivery}', ${total}, 'Order Received', 'New Order','${address}'); `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Order.fetchOrderDetailsPromise = (orderid) => {
  return new Promise((resolve) => {
    const query = `select * from OrderSummary where orderid=${orderid}; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Order.fetchOrderDetailsCusromerPromise = (orderid, id) => {
  return new Promise((resolve) => {
    const query = `select * from OrderSummary where orderid=${orderid} AND custid=${id}; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
Order. fetchOrderDetailsPromise = (orderid) => {
  return new Promise((resolve) => {
    const query = `select * from OrderSummary where orderid=${orderid}; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
  module.exports = Order;