import React, { useState } from "react";

import {Navbar, Container, Button, NavDropdown, Form,FormControl, Row, Col, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";

//import BootstrapSwitchButton from "bootstrap-switch-button-react";

function HomeNavbar() {


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
                  to="/customer/profile"
                >
                  {" "}
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link style={{ textDecoration: 'none', color:"black" }}  id="toorders" className="nav-link" to="/customer/orders">
                  {" "}
                  Orders
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: 'none', color:"black" }} 
                  id="tofavourites"
                  className="nav-link"
                  to="/customer/favourites"
                >
                  {" "}
                  Favourites
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
          <Form className="d-flex">
                <FormControl
                  className="l-5 mr-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="outline-success" >Search</Button>
              </Form>
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
                  <Link style={{ textDecoration: 'none', color:"white" }} id="tologin" to="/login">
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

export default HomeNavbar;
