import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import RestNavbar from "./RestNavbar";
import { OrderList } from "./OrderList";
import BACKEND_URL from '../../config/configBackendURL';
import axios from "axios"
function RestOrders() {
  const [bearer, setBearer] = useState("");
  const [modeOfDelivery, setModeOfDelivery] = useState("");
  const [restName, setRestName] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [total, setTotal] = useState("");
  const [custName, setCustName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [ordersData, setOrdersData] = useState([]);
  const [statFilter, setStatFilter] = useState("")
 
  const id = localStorage.getItem("id");


  useEffect(()=>{
    
    
   console.log("Id", id)
         axios({
            method: "get",
            url: BACKEND_URL + `/getAllOrdersRestaurant?id=${id}`,
            headers: { "Content-Type": "application/json","Authorization": bearer  },
            
          })
            .then((response) => {
                
          console.log("axios response orders data get", response.data);
          setOrdersData(response.data)
            })
            .catch((error) => {
              console.log((error.response));
            });

  },[])

 
  const handlefilterchange=(e)=>{
    setStatFilter(e.target.value);
    
    console.log(e.target.value);
    
    const body={
      id:id,
      orderStatus: e.target.value
    }
    
        axios({
          method: "post",
          url: BACKEND_URL + "/filterOrderDetailsRest",
          data: body,
          headers: { "Content-Type": "application/json","Authorization": bearer  },
          
        })
          .then((response) => {
              
        console.log("cust orders sssssget data", response.data);
        setOrdersData(response.data);
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
      <RestNavbar />
      <Container fluid>
        <h3> All orders</h3>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Customer Name</th>
              <th>Order Status</th>
              <th>Mode of Delivery</th>
              <th>Delivery Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <OrderList orders={ordersData} />
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

export default RestOrders;
