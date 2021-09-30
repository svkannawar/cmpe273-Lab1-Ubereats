import React, { useState } from "react";
import {Navbar, Container, Button, NavDropdown, Form,FormControl, Row, Col, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

function RestNavbar() {


    const [modeOfDelivery, setModeOfDelivery] = useState("customer");

    const radioChange = (e) => {
        setModeOfDelivery(e.target.value);
       // console.log(e.target.value);
      };

    return (
<Container fluid>
  <Row className="justify-conent-center">
    <Col  sm={3} md={2} lg={2} className="text-center" style={{padding:"0%"}}>
<Navbar
        bg="light"
        expand="lg"
        className="justify-content-center "
        style={{ height: "70px" }}
      >
        <div className="Container-fluid">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown
              className="t-4"
              title={
                
                  
                  <BsJustify />
                
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                {" "}
                <Link style={{ textDecoration: 'none', color:"black" }} 
                  id="tocustprofile"
                  className="nav-link"
                  to="/restaurant/profile"
                >
                  {" "}
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link style={{ textDecoration: 'none', color:"black" }}  id="toorders" className="nav-link" to="/restaunt/orders">
                  {" "}
                  Orders
                </Link>
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {" "}
                <Button
                  className="auto-ms"
                  type="submit"
                  variant="primary"
                  size="md"
                  style={{ width: "100%", borderRadius: "10px" }}
                >
                  {" "}
                  <Link style={{ textDecoration: 'none', color:"white" }} id="tologin" to="/login">
                    {" "}
                    Sign Out
                  </Link>
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand href="#home">
              <h2>
                Uber
                <span className="load" style={{ color: "#3FC060" }}>
                  Eats
                </span>
              </h2>
            </Navbar.Brand>
            </Navbar.Collapse>
        </div>
      </Navbar>
    </Col>
    <Col  sm={3} md={4} lg={4} className="text-center"  style={{padding:"0%"}}>
 <Navbar
        bg="light"
        expand="lg"
        className="justify-content-center"
        style={{ height: "70px" }}
      >
          
      </Navbar>
    </Col>
    <Col  sm={3} md={4} lg={4} className="text-center"  style={{padding:"0%"}}>
    <Navbar
        bg="light"
        expand="lg"
        className="justify-content-center"
        style={{ height: "70px" }}
      >
          
      </Navbar>
    </Col>
    <Col  sm={3} md={2} lg={2} className="text-center"  style={{padding:"0%"}}>
    <Navbar
        bg="light"
        expand="lg"
        className="justify-content-center"
        style={{ height: "70px" }}
      >
            <ul class="navbar-nav ">
                <li class="nav-item">
                <Button
                  className="auto-ms"
                  type="submit"
                  variant="primary"
                  size="md"
                  style={{ width: "100%", borderRadius: "10px" }}
                >
                  {" "}
                  <Link style={{ textDecoration: 'none', color:"white" }} id="tologout" to="/login">
                    {" "}
                    Sign Out
                  </Link>
                </Button>
                </li>
              </ul>
      </Navbar>
    </Col>
  </Row>
</Container>
  );
}

export default RestNavbar;
