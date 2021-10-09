import React from "react";
import Rest from "./Rest";
import { Row } from "react-bootstrap";


function RestList(props) {
 // console.log("restaurant data new", props);
  return (
    <Row>
      <div className="card-group">
          {props.restaurants.map((restaurant) => (
            <Rest
              key={restaurant.credid}
              id={restaurant.credid}
              name={restaurant.name}
              restProfileUrl={restaurant.profileUrl}
              phone={restaurant.phone}
              description={restaurant.description}
              modeOfDelivery={restaurant.modeOfDelivery}
              timings={restaurant.timings}
              location={restaurant.location}
            />
          ))}     
      </div> 
      </Row>
  );
}
export default RestList;
