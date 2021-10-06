import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import RestNavbar from "./RestNavbar";
import { OrderList } from "./OrderList";
function CustOrdrs() {
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [total, setTotal] = useState("");
  const [custName, setCustName] = useState("");
  const [orderId, setOrderId] = useState("");
  // const [modeOfDelivery, setModeOfDelivery] = useState('');
  // const [modeOfDelivery, setModeOfDelivery] = useState('');
  // const [modeOfDelivery, setModeOfDelivery] = useState('');

  const dummy_orders = [
    {
      orderId: 1,
      restId: 23,
      restName: "Sukanta",
      orderStatus: "Order Received",
      deliveryMode: "Delivery",
      total: 60,
      custId: 24,
      custName: "Saurabh",
      deliveryStatus: "New Order"
     
    },
    {
      orderId: 10,
      restId: 243,
      restName: "Marvel",
      orderStatus: "Preparing",
      deliveryMode: "Pickup",
      total: 60,
      custId: 24,
      custName: "Rohit",
      deliveryStatus: "New Order"
      
    },
    {
      orderId: 13,
      restId: 23,
      restName: "Sukanta",
      orderStatus: "Delivered",
      deliveryMode: "Delivery",
      total: 70,
      custId: 24,
      custName: "Saurabh",
      deliveryStatus: "Delivered"
      
    },
    {
      orderId: 113,
      restId: 23,
      restName: "Jack In The Box",
      orderStatus: "Cancelled",
      deliveryMode: "Delivery",
      total: 70,
      custId: 24,
      custName: "Saurabh",
      deliveryStatus: "Cancelled"
      
    },
    {
      orderId: 43,
      restId: 23,
      restName: "Sukanta",
      orderStatus: "Picked up",
      deliveryMode: "Delivery",
      total: 70,
      custId: 24,
      custName: "Saurabh",
      deliveryStatus: "Delivered"
      
    },
  ];
 
  return (
    <div>
      <RestNavbar />
      <Container fluid>
        <h3> All orders</h3>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Customer Name</th>
              <th>Order Status</th>
              <th>Mode of Delivery</th>
              <th>Delivery Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <OrderList orders={dummy_orders} />
        </Table>
      </Container>
    </div>
  );
}

export default CustOrdrs;
