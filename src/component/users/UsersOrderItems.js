import React from "react";
import UserCard from "../allcard/usercard/UserCard";
import { Row, Stack } from "react-bootstrap";
import "animate.css";
function UserOrderItems({ orderItem }) {
  return (
    <Row className="bg-white mb-5 p-2 bx-shadow">
      <p className="fs-3">number of order : # {orderItem.id} </p>
      {orderItem.cartItems
        ? orderItem.cartItems.map((item, index) => (
            <UserCard key={index} cartItem={item} />
          ))
        : null}

      <Stack
        direction="vertical"
        className="  fs-4 justify-content-between animate__animated animate__bounceIn">
        <p>total amount :- ${orderItem.totalOrderPrice}</p>
        <p>
          delivery status :-{" "}
          <strong>
            {orderItem.isDelivered === true ? "deliverd" : "pending"}
          </strong>
        </p>
        <p>
          payment status :-{" "}
          <strong>{orderItem.isPaid === true ? "paid" : "pending"}</strong>
        </p>
        <p>
          payment method :-{" "}
          <strong>
            {orderItem.paymentMethodType === "cash" ? "cash" : "by card"}
          </strong>
        </p>
      </Stack>
    </Row>
  );
}

export default UserOrderItems;
