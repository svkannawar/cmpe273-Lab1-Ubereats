import React, { useState, useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
function Dish(props) {
  const [qty, setQty] = useState(1);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const { emptyCart } = useCart();

  const handleQtyChange = (e) => {
    setQty(parseInt(e.target.value));
  };

  //console.log("id in cart", items[0].restid);

  const getItemData = () => {
    console.log("----inside add to cart from Dish----");
    const cart = {
      restid: props.restid,
      restName: props.restName,
      custName: props.custName,
      custId: props.custId,
      modeOfDelivery: props.modeOfDelivery,
    };
    const items = {
      id: props.id,
      restName: props.restName,
      restid: props.restid,
      modeOfDelivery: props.modeOfDelivery,
      dishName: props.name,
      dishImageUrl: props.dishImageUrl,
      description: props.description,
      price: props.price,
      qty: qty,
    };
  
    props.addToCart(cart, items, qty);
  };


  return (

    
    <Col sm={2} md={2} lg={2}>
      <div className="card p-2 mb-4">
        <img
          className="card-img-top"
          src={props.dishImageUrl}
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{`$${props.price}`}</p>
          <p className="card-text">
            The main ingredients are : {props.ingredients}
          </p>
          <div className="mb-3">
            <label className="p-2">Qty</label>
            <select
              className="dropcustom p-2"
              onChange={handleQtyChange}
              style={{ height: "40px" }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>
          </div>
          <Button
            className="auto-ms"
            variant="primary"
            size="md"
            style={{ width: "100%" }}
            onClick={getItemData}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Col>
  );
}

export default Dish;
