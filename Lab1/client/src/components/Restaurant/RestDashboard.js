import React from "react";
import RestNavbar from "./RestNavbar";
import restimg from "./../../images/restaurant_home.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DishList from "./DishList";
function RestDashboard() {
  const dummy_data = [
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
  return (
    <div>
      <RestNavbar />
      <Container fluid>
        <Row className="p-4">
          <img
            className="centerimg mt-4"
            style={{
              width: "100%",
              height: "70vh",
              paddingRight: "20px",
              float: "left",
            }}
            src={dummy_data[0].restProfileUrl}
            alt={dummy_data[0].name}
          />
        </Row>
        <Row>
          <Col sm={9} md={9} lg={9}>
            <h1 style={{ paddingRight: "20px", float: "left" }}>
              Restaurant Menu
            </h1>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <Link
              className="float-end mt-2"
              style={{ paddingRight: "20px", textDecoration: "none" }}
              to="/addDish"
            >
              <h5>Add New Dish</h5>
            </Link>
          </Col>
        </Row>
        {/* <Row>
          <h1 class="display-6 mt-2">Salads</h1>
        </Row>
        <Row>
          <h1 class="display-6 mt-2">Main Course</h1>
        </Row>
        <Row>
          <h1 class="display-6 mt-2">Desserts</h1>
        </Row>
        <Row>
          <h1 class="display-6 mt-2">Beverages</h1>
        </Row> */}

        <Row>
          <Col className="mt-3">
            <DishList dishes={dishes_data} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RestDashboard;
