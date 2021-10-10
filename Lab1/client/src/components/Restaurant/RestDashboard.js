import React,{ useState, useEffect } from "react";
import RestNavbar from "./RestNavbar";
import axios from "axios"
import restimg from "./../../images/restaurant_home.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DishList from "./DishList";
import BACKEND_URL from '../../config/configBackendURL';
function RestDashboard() {
  const [bearer, setBearer] = useState("");
  const[restData, setRestData]= useState([]);
  const[dishData, setDishData]= useState([]);

  const id=localStorage.getItem("id");
//console.log("b4useeffect");


  useEffect(() => {
  //  console.log("inside useeffect")

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
                
    //      console.log("axios response", response.data);
          setRestData(response.data);
           
            })
            .catch((error) => {
      //        console.log((error.response.data));
            });


            axios({
              method: "post",
              url: BACKEND_URL + "/getDishes",
              data: body,
              headers: { "Content-Type": "application/json","Authorization": bearer  },
              
            })
              .then((response) => {
                  
        //    console.log("axios response", response.data);
            setDishData(response.data);
             
              })
              .catch((error) => {
          //      console.log((error.response.data));
              });
    
        },[])

  return (
    
    <div>
      <RestNavbar />
     {restData[0] && <Container fluid>
        <Row className="p-4">
          <img
            className="card-img-top mt-4"
            style={{
              width: "100%",
              height: "70vh",
              paddingRight: "20px",
              float: "left",
            }}
            src={restData[0].profileUrl}
            alt={restData[0].location}
          />
        </Row>
        <Row>
        <h1>{restData[0].name}</h1>
          <h4>{restData[0].description}</h4>
        
          
        </Row>
        <Row>
        
        <Col className="text-end" sm={4} md={4} lg={4}>
    
        </Col>
        </Row>
        <Row>
          <Col className="mt-4" sm={9} md={9} lg={9}>
            <h3 style={{ paddingRight: "20px", float: "left" }}>
              Restaurant Menu
            </h3>
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
            <DishList dishes={dishData} />
          </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default RestDashboard;
