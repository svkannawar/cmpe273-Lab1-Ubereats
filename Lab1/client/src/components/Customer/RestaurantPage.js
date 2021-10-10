import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import CustNavbar from "./../Customer/CustNavbar";
import DishList from "../Customer/DishList";
import BACKEND_URL from '../../config/configBackendURL';
import axios from "axios"

const idFromLS= localStorage.getItem("id");
function RestaurantPage() {

  let { id } = useParams();

  const [bearer, setBearer] = useState("");
  const [restId, setRestId] = useState("");
  const [name, setName] = useState("name");
  const [custName, setCustName] = useState("custName");
  const [address, setAddress] = useState("");
  const [custId, setCustId] = useState(idFromLS);
  const [location, setLocation] = useState("location");
  const [description, setDescription] = useState("description");
  const [phone, setPhone] = useState("phone");
  const [timing, setTiming] = useState("");
  const [restProfileUrl, setRestProfileUrl] = useState("");
  const [modeOfDelivery, setMdeOfDelivery] = useState("");
const [dishesData, setDishesData]= useState([]);
  // const dummy_rest_data = [
  //   {
  //     id: 84,
  //     name: "Suknta",
  //     address: "562, Trends Avenue, Milpitas",
  //     location: "San Jose",
  //     description: "We serve Maharashtrian chat!!",
  //     phone: 536276727,
  //     timing: "Monday to Sunday 10 am to 10 pm",
  //     restProfileUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  //     modeOfDelivery: "delivery",
  //   },
  // ];

  
  const rest=localStorage.getItem("restid")
  console.log("restid from param", rest)

  useEffect(() => {



    var body={
      restId:id
    }
   
         axios({
            method: "post",
            url: BACKEND_URL + "/getRestProfile",
            data: body,
            headers: { "Content-Type": "application/json","Authorization": bearer  },
            
          })
            .then((response) => {
        console.log("xcvbnmnbvcxxcvbn", response.data);
    setName(response.data[0].name);
    setAddress(response.data[0].address);
    setLocation(response.data[0].location);
    setDescription(response.data[0].description);
    setTiming(response.data[0].timing);
    setRestProfileUrl(response.data[0].profileUrl);
    setMdeOfDelivery(response.data[0].modeOfDelivery);
    setPhone(response.data[0].phone);
           
            })
            .catch((error) => {
      //        console.log((error.response.data));
            });


            var body1={
              id:id
            }
            axios({
              method: "post",
              url: BACKEND_URL + "/getDishes",
              data: body,
              headers: { "Content-Type": "application/json","Authorization": bearer  },
              
            })
              .then((response) => {
          console.log("restprofurl", response.data);
      setDishesData(response.data)
             
              })
              .catch((error) => {
        //        console.log((error.response.data));
              });
        

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
          <h1 class="card-title">{name}</h1>
          <h4 class="card-text">{description}</h4>
          <p class="card-text">
            <h5>{location}</h5>
            <h5>{timing}</h5>
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
            <DishList dishes={dishesData} id={id} custName={custName} restName={name} modeOfDelivery={modeOfDelivery} custId={custId} />   
        </Col>
      </Row>
      {}
    </Container>
  );
}

export default RestaurantPage;
