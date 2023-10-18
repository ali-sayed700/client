import React from "react";
import PaymentMethod from "../../component/paymentway/PaymentMethod";
import { Container } from "react-bootstrap";

function PaymentWay() {
  return (
    <Container style={{ minHeight: "630px" }}>
      <PaymentMethod />
    </Container>
  );
}

export default PaymentWay;
