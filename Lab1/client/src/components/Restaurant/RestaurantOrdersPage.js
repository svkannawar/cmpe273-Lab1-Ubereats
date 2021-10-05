import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import RestNavbar from "./RestNavbar";
function RestaurantOrdersPage() {
  let { id } = useParams();

  const [orderId, setOrderId] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [total, setTotal] = useState("");

  const [custName, setCustName] = useState("");
  const [custProfileImage, setCustProfileImage] = useState("");
  const [dishes, setDishes] = useState([]);

  const dummy_order = [
    {
      orderId: 13,
      restId: 23,
      restName: "Sukanta",
      orderStatus: "Received",
      modeOfDelivery: "Pick Up",
      total: 70,
      custId: 24,
      custName: "Saurabh",
      custProfileImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
  ];

  const dummy_order_dishes = [
    {
      dishName: "Paneer Bhurji",
      qty: 2,
      price: 30,
    },
    {
      dishName: "Sizzler",
      qty: 1,
      price: 20,
    },
    {
      dishName: "Basundi",
      qty: 2,
      price: 20,
    },
  ];
  useEffect(() => {
    setRestName(dummy_order[0].restName);
    setOrderId(dummy_order[0].orderId);
    setOrderStatus(dummy_order[0].orderStatus);
    setModeOfDelivery(dummy_order[0].modeOfDelivery);
    setTotal(dummy_order[0].total);
    setCustName(dummy_order[0].custName);
    setCustProfileImage(dummy_order[0].custProfileImage);
    setDishes(dummy_order_dishes);
  }, []);

  const changeStatusToPreparing=(e)=>{
setOrderStatus("Preparing");
  }

  const changeStatusToOnTheWay=(e)=>{
  setOrderStatus("On the way");
   }

  const changeStatusToDelivered=(e)=>{
  setOrderStatus("Delivered");
  }

  const changeStatusToPickUpReady=(e)=>{
  setOrderStatus("Pick up Ready");
  }

  const changeStatusToPickedUp=(e)=>{
  setOrderStatus("Picked Up");
  }
  const handleCategoryChange=(e)=>{
    //setOrderStatus("Pickd ssssUp");
    }
  

  const renderComponent=()=>{
    switch(orderStatus){
        case "Received": return  <td>
        <select className="dropcustom p-2" onChange={handleCategoryChange}>
 <option disabled selected>
   {" "}
 
 </option>
 <option value="Preparing">Preparing</option>

</select>
</td>;
        case 'Preparing': return <td>
        <select className="dropcustom p-2" onChange={handleCategoryChange}>
 <option disabled selected>
   {" "}
 
 </option>
 <option value="On the way">On the way</option>

</select>
</td>;
        case 'On the way': return <td>
        <select className="dropcustom p-2" onChange={handleCategoryChange}>
 <option disabled selected>
   {" "}
 
 </option>
 <option value="Delivered">Delivered</option>

</select>
</td>;
        ;
        default: return {orderStatus}
    }
}

  return (
    <div>
      {/* <RestNavbar />
      <Container fluid>
        <Row>
          <h1>Order Details</h1>
          <h3> {custName}</h3>
           </Row>
      </Container> */}
      <RestNavbar />
      <Container fluid>
        <Row>
          <h1>Order Details</h1>
          <h5> Order id: {orderId}</h5>
          <h3> {custName}</h3>
        </Row>
        <Row>
          <Col xs={2} sm={3} md={3} lg={3}>
            <img
              className="card_image"
              style={{}}
              src={custProfileImage}
              alt={custName}
            />
          </Col>
          <Col xs={4} sm={3} md={3} lg={3}>
            <div style={{ paddingTop: "1rem", paddingLeft: "2rem" }}>
              {dishes.map((dish) => (
                <Row>
                  <h6>{`${dish.dishName} X ${dish.qty}  ${dish.price}`}</h6>
                </Row>
              ))}
              <span>
                <h4> Total- ${total}</h4>
              </span>
            </div>
          </Col>
          <Col xs={3} sm={6} md={6} lg={6}>
            <Table striped bordered hover style={{width:"60%"}}>
              <thead>
                <tr>
                  <th>Order Status</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{orderStatus}</td>

               
              
                </tr>
              </tbody>
            </Table>
            <div className="text-end">
            { (orderStatus==="Received" ) ? ( <Button onClick={changeStatusToPreparing} type="submit" variant="primary" size="md">
                Update status
              </Button>) : null
                }
                { orderStatus==="Preparing" && modeOfDelivery==="Delivery" ? ( <Button onClick={changeStatusToOnTheWay} type="submit" variant="primary" size="md">
                Update status
              </Button>) : null
                }
                 { orderStatus==="Preparing" && modeOfDelivery==="Pick Up" ? ( <Button onClick={changeStatusToPickUpReady} type="submit" variant="primary" size="md">
                Update status
              </Button>) : null
                }
                { orderStatus==="On the way" ? ( <Button onClick={changeStatusToDelivered} type="submit" variant="primary" size="md">
                Update status
              </Button>) : null
                }
                 { orderStatus==="Pick up Ready" ? ( <Button onClick={changeStatusToPickedUp} type="submit" variant="primary" size="md">
                Update status
              </Button>) : null
                }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantOrdersPage;
