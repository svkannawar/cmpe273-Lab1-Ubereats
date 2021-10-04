import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import RestNavbar from "./RestNavbar";
function RestaurantOrdersPage() {
  let { id } = useParams();

  const [orderId, setOrderId] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("");
  const [total, setTotal] = useState("");
  const [timing, setTiming] = useState("");
  const[custName, setCustName] = useState("");

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
    setCustName(dummy_order[0].custName);
  }, []);
  return (
    <div>
      <RestNavbar />
      <Container>
        <Row>
          <h1>Order Details</h1>
          <h3> {custName}</h3>
          <Col>
            {dummy_order_dishes.map((dish) => (
              <Row>{`${dish.dishName} X ${dish.qty}  ${dish.price}`}</Row>
            ))}
          </Col>
        
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantOrdersPage;
