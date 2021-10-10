const authenticateToken=require("../middleware/authenticateToken");
module.exports = app => {
  
    const orders = require("../controllers/orders.controller.js");
    
    app.put("/updateOrderStatus", orders.updateOrderStatus);
    app.post("/addOrderDetails",  orders.addOrderDetails);
    app.post("/filterOrderDetails",  orders.filterOrderDetails);
    app.get("/getOrderDetails",  orders.getOrderDetails);
    // app.get("/getOrderDetailsCustomer",  orders.getOrderDetailsCustomer);
    // app.get("/getOrderDetailsRestaurant",  orders.getOrderDetailsRestaurant);
    app.get("/getAllOrders",  orders.getAllOrders);
    app.get("/getAllOrdersCustomer",  orders.getAllOrdersCustomer);
    app.get("/getAllOrdersRestaurant",  orders.getAllOrdersRestaurant);
    
  };