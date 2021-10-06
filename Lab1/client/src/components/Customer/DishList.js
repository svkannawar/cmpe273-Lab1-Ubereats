import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Dish from "./Dish";

import { useCart } from "react-use-cart";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
//const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items") || "[]");

function DishList(props) {
  const { addItem } = useCart();


  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];


  const [cart, setCart] = useState(cartFromLocalStorage);
  //const [items, setItems] = useState(itemsFromLocalStorage);

  useEffect(() => {
    
    //localStorage.setItem("cart", JSON.stringify(cart));
    
   // localStorage.setItem("items", JSON.stringify(items));
   
  }, [cart]);

  const addToCart = (cartaa, itemsaa,qty) => {
    localStorage.setItem("placeOrder", "Yes");
    setCart(cartaa);
    //setItems([...items, { ...itemsaa }]);
    localStorage.setItem("cart", JSON.stringify(cartaa));
   // localStorage.setItem("items", JSON.stringify(items));

console.log("react wala cart", itemsaa);
   
      addItem(itemsaa, qty);
    
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
            custId={props.custId}
          />
        ))}
      </div>
    </Row>
  );
}

export default DishList;
