import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import RestNavbar from "./RestNavbar";
import BACKEND_URL from "../../config/configBackendURL";
import axios from "axios";

function RestaurantOrdersPage() {
  let { id } = useParams();

  //const [orderId, setOrderId] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [total, setTotal] = useState("");
  const [bearer, setBearer] = useState("");
  const [custName, setCustName] = useState("");
  const [custProfileImage, setCustProfileImage] = useState("");
  const [dishes, setDishes] = useState([]);
  const [order, setOrder] = useState([]);

  const dummy_order = [
    {
      orderId: 13,
      restId: 23,
      restName: "Sukanta",
      orderStatus: "Order Received",
      modeOfDelivery: "Pick Up",
      deliveryStatus: "New Order",
      total: 70,
      custId: 24,
      custName: "Saurabh",
      custProfileImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
  ];

  const dummy_order_dishes = [
    {
      dishName: "Paneer Bhurji",
      qty: 2,
      price: 30,
    },
    {
      dishName: "Sizzler",
      qty: 1,
      price: 20,
    },
    {
      dishName: "Basundi",
      qty: 2,
      price: 20,
    },
  ];
  useEffect(() => {
    //    console.log("orderid", id);
    axios({
      method: "get",
      url: BACKEND_URL + `/getOrderDetails?orderId=${id}`,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        //console.log("axios response orders  data get", response.data.orderDetails);
        //console.log("axios response dishes data get", response.data.orderDishes);
        //setOrdersData(response.data)
        setOrder(response.data.orderDetails);
        setDishes(response.data.orderDishes);
        setRestName(response.data.orderDetails[0].restName);
        setOrderStatus(response.data.orderDetails[0].orderStatus);
        setModeOfDelivery(response.data.orderDetails[0].modeOfDelivery);
        setTotal(response.data.orderDetails[0].total);
        setCustName(response.data.orderDetails[0].custName);
        setCustProfileImage(response.data.orderDetails[0].custProfileImage);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);


  const changeStatusToPreparing = (e) => {
    setOrderStatus("Preparing");
    let body = {
      orderId: id,
      orderStatus: "Preparing",
    };
    axios({
      method: "put",
      url: BACKEND_URL + "/updateOrderStatus",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("update order status", response.data);
        
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const changeStatusToOnTheWay = (e) => {
    setOrderStatus("On the way");
    let body = {
      orderId: id,
      orderStatus: "On the way",
    };
    axios({
      method: "put",
      url: BACKEND_URL + "/updateOrderStatus",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("update order status", response.data);
        
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const changeStatusToDelivered = (e) => {
    setOrderStatus("Delivered");
    let body = {
      orderId: id,
      orderStatus: "Delivered",
    };
    axios({
      method: "put",
      url: BACKEND_URL + "/updateOrderStatus",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("update order status", response.data);
        
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const changeStatusToPickUpReady = (e) => {
    setOrderStatus("Pick up Ready");
    let body = {
      orderId: id,
      orderStatus: "Pick up Ready",
    };
    axios({
      method: "put",
      url: BACKEND_URL + "/updateOrderStatus",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("update order status", response.data);
       
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const changeStatusToPickedUp = (e) => {
    setOrderStatus("Picked Up");
    let body = {
      orderId: id,
      orderStatus: "Picked Up",
    };
    axios({
      method: "put",
      url: BACKEND_URL + "/updateOrderStatus",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("update order status", response.data);
        
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  

  return (
    <div>
     
      <RestNavbar />
      <Container fluid>
        <Row>
          <h1>Order Details</h1>
          <h5> Order id: {id}</h5>
          <h3> {custName}</h3>
        </Row>
        <Row>
          <Col xs={2} sm={3} md={3} lg={3}>
            <img
              className="card_image"
              style={{}}
              src={custProfileImage}
              alt={custName}
            />
          </Col>
          <Col xs={4} sm={3} md={3} lg={3}>
            <div style={{ paddingTop: "1rem", paddingLeft: "2rem" }}>
              {dishes.map((dish) => (
                <Row>
                  <h6>{`${dish.name}  ${dish.qty}  X  ${dish.price}`}</h6>
                </Row>
              ))}
              <span>
                <h4> Total- ${total}</h4>
              </span>
            </div>
          </Col>
          <Col xs={3} sm={6} md={6} lg={6}>
            <Table striped bordered hover style={{ width: "60%" }}>
              <thead>
                <tr>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{orderStatus}</td>
                </tr>
              </tbody>
            </Table>
            <div className="text-end">
              {orderStatus === "Order Received" ? (
                <Button
                  onClick={changeStatusToPreparing}
                  type="submit"
                  variant="primary"
                  size="md"
                >
                  Update status
                </Button>
              ) : null}
              {orderStatus === "Preparing" && modeOfDelivery === "delivery" ? (
                <Button
                  onClick={changeStatusToOnTheWay}
                  type="submit"
                  variant="primary"
                  size="md"
                >
                  Update status
                </Button>
              ) : null}
              {orderStatus === "Preparing" && modeOfDelivery === "pick up" ? (
                <Button
                  onClick={changeStatusToPickUpReady}
                  type="submit"
                  variant="primary"
                  size="md"
                >
                  Update status
                </Button>
              ) : null}
              {orderStatus === "On the way" ? (
                <Button
                  onClick={changeStatusToDelivered}
                  type="submit"
                  variant="primary"
                  size="md"
                >
                  Update status
                </Button>
              ) : null}
              {orderStatus === "Pick up Ready" ? (
                <Button
                  onClick={changeStatusToPickedUp}
                  type="submit"
                  variant="primary"
                  size="md"
                >
                  Update status
                </Button>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantOrdersPage;
