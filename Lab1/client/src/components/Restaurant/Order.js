import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Order(props) {
  let history = useHistory();

  const gotoorder = () => {
    console.log("clicked order", props.id);
    history.push(`/restorder/${props.id}`);
  };

  return (
   
    <tr  onClick={gotoorder}>
    <td>{props.id}</td>
    <td>{props.custName}</td>
    <td>{props.orderStatus}</td>
    <td>{props.deliveryMode}</td>
    <td>{props.deliveryStatus}</td>
    <td>{`$${props.total}`}</td>
    
    </tr>
    
  );
}

export default Order;
