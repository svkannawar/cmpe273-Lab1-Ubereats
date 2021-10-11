import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Order from "./Order";

export const OrderList = (props) => {
  return (
    
     <tbody>
        {props.orders.map((order) => (
          
              
            <Order 
              key={order.orderid}
              id={order.orderid}
              restName={order.restName}
              orderStatus={order.orderStatus}
              deliveryStatus={order.deliveryStatus}
              modeOfDelivery={order.modeOfDelivery}
              total={order.total}
              custName={order.custName}
              price={order.price}
              dishes={order.dishes}
            />
            
          
        ))}
     
     </tbody>
  );
};
