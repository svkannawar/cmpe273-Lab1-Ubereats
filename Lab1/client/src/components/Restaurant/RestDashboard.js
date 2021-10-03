import React from 'react'
import RestNavbar from './RestNavbar'
import restimg from'./../../images/restaurant_home.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
function RestDashboard() {
    return (
        <div>
            <RestNavbar/>
            <Container fluid>
            <Row className="p-4">
            <img className="centerimg mt-4" style={{width:"100%", height:"70vh", paddingRight : "20px", float:"left"}}src={restimg}/>
            </Row>
            <Row>
            <Col sm={9} md={9} lg={9}>
            <h1 class="display-6 mt-2" style={{ paddingRight : "20px", float:"left"}}>Appetizers</h1> 
            </Col>
            <Col sm={3} md={3} lg={3}> 
            <Link className="float-end mt-2" style={{paddingRight:"20px", textDecoration:"none"}} to='/addDish'><h5>Add New Dish</h5></Link>
            </Col>
            </Row>
            <Row>
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
            </Row>
        </Container>
        </div>
    )
}

export default RestDashboard
