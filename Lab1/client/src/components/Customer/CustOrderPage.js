import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustNavbar from "./CustNavbar";
function CustOrderPage() {
  let { id } = useParams();

  const [orderId, setOrderId] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("");
  const [total, setTotal] = useState("");
  const [phone, setPhone] = useState("");
  const [timing, setTiming] = useState("");
  const [restProfileUrl, setRestProfileUrl] = useState("");
  const [modeOfDelivery, setMdeOfDelivery] = useState("");

  const dummy_order = [
    {
      orderId: 13,
      restId: 23,
      restName: "Sukanta",
      orderStatus: "New Order",
      deliveryMode: "Delivery",
      total: 70,
      custId: 24,
      custName: "Saurabh",
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
    setRestName(dummy_order[0].restName);
    setOrderId(dummy_order[0].orderId);
    setOrderStatus(dummy_order[0].orderStatus);
    setDeliveryMode(dummy_order[0].deliveryMode);
    setTotal(dummy_order[0].total);
  }, []);
  return (
    
    <div>
      <CustNavbar/>
      <Container >
        <Row>
          <h1>Order Details</h1>
         <h3> {`${dummy_order[0].restName}`}</h3>
          <Col>
         
            {dummy_order_dishes.map((dish) => (
              <Row>
{`${dish.dishName} X ${dish.qty}  ${dish.price}`}
              </Row>
            ))}
          </Col>
          {`Order Total ${total}`}
          {`Mode of Delivery ${deliveryMode}`}
        </Row>
      </Container>
    </div>
  );
}

export default CustOrderPage;
