import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Order from "./Order";

export const OrderList = (props) => {
  return (
    
     <tbody>
        {props.orders.map((order) => (
          
              
            <Order
              key={order.id}
              id={order.orderId}
              restName={order.restName}
              orderStatus={order.orderStatus}
              delivaryMode={order.delivaryMode}
              total={order.total}
              custName={order.custName}
              price={order.price}
              dishes={order.dishes}
            />
            
          
        ))}
     
     </tbody>
  );
};
