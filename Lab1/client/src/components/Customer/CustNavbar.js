import {restlist} from "../../action/DashBoardActions";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  Navbar,
  Container,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFullscreenExit, BsJustify } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { restaurantlistfilter , searcByhModeOfDeliveryOnly} from '../../action/DashBoardActions'
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useCart } from "react-use-cart";
const cartFromLocalStorage = localStorage.getItem("cart") || '[]';


//const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items") || '[]');

 function CustNavbar() {

  const dispatch = useDispatch();


  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const { emptyCart } = useCart();

  let history = useHistory();
    const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart, setCart] = useState(cartFromLocalStorage);
  //const [items, setItems] = useState(itemsFromLocalStorage);
  const [restName, setRestName] = useState("");
  const [restId, setRestId] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [total, setTotal] = useState(0);
  const [dishName, setDishName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [dishImageUrl, setDishImageUrl] = useState("");
  const[showPlaceOrder, setShowPlaceOrder]= useState(localStorage.getItem("placeOrder"))
  const [search, setSearch] = useState("")

const id=localStorage.getItem("id");
  useEffect(() => {
  }, []);

  const gotorestaurant = () => {
    console.log("clicked restaurant", restId);
    if(localStorage.getItem("cart")==='[]'){
      history.push('/custDashboard');
    }else{
    history.push(`/custrestaurant/${cart.restId}`);
    }
  };
  const openCart = () => {
    setShowPlaceOrder(localStorage.getItem("placeOrder"));
    setLgShow(true);
    let t =0;
    items.map((item)=>{
      t=(t+(item.itemTotal))});
      setTotal(t);
  };

  const searchByModeOfDelivery = (e)=>{
    
  setModeOfDelivery(e.target.value);
  let body={
    userId : id,
    modeOfDelivery: e.target.value
  }
  history.push('/custDashboard');
  dispatch(searcByhModeOfDeliveryOnly(body));
}
  const emptyCart1 = () => {
    localStorage.removeItem("cart");
    emptyCart();
    localStorage.setItem("placeOrder", "No")
    setShowPlaceOrder(localStorage.getItem("placeOrder"));
    localStorage.setItem("cart", '[]');
    setCart(JSON.parse(localStorage.getItem("cart"||'[]')));
    setRestName("");

  };
  
 const placeOrder = ()=>{
   history.push('/orderConfirm');
 }

 const searchRest=(e)=>{
  e.preventDefault();
  var body={
    id:id,
    search:search
  }

  //action 
  console.log("body", body);
  dispatch(restlist(body));
  
 }

 const handleSearchChange = (e)=>{
   
  setSearch(e.target.value);

 }

 
  return (
    <Container fluid>
      <Row className="justify-conent-center">
        <Col
          sm={3}
          md={2}
          lg={2}
          className="text-center"
          style={{ padding: "0%" }}
        >
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
                  title={<BsJustify />}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
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
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      id="toorders"
                      className="nav-link"
                      to="/customer/orders"
                    >
                      {" "}
                      Orders
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
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
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        id="tologin"
                        to="/login"
                      >
                        {" "}
                        Sign Out
                      </Link>
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    id="tocustdash"
                    className="nav-link"
                    to="/custDashboard"
                  >
                    <h2>
                      Uber
                      <span className="load" style={{ color: "#3FC060" }}>
                        Eats
                      </span>
                    </h2>
                  </Link>
                </Navbar.Brand>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </Col>
        <Col
          sm={3}
          md={4}
          lg={4}
          className="text-center"
          style={{ padding: "0%" }}
        >
          <Navbar
            bg="light"
            expand="lg"
            className="justify-content-center"
            style={{ height: "70px" }}
          >
            <ToggleButtonGroup
              style={{ width: "60%", marginInlineStart: "12%" }}
              type="radio"
              name="options"
              required
            >
              <ToggleButton
                variant="light"
                id="tbg-radio-2"
                value={"delivery"}
                onChange={searchByModeOfDelivery}
              >
                <span style={{ padding: "10px", borderRadius: "5px" }}>
                  Delivery
                </span>
              </ToggleButton>
              <ToggleButton
                variant="light"
                id="tbg-radio-3"
                value={"pick up"}
                onChange={searchByModeOfDelivery}
                
              >
                <span style={{ padding: "10px" }}>Pick Up</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Navbar>
        </Col>
        <Col
          sm={3}
          md={4}
          lg={4}
          className="text-center"
          style={{ padding: "0%" }}
        >
          <Navbar
            bg="light"
            expand="lg"
            className="justify-content-center"
            style={{ height: "70px" }}
          >
            <Form className="d-flex" onSubmit={searchRest}>
              <FormControl
                className="l-5 mr-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar>
        </Col>
        <Col
          sm={3}
          md={2}
          lg={2}
          className="text-center"
          style={{ padding: "0%" }}
        >
          <Navbar
            bg="light"
            expand="lg"
            className="justify-content-center"
            style={{ height: "70px" }}
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Button
                  className="auto-ml"
                  type="submit"
                  variant="dark"
                  size="md"
                  onClick={openCart}
                >
                  {" "}
                  {<AiOutlineShoppingCart />}
                </Button>
              </li>
            </ul>
          </Navbar>
        </Col>
      </Row>
      <>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h1>{restName}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={3} sm={4} md={4} lg={4}>
                 
                </Col>
                <Col xs={3} sm={4} md={4} lg={4}>
                <Button
                    className="auto-ms mb-3"
                    type="submit"
                    variant="primary"
                    size="md"
                    style={{ width: "100%" }}
                    onClick={gotorestaurant}
                  >
                    {" "}
                    Add Item
                  </Button>
                </Col>
                <Col xs={3} sm={4} md={4} lg={4}></Col>
              </Row>

              <Row>
                {items.map((item)=>{

               return(
                <div>
                  <Row>
                  <Col xs={2} sm={2} md={2} lg={2}>
                    {`Qty ${item.quantity}`}
                  </Col>
                  <Col xs={2} sm={6} md={6} lg={6}>
                   <Row> {item.dishName}</Row>
                   <Row>${item.price*item.quantity}</Row>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4}>
                    <img
                      className="card-img-top"
                      src={item.dishImageUrl}
                      alt={item.dishName}
                      style={{width:"60%", height:"70%"}}
                    />
                  </Col>
                  </Row>
                </div>)
                 })
}
              </Row>
              {}
           { showPlaceOrder==="Yes" ? (  <div>
            <h5>Total ${total}</h5> 
             <Row className="justify-content-end"> <Button onClick={emptyCart1} className="mb-3"style={{width:"20%"}}>Empty cart</Button></Row>
             <Button   className="auto-ms mb-3"
                    type="submit"
                    variant="primary"
                    size="md"
                    style={{ width: "100%" }}
                    onClick={placeOrder}>Place order</Button>
                    </div>) : null}
            </Container>
          </Modal.Body>
        </Modal>
      </>
    </Container>
  );
}

export default CustNavbar;
