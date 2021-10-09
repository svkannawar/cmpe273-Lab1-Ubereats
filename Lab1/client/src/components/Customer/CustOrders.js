import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import CustNavbar from "./CustNavbar";
import { OrderList } from "./OrderList";
import axios from "axios"
import BACKEND_URL from '../../config/configBackendURL';
function CustOrders() {
  const [bearer, setBearer] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [total, setTotal] = useState("");
  const [custName, setCustName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);
  // const [modeOfDelivery, setModeOfDelivery] = useState('');
  // const [modeOfDelivery, setModeOfDelivery] = useState('');

const id = localStorage.getItem("id");

  useEffect(() => {

    var body={
      id:id
    }
   
         axios({
            method: "get",
            url: BACKEND_URL + `/getAllOrdersCustomer?id=${id}`,
            data: body,
            headers: { "Content-Type": "application/json","Authorization": bearer  },
            
          })
            .then((response) => {
                
          console.log("cust orders sssssget data", response.data);
          setOrders(response.data);
          setOrderStatus(response.data[0].name);
         
          setCustName(response.data[0].ingredients);
          setOrderId(response.data[0].orderid);
          setTotal(response.data[0].total);
          setRestName(response.data[0].type);
          setModeOfDelivery(response.data[0].dishImageUrl);
            })
            .catch((error) => {
              console.log((error.response));
            });
   
  }, []);
  // const dummy_orders = [
  //   {
  //     orderId: 1,
  //     restId: 23,
  //     restName: "Sukanta",
  //     orderStatus: "New Order",
  //     delivaryMode: "Delivery",
  //     total: 60,
  //     custId: 24,
  //     custName: "Saurabh",
  //     dishes: [
  //       {
  //         dishName: "Paneer Bhurji",
  //         qty: 2,
  //         price: 20,
  //       },
  //       {
  //         dishName: "Sizzler",
  //         qty: 1,
  //         price: 20,
  //       },
  //       {
  //         dishName: "Basundi",
  //         qty: 2,
  //         price: 20,
  //       },
  //     ],
  //   },
  //   {
  //     orderId: 10,
  //     restId: 243,
  //     restName: "Marvel",
  //     orderStatus: "In Progress",
  //     delivaryMode: "Pickup",
  //     total: 60,
  //     custId: 24,
  //     custName: "Rohit",
  //     dishes: [
  //       {
  //         dishName: "Paneer Bhurji",
  //         qty: 2,
  //         price: 20,
  //       },
  //       {
  //         dishName: "Sizzler",
  //         qty: 1,
  //         price: 20,
  //       },
  //       {
  //         dishName: "Basundi",
  //         qty: 2,
  //         price: 20,
  //       },
  //     ],
  //   },
  //   {
  //     orderId: 13,
  //     restId: 23,
  //     restName: "Sukanta",
  //     orderStatus: "New Order",
  //     delivaryMode: "Delivery",
  //     total: 70,
  //     custId: 24,
  //     custName: "Saurabh",
  //     dishes: [
  //       {
  //         dishName: "Paneer Bhurji",
  //         qty: 2,
  //         price: 30,
  //       },
  //       {
  //         dishName: "Sizzler",
  //         qty: 1,
  //         price: 20,
  //       },
  //       {
  //         dishName: "Basundi",
  //         qty: 2,
  //         price: 20,
  //       },
  //     ],
  //   },
  // ];
 
  return (
    <div>
      <CustNavbar />
      <Container fluid>
        <h3> All orders</h3>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Restaurant Name</th>
              <th>Order Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <OrderList orders={orders} />
        </Table>
      </Container>
    </div>
  );
}

export default CustOrders;
