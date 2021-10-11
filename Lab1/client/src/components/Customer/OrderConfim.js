import React, { useState, useEffect } from "react";
import axios from "axios";
import BACKEND_URL from "../../config/configBackendURL";
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
import { useCart } from "react-use-cart";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
//const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items") || "[]");

function OrderConfirm() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const { emptyCart } = useCart();

  const [noItem, setNoItem] = useState(items.totalItems);

  const history = useHistory();
  const [bearer, setBearer] = useState("");
  const [userid, setUserId] = useState(localStorage.getItem("id"));
  const [cart, setCart] = useState(cartFromLocalStorage);
  //const [items, setItems] = useState(itemsFromLocalStorage);
  const [restName, setRestName] = useState("");
  const [restId, setRestId] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("delivery");
  const [total, setTotal] = useState(0);
  const [dishName, setDishName] = useState("");
  const [qty, setQty] = useState("");
  const [custName, setCustName] = useState("");
  const [custAddress, setCustAddress] = useState([]);
  const [address, setAddress] = useState("no");
  const [newAddress, setNewAddress] = useState("");
  const [showPlaceOrder, setShowPlaceOrder] = useState(
    localStorage.getItem("placeOrder")
  );
  
  const id = localStorage.getItem("id");
  useEffect(() => {
    axios({
      method: "get",
      url: BACKEND_URL + `/getAddresses?userId=${id}`,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("axios response address data get", response.data);
        setCustAddress(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    setRestName(cart.restName);
    setRestId(cart.restid);
    setQty(items.qty);
    setDishName(items.dishName);

    setModeOfDelivery(cart.modeOfDelivery);
    setCustName(cart.custName);
    setShowPlaceOrder(localStorage.getItem("placeOrder"));

    items.map((item) => {
      setModeOfDelivery(item.modeOfDelivery);
    });

    let t = 0;
    items.map((item) => {
      t = t + item.qty * item.price;
    });
    setTotal(t);
  }, []);

  const radioChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const newAddressChange = (e) => {
    setNewAddress(e.target.value);
  };
  const searchByModeOfDelivery = (e)=>{
    
    setModeOfDelivery(e.target.value);
  }
  const addAddress = (e) => {
    let body = {
      userId: id,
      address: newAddress,
    };

    axios({
      method: "post",
      url: BACKEND_URL + "/addAddress",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        //        console.log((error.response));
      });

  };

  const placeOrder = (e) => {
    e.preventDefault();
    if (modeOfDelivery === "delivery" && address === "no") {
      alert("Please select the address");
      return;
    } else {
      console.log("Thank you for placing the order");
      //   const cart1={custName: cart.custName, modeOfDelivery: modeOfDelivery, restName:restName , restid:restId };
      //   const items1={description: , dishImageUrl: , dishName: , dishid: , price: , qty: };
      console.log("------final order cart---", cart);
      console.log("------final order items---", items);
      const body = { cart: cart, items: items, total: total, address: address };
      
     console.log("body", body);
         axios({
            method: "post",
            url: BACKEND_URL + "/addOrderDetails",
            data: body,
            headers: { "Content-Type": "application/json","Authorization": bearer  },
            
          })
            .then((response) => {
        console.log("order placed", response.data);
            })
            .catch((error) => {
           console.log("error",(error.response));
            });
      alert("Thank you for the order");
      localStorage.setItem("cart", "[]");

      localStorage.setItem("placeOrder", "No");

      setTotal(0);
      emptyCart();
      // window.location.reload();
      history.push("/custDashboard");
    }
  };
  console.log("mod",modeOfDelivery);
  return (
    <div>
      <CustNavbar />
      <Container fluid>
        {!isEmpty ? (
        

         <div>
           {modeOfDelivery==="pick up and delivery" ? (<div>
             <Row>
               <Col>
               <h3>Select the mode of delivery</h3>
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
               </Col>
             </Row>
            
           </div>) : null
           }
          <Row>
            <Col xs={10} sm={7} md={7} lg={7}>
              <h1>{restName}</h1>
              {modeOfDelivery === "delivery" ? (
                <div>
                  <Row>
                    {custAddress.length ?  <h4>Select the address</h4> :  null}
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
                      <Button type="submit" variant="dark" size="md">
                        Add
                      </Button>
                    </Form>
                  </Row>
                </div>
              ) : (
                <div className="mt-5">
                  <h4>Pick up orders will be ready within 45 minutes once order is placed</h4>
                </div>
              )}
            </Col>
            <Col xs={8} sm={5} md={4} lg={5} className="mt-5 text-end mr-2">
              <Button
                className="mb-3"
                style={{ width: "100%" }}
                onClick={placeOrder}
              >
                Place Order
              </Button>
              <Row>
                {items.map((item) => {
                  return (
                    <div>
                      <Row>
                        <Col xs={1} sm={1} md={1} lg={1}>
                          {` ${item.qty}`}
                        </Col>
                        <Col
                          className="justify-content-center"
                          xs={3}
                          sm={7}
                          md={7}
                          lg={7}
                        >
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
          </Row>
          </div>
        ) : (
          <div>Nothing in the cart!</div>
        )}
      </Container>
    </div>
    
  );
}

export default OrderConfirm;
