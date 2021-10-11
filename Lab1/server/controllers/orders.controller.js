const sql = require("../models/db.js");
const Customer = require("../models/custDetails.model.js");
const Restaurant = require("../models/restDetails.model.js");
const Order = require("../models/OrderSummary.model.js");
const OrderDishes = require("../models/orderDishes.model")

exports.updateOrderStatus = async (req, res) => {
    try {
      const requestBody = req.body;
  
      const [err1, result1] = await Order.updateOrderStatusPromise(
        requestBody.orderId,
        requestBody.orderStatus
      );
  
      if (err1) {
        res
          .status(400)
          .json({ msg: "Unable to update order status in database." });
        return;
      }
  
      const [err2, result2] = await Order.getOrderStatusPromise(requestBody.orderId);
  
      if (err2) {
        res
          .status(400)
          .json({ msg: "Unable to fetch order status from database." });
        return;
      }
  
      res.status(200).json(result2);
    } catch (error) {
      res.status(400).json(error);
    }
  };


exports.addOrderDetails = async (req, res) => {
  try {
    const cart = req.body.cart;
    const dishes = req.body.items;
    const total = req.body.total;
    const address = req.body.address;

    const [err1, result1] = await Order.addOrderDetailsPromise(
      cart.custName,
      cart.custId,
      cart.modeOfDelivery,
      cart.restName,
      cart.restid,
      total,
      address
    );

    if (err1) {
      res.status(400).json({
        msg: "Unable to add order details to OrderDetails table of DB.",
      });
      return;
    }

    const [err2, result2] = await Order.fetchOrderDetailsPromise(result1.insertId);

    if (err2) {
      res.status(400).json({
        msg: "Unable to fetch order details from OrderDetails table of DB.",
      });
      return;
    }

    dishes.forEach(async (dish) => {
      const [err3, result3] = await OrderDishes.addOrderdDishesPromise(
        result1.insertId,
        dish.dishName,
        dish.dishImageUrl,
        dish.price,
        dish.description,
        dish.qty
      );

      if (err3) {
        res.status(400).json({
          msg: `Unable to add order ${dish.name} details to OrderDishes table of DB.`,
        });

        return;
      }
    });

    const [err4, result4] = await OrderDishes.fetchAllDishesForOrder(result1.insertId);

      if (err4) {
        res.status(400).json({
          msg: "Unable to fetch dishes details from OrderDishes table of DB.",
        });
        return;
      }

      res.status(200).json({ orderDetails: result2, orderDishes: result4 });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.filterOrderDetailsCust = async (req, res) => {
  try {
    const orderStatus = req.body.orderStatus;
    const id= req.body.id;
    const [err1, result1] = await Order.filterOrderDetailsPromise(orderStatus, id);

    console.log('----RESULT----', err1, result1, req.body)

    if (err1) {
      res.status(400).json({
        msg: "Unable to fetch order details from OrderSmmmary.",
      });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    res.status(400).json(error);
  }
};



exports.filterOrderDetailsRest = async (req, res) => {
  try {
    const orderStatus = req.body.orderStatus;
    const id= req.body.id;
    const [err1, result1] = await Order.filterOrderDetailsPromiseRest(orderStatus, id);

    console.log('----RESULT----', err1, result1, req.body)

    if (err1) {
      res.status(400).json({
        msg: "Unable to fetch order details from OrderSmmmary.",
      });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    res.status(400).json(error);
  }
};



exports.getAllOrders = async (req, res) => {
  try {
    const [err1, result1] = await Order.getAllOrdersPromise();

    if (err1) {
      res.status(400).json({
        msg: "Unable to fetch all order details from OrderSmmmary.",
      });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllOrdersCustomer = async (req, res) => {
  try {
    const id = req.query.id;
    const [err1, result1] = await Order.getAllOrdersCustomerPromise(id);

    if (err1) {
      res.status(400).json({
        msg: "Unable to fetch all order details from OrderSmmmary.",
      });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllOrdersRestaurant = async (req, res) => {
  try {
    const id = parseInt(req.query.id)
;    const [err1, result1] = await Order.getAllOrdersRestaurantPromise(id);

    if (err1) {
      res.status(400).json({
        msg: "Unable to fetch all order details from OrderSmmmary.",
      });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    res.status(400).json(error);
  }
};



exports.getOrderDetailsCustomer = async (req, res) => {
  try {
    const orderId = req.query.orderId;

    const [err1, result1] = await Order.fetchOrderDetailsPromise(orderId);

    if (err1) {
      res.status(400).json({
       
        msg: err1,
      });
      return;
    }

    const [err2, result2] = await OrderDishes.fetchAllDishesForOrder(orderId);

    if (err2) {
      res.status(400).json({
        msg: "Unable to fetch dishes details from OrderDishes table of DB.",
      });
      return;
    }

    res.status(200).json({ orderDetails: result1, orderDishes: result2 });
  } catch (error) {
    res.status(400).json(error);
  }
};





exports.getOrderDetailsRestaurant = async (req, res) => {
  try {
    const orderId = req.query.orderId;

    const [err1, result1] = await Order.fetchOrderDetailsPromise(orderId);

    if (err1) {
      res.status(400).json({
     
        msg: err1,
      });
      return;
    }

    const [err2, result2] = await OrderDishes.fetchAllDishesForOrder(orderId);

    if (err2) {
      res.status(400).json({
        msg: "Unable to fetch dishes details from OrderDishes table of DB.",
      });
      return;
    }

    res.status(200).json({ orderDetails: result1, orderDishes: result2 });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const orderId = req.query.orderId;

    const [err1, result1] = await Order.fetchOrderDetailsPromise(orderId);

    if (err1) {
      res.status(400).json({
        msg: "Unable to fetch order details from OrderDetails table of DB.",
      });
      return;
    }
    const restId = result1[0].restid;

    const [err2, result2] = await Customer.getRestPicUrl(restId);

    if (err2) {
      res.status(400).json({
        msg: "Unable to fetch restaurant profile picture from DB.",
      });
      return;
    }

    const restProfileUrl = result2[0].profileUrl;

    const custId = result1[0].custid;

    const [err3, result3] = await Customer.getCustPicUrl(custId);

    if (err3) {
      res.status(400).json({
        msg: "Unable to fetch customer profile picture from DB.",
      });
      return;
    }

    console.log('------RESULT-----', result1, result3)

    const custProfileUrl = result3[0].profileUrl;

    const imageUrls = { restProfileUrl, custProfileUrl };

    const orderDetails = [Object.assign(result1[0], imageUrls)];

    const [err4, result4] = await OrderDishes.fetchAllDishesForOrder(orderId);

    if (err4) {
      res.status(400).json({
        msg: "Unable to fetch dishes details from OrderDishes table of DB.",
      });
      return;
    }

    res.status(200).json({ orderDetails, orderDishes: result4 });
  } catch (error) {
    console.log('------ERROR-----', error)
    res.status(400).json(error);
  }
};
