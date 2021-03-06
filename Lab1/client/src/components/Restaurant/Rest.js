import React, { useState }from 'react'
import { Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function Rest(props) {

    let history= useHistory();

const [displayRest, setDisplayRest] = useState(false);

const gotorestaurant= () =>{
console.log("clicked restaurant", props.id);
history.push(`/restaurant/${props.id}`)
}
    return (
    <Col sm={2} md={2} lg={2}>
    <div className="card p-1 mb-4" onClick={gotorestaurant}>
    <img className="card-img-top" src={props.restProfileUrl} alt={props.name}/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
      <p className="card-text">{props.address}</p>
      <p className="card-text">Mode of Delivery : {props.modeOfDelivery}</p>
    </div>
  </div>
  </Col>
    )
}
export default Rest
