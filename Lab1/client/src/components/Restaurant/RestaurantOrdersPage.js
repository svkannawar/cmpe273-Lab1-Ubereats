import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import RestNavbar from "./RestNavbar";
import Divider from "../Common/Divider";
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
  const [orderTime, setOrderTime] = useState("");

 
  useEffect(() => {
    //    console.log("orderid", id);
    axios({
      method: "get",
      url: BACKEND_URL + `/getOrderDetails?orderId=${id}`,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("axios response orders  data get", response.data.orderDetails);
        console.log("axios response dishes data get", response.data.orderDishes);
        //setOrdersData(response.data)
        setOrder(response.data.orderDetails);
        setDishes(response.data.orderDishes);
        setRestName(response.data.orderDetails[0].restName);
        setOrderStatus(response.data.orderDetails[0].orderStatus);
        setModeOfDelivery(response.data.orderDetails[0].modeOfDelivery);
        setTotal(response.data.orderDetails[0].total);
        setCustName(response.data.orderDetails[0].custName);
        setCustProfileImage(response.data.orderDetails[0].custProfileUrl);
        setOrderTime(response.data.orderDetails[0].time);
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
        console.log(error.response);
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
        console.log(error.response);
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
        console.log(error.response);
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
        console.log(error.response);
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
        console.log(error.response);
      });
  };

  const renderUpdateOrderStatus = () => {
    return (
      <div>
        {orderStatus === "Order Received" ? (
          <Button
            onClick={changeStatusToPreparing}
            type="submit"
            variant="dark"
            size="md"
          >
            Update status
          </Button>
        ) : null}
        {orderStatus === "Preparing" && modeOfDelivery === "delivery" ? (
          <Button
            onClick={changeStatusToOnTheWay}
            type="submit"
            variant="dark"
            size="md"
          >
            Update status
          </Button>
        ) : null}
        {orderStatus === "Preparing" && modeOfDelivery === "pick up" ? (
          <Button
            onClick={changeStatusToPickUpReady}
            type="submit"
            variant="dark"
            size="md"
          >
            Update status
          </Button>
        ) : null}
        {orderStatus === "On the way" ? (
          <Button
            onClick={changeStatusToDelivered}
            type="submit"
            variant="dark"
            size="md"
          >
            Update status
          </Button>
        ) : null}
        {orderStatus === "Pick up Ready" ? (
          <Button
            onClick={changeStatusToPickedUp}
            type="submit"
            variant="dark"
            size="md"
          >
            Update status
          </Button>
        ) : null}
      </div>
    )
  }

  const renderQuantityBox = (quantity) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #bdbdbd'
        }}
      >
        {quantity}
      </div>
    );
  }
  

  return (
    <div>
     
      <RestNavbar />
     {order && <Container fluid>
        <Row className="mt-3">
          <Col>
        
          </Col>
        </Row>
        <Row>
          <h1>Order Details : {id}</h1>
        </Row>
        <Row>
          <Col xs={2} sm={3} md={3} lg={3}>
            <h3> {custName}</h3>
            <img src={custProfileImage} width="200px" height="160px" alt="user profile" />
          </Col>
          <Col xs={4} sm={3} md={3} lg={3}>
            <div style={{paddingLeft: "2rem" }}>
              {dishes.map((dish) => (
                <Row className="mb-3">
                  <Col xs={2}>
                    {renderQuantityBox(dish.qty)}
                  </Col>
                  <Col>
                    <h6>{dish.name}</h6>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
          <Col sm={3}>
            <div>
              {dishes.length} items for ${total}
            </div>
            <div>
                {orderTime && (orderTime.split('T')[0] + " at " + orderTime.split('T')[1])}
            </div>
          </Col>
          <Col sm={3}>
            <div>
              <h5>Status : {orderStatus}</h5>
              {renderUpdateOrderStatus()}
            </div>
          </Col>
        </Row>
        <Divider />
      </Container>}
    </div>
  );
}

export default RestaurantOrdersPage;
