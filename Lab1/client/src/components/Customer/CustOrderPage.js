import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
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
  // const dummy_order = [
  //   {
  //     orderId: 13,
  //     restId: 23,
  //     restName: "Sukanta",
  //     orderStatus: "New Order",
  //     deliveryMode: "Delivery",
  //     total: 70,
  //     custId: 24,
  //     custName: "Saurabh",
  //   },
  // ];

  // const dummy_order_dishes = [
  //   {
  //     dishName: "Paneer Bhurji",
  //     qty: 2,
  //     price: 30,
  //   },
  //   {
  //     dishName: "Sizzler",
  //     qty: 1,
  //     price: 20,
  //   },
  //   {
  //     dishName: "Basundi",
  //     qty: 2,
  //     price: 20,
  //   },
  // ];

  useEffect(() => {
    axios({
      method: "get",
      url: BACKEND_URL + `/getOrderDetails?orderId=${id}`,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("cust orders sssssget data", response.data);
        setOrder(response.data);
        setDishes(response.data.orderDishes);
        //
        setTotal(response.data[0].total);
        setRestName(response.data[0].restName);
        setModeOfDelivery(response.data[0].modeOfDelivery);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  console.log(order);
  console.log(dishes)
  return (
    <div>
      <CustNavbar />
      <Container>
        <Row>
          <h1>Order Details</h1>
          <h3> {`${order.orderDetails[0].restName}`}</h3>
          <Col className="mt-4">
            {dishes.map((dish) => (
              <Row>{`${dish.name} X ${dish.qty}  ${dish.price}`}</Row>
            ))}
         <h4><div style={{marginLeft:"-2%"}}>  {`Order Total ${order[0].total}`}
         </div><div>
            {`Mode of Delivery ${order[0].modeOfDelivery}`}</div></h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustOrderPage;
