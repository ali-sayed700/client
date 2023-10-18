import React from "react";
import AdminCardProd from "../allcard/admincard/AdminCardProd";
import { Row } from "react-bootstrap";

function ProductAdmin({ product }) {
  return (
    <Row>
      {Array.isArray(product.data)
        ? product.data.map((prod, index) => {
            return <AdminCardProd key={index} product={prod} />;
          })
        : null}
    </Row>
  );
}

export default ProductAdmin;
