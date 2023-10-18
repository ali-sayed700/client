import React from "react";
import { Container } from "react-bootstrap";
import prod from "../../images/prod_01.png";
function DiscountSectin() {
  return (
    <Container className="bg-dark bg-gradient rounded">
      <div className="d-flex justify-content-around align-items-center ">
        <img src={prod} className="w-25" alt="discount" />
        <p className="fs-3 mb-0 text-white"> discount 40% for buying labtop </p>
      </div>
    </Container>
  );
}

export default DiscountSectin;
