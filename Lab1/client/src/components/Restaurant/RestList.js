import React from "react";
import Rest from "./Rest";
import { Row } from "react-bootstrap";

function RestList(props) {
  console.log("restaurant data new", props);
  return (
    <Row>
      <div className="card-group">
        
          {props.restaurants.map((restaurant) => (
            <Rest
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              restProfileUrl={restaurant.restProfileUrl}
              address={restaurant.address}
              description={restaurant.description}
              modeOfDelivery={restaurant.modeOfDelivery}
            />
          ))}     
      </div> 
      </Row>
  );
}

export default RestList;
