import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const CustNavbar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand> <Link id="tologin" to="/login" > Uber<span className="load" style={{color:"#3FC060", textDecoration:"none"}}>Eats</span> </Link></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/features">
    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/pricing">
    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/deets">
    <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/dankmemes">
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default CustNavbar;



// import React from 'react'
// import './CustNavbar.css'
// import { Navbar, Container, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';

// function CustNavbar() {
//     return (

//         <Navbar bg="light" expand="lg" className="me-auto">
//         <Container>
//           <Navbar.Brand href="#home">Uber<span className="load" style={{color:"#3FC060"}}>Eats</span></Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//           <ul class="navbar-nav ">
//                     <li class="nav-item">
//                         <a href="#learn" class="nav-link">1</a>
//                     </li> 
//                     <li class="nav-item">
//                         <a href="#questions" class="nav-link">2</a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="#instructors" class="nav-link">3</a>
//                     </li>
//                     <li class="nav-item" >
//                     <Button className="auto-ms" type="submit" variant="dark" size="md"> <Link id="tologin" to="/login" > Sign In</Link></Button>
                   
//                     </li>
//                 </ul>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     )
// }

// export default CustNavbar

