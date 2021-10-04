import React from "react";
import { Row } from "react-bootstrap";
import DishForRest from "../Restaurant/DishForRest";

function DishList(props) {
  return (
    <Row >
      <div className="card-group p-3">
        {props.dishes.map((dish) => (
          <DishForRest
            key={dish.id}
            id={dish.id}
            name={dish.name}
            dishImageUrl={dish.dishImageUrl}
            description={dish.description}
            category={dish.category}
            type={dish.type}
            price={dish.price}
            ingredients={dish.ingredients}
            restid={dish.restid}
          />
        ))}
      </div>
    </Row>
  );
}

export default DishList;
