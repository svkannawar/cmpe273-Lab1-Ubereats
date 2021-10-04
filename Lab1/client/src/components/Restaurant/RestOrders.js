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
      orderStatus: "New Order",
      deliveryMode: "Delivery",
      total: 60,
      custId: 24,
      custName: "Saurabh",
      dishes: [
        {
          dishName: "Paneer Bhurji",
          qty: 2,
          price: 20,
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
      ],
    },
    {
      orderId: 10,
      restId: 243,
      restName: "Marvel",
      orderStatus: "In Progress",
      deliveryMode: "Pickup",
      total: 60,
      custId: 24,
      custName: "Rohit",
      dishes: [
        {
          dishName: "Paneer Bhurji",
          qty: 2,
          price: 20,
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
      ],
    },
    {
      orderId: 13,
      restId: 23,
      restName: "Sukanta",
      orderStatus: "New Order",
      deliveryMode: "Delivery",
      total: 70,
      custId: 24,
      custName: "Saurabh",
      dishes: [
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
      ],
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
