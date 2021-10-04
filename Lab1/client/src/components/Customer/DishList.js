import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Dish from "./Dish";


const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items") || "[]");

function DishList(props) {

  const [cart, setCart] = useState(cartFromLocalStorage);
  const [items, setItems] = useState(itemsFromLocalStorage);

  useEffect(() => {
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    localStorage.setItem("items", JSON.stringify(items));
  }, [cart, items]);

  const addToCart = (cartaa, itemsaa) => {
    setCart(cartaa);
    setItems([...items, { ...itemsaa }]);
  };
  return (
    <Row >
      <div className="card-group p-3">
        {props.dishes.map((dish) => (
          <Dish
          cart={cart}
          addToCart={addToCart}
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
            custName={props.custName}
            restName={props.restName}
            modeOfDelivery={props.modeOfDelivery}
          />
        ))}
      </div>
    </Row>
  );
}

export default DishList;
