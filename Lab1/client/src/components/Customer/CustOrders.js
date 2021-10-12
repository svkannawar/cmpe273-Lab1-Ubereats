import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import CustNavbar from "./CustNavbar";
import { OrderList } from "./OrderList";
import axios from "axios"
import BACKEND_URL from '../../config/configBackendURL';
function CustOrders() {
  const [bearer, setBearer] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [total, setTotal] = useState("");
  const [custName, setCustName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);
  const[statFilter, setStatFilter] =useState("");
  // const [modeOfDelivery, setModeOfDelivery] = useState('');
  // const [modeOfDelivery, setModeOfDelivery] = useState('');

const id = localStorage.getItem("id");

  useEffect(() => {

    var body={
      id:id
    }
   
         axios({
            method: "get",
            url: BACKEND_URL + `/getAllOrdersCustomer?id=${id}`,
            data: body,
            headers: { "Content-Type": "application/json","Authorization": bearer  },
            
          })
            .then((response) => {
                
          console.log("cust orders sssssget data", response.data);
          setOrders(response.data);
          setOrderStatus(response.data[0].name);
         
          setCustName(response.data[0].ingredients);
          setOrderId(response.data[0].orderid);
          setTotal(response.data[0].total);
          setRestName(response.data[0].type);
          setModeOfDelivery(response.data[0].dishImageUrl);
            })
            .catch((error) => {
              console.log((error.response));
            });
   
  }, []);


  const handlefilterchange=(e)=>{
setStatFilter(e.target.value);

console.log(e.target.value);

const body={
  id:id,
  orderStatus: e.target.value
}
console.log("status filter body", id, e.target.value);
    axios({
      method: "post",
      url: BACKEND_URL + "/filterOrderDetailsCust",
      data: body,
      headers: { "Content-Type": "application/json","Authorization": bearer  },
      
    })
      .then((response) => {
          
    console.log("cust orders sssssget data", response.data);
    setOrders(response.data);
    setOrderStatus(response.data[0].name);
   
    setCustName(response.data[0].ingredients);
    setOrderId(response.data[0].orderid);
    setTotal(response.data[0].total);
    setRestName(response.data[0].type);
    setModeOfDelivery(response.data[0].dishImageUrl);
      })
      .catch((error) => {
        console.log((error.response));
      });

  }

  
  return (
    <div>
      <CustNavbar />
      <Container fluid>
        <h3> All orders</h3>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Restaurant Name</th>
              <th>Order Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <OrderList orders={orders} />
        </Table>
        <Row className="text-center"  style={{width:"50%", marginLeft:"27%"}}>
        <label className="p-2">Order Status Filter</label>
                          <select
                            className="drop p-2"
                            value={statFilter}
                            onChange={handlefilterchange}
                          >
                            <option disabled selected>
                              -- select an option --
                            </option>
                            <option value="Order Received">Order Received</option>
                            <option value="Preparing">Preparing</option>
                            <option value="On the way">On the way</option>
                            <option value="Pick up ready">Pick up ready</option>
                            <option value="Picked up">Picked up</option>
                            <option value="Delivered">Delivered</option>
                           
                          </select>
        </Row>
      </Container>
    </div>
  );
}

export default CustOrders;
