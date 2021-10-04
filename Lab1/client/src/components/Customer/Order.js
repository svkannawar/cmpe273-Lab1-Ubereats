import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Order(props) {
  let history = useHistory();

  const gotoorder = () => {
    console.log("clicked order", props.id);
    history.push(`/custorder/${props.id}`);
  };

  return (
   
    <tr  onClick={gotoorder}>
    <td>{props.id}</td>
    <td>{props.restName}</td>
    <td>{props.orderStatus}</td>
    <td>{`$${props.total}`}</td>
    
    </tr>
    
  );
}

export default Order;
