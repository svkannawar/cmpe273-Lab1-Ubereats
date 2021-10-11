import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../Common/Divider";
import CustNavbar from "./CustNavbar";
import axios from "axios";
import BACKEND_URL from "../../config/configBackendURL";
function CustOrderPage() {
  let { id } = useParams();

  const [orderId, setOrderId] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("");
  const [total, setTotal] = useState("");

  const [order, setOrder] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [bearer, setBearer] = useState("");
  const [orderTime, setOrderTime] = useState("");

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
  useEffect(() => {
    axios({
      method: "get",
      url: BACKEND_URL + `/getOrderDetails?orderId=${id}`,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("cust orders sssssget data", response.data);
        setOrder(response.data.orderDetails);
        setDishes(response.data.orderDishes);
        //
        setTotal(response.data.orderDetails[0].total);
        setRestName(response.data.orderDetails[0].restName);
        setOrderStatus(response.data.orderDetails[0].orderStatus);
        setModeOfDelivery(response.data.orderDetails[0].modeOfDelivery);
        setOrderTime(response.data.orderDetails[0].time);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      <CustNavbar />
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
            <h3> {restName}</h3>
            {/* <img src={custProfileImage} width="200px" height="160px" alt="user profile" /> */}
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
              <h5>Order Status : {orderStatus}</h5>
             
            </div>
          </Col>
        </Row>
        <Divider />
      </Container>}
      
    </div>
  );
}

export default CustOrderPage;
