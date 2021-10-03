import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import CustNavbar from "./../Customer/CustNavbar";
import DishList from "../Customer/DishList";
import restimg from "./../../images/rest2.jpg";

function RestaurantPage() {
  let { id } = useParams();

  const [restId, setRestId] = useState("");
  const [name, setName] = useState("name");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("location");
  const [description, setDescription] = useState("description");
  const [phone, setPhone] = useState("phone");
  const [timing, setTiming] = useState("");
  const [restProfileUrl, setRestProfileUrl] = useState("");
  const [modeOfDelivery, setMdeOfDelivery] = useState("modeOfDelivery");

  const dummy_rest_data = [
    {
      id: 83,
      name: "Swaraj",
      address: "562, Trends Avenue, Milpitas",
      location: "San Jose",
      description: "We serve Maharashtrian chat!!",
      phone: 536276727,
      timing: "Monday to Sunday 10 am to 10 pm",
      restProfileUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      modeOfDelivery: "delivery",
    },
  ];
  useEffect(() => {
    setName(dummy_rest_data[0].name);
    setAddress(dummy_rest_data[0].address);
    setLocation(dummy_rest_data[0].location);
    setDescription(dummy_rest_data[0].description);
    setTiming(dummy_rest_data[0].timing);
    setRestProfileUrl(dummy_rest_data[0].restProfileUrl);
    setMdeOfDelivery(dummy_rest_data[0].modeOfDelivery);
    setPhone(dummy_rest_data[0].phone);
  }, []);

  const dishes_data = [
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 2,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 3,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 4,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 5,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 6,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 7,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 8,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 9,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 10,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
  ];
  console.log("rest image", restProfileUrl);
  return (
    <Container fluid>
      <CustNavbar />
      <Row className="p-4">
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">
            <p>{address}</p>
            <p>{timing}</p>
          </p>
        </div>
        <img
          class="card-img-bottom"
          style={{
            width: "100%",
            height: "70vh",
            paddingRight: "20px",
            float: "left",
          }}
          src={restProfileUrl}
          alt={name}
        />
      </Row>
      <h2>Our Menu</h2>
      <Row>
        <Col className="mt-3">
            <DishList dishes={dishes_data} />   
        </Col>
      </Row>
      {}
    </Container>
  );
}

export default RestaurantPage;
