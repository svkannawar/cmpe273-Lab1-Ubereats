import React, { useState, useEffect } from "react";
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
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CustNavbar from "./CustNavbar";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items") || "[]");

function OrderConfirm() {

    const history=useHistory();
  const [userid, setUserId] = useState(localStorage.getItem("id"));
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [items, setItems] = useState(itemsFromLocalStorage);
  const [restName, setRestName] = useState("");
  const [restId, setRestId] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("delivery");
  const [total, setTotal] = useState(0);
  const [dishName, setDishName] = useState("");
  const [qty, setQty] = useState("");
  const [custName, setCustName] = useState("");
  const [custAddress, setCustAddress] = useState([]);
  const [address, setAddress] = useState("initial");
  const [newAddress, setNewAddress] = useState("");
  const[showPlaceOrder, setShowPlaceOrder]= useState(localStorage.getItem("placeOrder"))

  const cust_addresses = [
    {
      id: 6,
      custid: 16,
      address: "190 Ryland Street",
    },
    {
      id: 4,
      custid: 16,
      address: "190 Ryland Street",
    },

    {
      id: 7,
      custid: 16,
      address: "754, the alameda",
    },
  ];

  useEffect(() => {
    setRestName(cart.restName);
    setRestId(cart.restid);
    setQty(items.qty);
    setDishName(items.dishName);
    setCustAddress(cust_addresses);
    setModeOfDelivery(cart.modeOfDelivery);
    setCustName(cart.custName);
    setShowPlaceOrder(localStorage.getItem("placeOrder"));

    let t = 0;
    items.map((item) => {
      t = t + item.qty * item.price;
    });
    setTotal(t);
  }, []);

  //   const radioChange = (e) => {
  //     setModeOfDelivery(e.target.value);
  //     console.log(e.target.value);
  //   };

  const radioChangeAddress = (e) => {
    setAddress(e.target.value);
    console.log("gyhthh");
  };
  const newAddressChange = (e) => {
    setNewAddress(e.target.value);
  };
  const addAddress = (e) => {
    e.preventDefault();
    console.log("inside submit address,", newAddress);
  };

  const placeOrder=(e)=>{
      e.preventDefault();
if(modeOfDelivery==="delivery" && address==="initial"){
    alert("Please select the address");
    return;
}else{
      console.log("Thank you for placing the order");
    //   const cart1={custName: cart.custName, modeOfDelivery: modeOfDelivery, restName:restName , restid:restId };
    //   const items1={description: , dishImageUrl: , dishName: , dishid: , price: , qty: };
      
      const data = { cart: cart, items:items, total:total, address:address };
      console.log(data);
      alert("Thank you for the order");
      localStorage.removeItem("cart");
    localStorage.removeItem("items");
    localStorage.setItem("placeOrder", "No");
   
    setTotal(0);
    // window.location.reload();
      history.push('/custDashboard');
}
  }
  return (
    <div>
      <CustNavbar />
      <Container fluid>
      { showPlaceOrder==="Yes" ? (
        <Row>
          <Col xs={10} sm={7} md={7} lg={7}>
            <h1>{restName}</h1>
            {modeOfDelivery === "delivery" ? (
              <div>
                <Row>
                  <h4>Select the address</h4>
                </Row>
                <form>
                  {custAddress.map((address) => {
                    return (
                      <div>
                        <input
                          className="mb-3"
                          type="radio"
                          id="add"
                          name="address"
                          value={address.address}
                          onClick={radioChangeAddress}
                          required
                        />
                        <label style={{ padding: "10px" }} forHTML="html">
                          <h6>{address.address}</h6>
                        </label>
                      </div>
                    );
                  })}
                </form>

                <Row>
                  <h3>Add New Address</h3>
                  <Form onSubmit={addAddress}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={newAddressChange}
                      />
                    </Form.Group>
                    <Button type="submit" variant="primary" size="md">
                      Add
                    </Button>
                  </Form>
                </Row>
              </div>
            ) : (
              <div className="mt-5">
               <h4>We alwayas welcome order pickups!!</h4>
              </div>
            )}
          </Col>
          <Col xs={8} sm={5} md={4} lg={5} className="mt-5 text-end mr-2">
            <Button className="mb-3" style={{ width: "100%" }} onClick={placeOrder}>Place Order</Button>
            <Row>
              {items.map((item) => {
                return (
                  <div>
                    <Row>
                      <Col xs={1} sm={1} md={1} lg={1}>
                        {` ${item.qty}`}
                      </Col>
                      <Col className="justify-content-center" xs={3} sm={7} md={7} lg={7}>
                        <Row> {item.dishName}</Row>
                        <Row>${item.price * item.qty}</Row>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4}>
                        <img
                          className="card-img-top"
                          src={item.dishImageUrl}
                          alt={item.dishName}
                          style={{ width: "60%", height: "70%" }}
                        />
                      </Col>
                    </Row>
                  </div>
                );
              })}{" "}
              <h5>Total ${total}</h5>
            </Row>
          </Col>
        </Row>) : 
        <div>
          Nothing in the cart!
          </div>}
      </Container>
    </div>
  );
}

export default OrderConfirm;
