import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Orders = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};
export default Orders;
