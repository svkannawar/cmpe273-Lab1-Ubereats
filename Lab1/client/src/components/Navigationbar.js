import React from 'react'
import { Navbar, Container, } from "react-bootstrap";

function Navigationbar() {
    return (
        <Navbar bg="light" expand="lg" className="me-auto">
        <Container>
          <Navbar.Brand href="#home">Uber<span className="load" style={{color:"#3FC060"}}>Eats</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a href="#learn" class="nav-link">1</a>
                    </li> 
                    <li class="nav-item">
                        <a href="#questions" class="nav-link">2</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">3</a>
                    </li>
                </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigationbar
