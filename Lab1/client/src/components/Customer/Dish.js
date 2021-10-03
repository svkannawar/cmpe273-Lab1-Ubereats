import React, { useState }from 'react'
import { Col, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function Dish(props) {

    let history= useHistory();

const [displayRest, setDisplayRest] = useState(false);

const gotodish= () =>{
console.log("clicked restaurant", props.restid);
console.log("clicked disn number", props.id);
history.push(`/login`)
}
    return (
        <Col sm={2} md={2} lg={2}>
        <div className="card p-2 mb-4" onClick={gotodish}>
        <img className="card-img-top" src={props.dishImageUrl} alt={props.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{`$${props.price}`}</p>
          <p className="card-text">The main ingredients are : {props.ingredients}</p>
          <Button
                  className="auto-ms"
                  variant="primary"
                  size="md"
                  style={{ width: "100%"}}
          >Add to cart
          </Button>
        </div>
      </div>
      </Col>
    )
}

export default Dish
