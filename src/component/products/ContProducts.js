import React from "react";
import { Col, Row } from "react-bootstrap";
import ProdcutsGallery from "./ProdcutsGallery";
import ProductInfo from "./ProductInfo";

function ContProducts() {
  return (
    <Row className="py-5">
      <Col md={5}>
        <ProdcutsGallery />
      </Col>
      <Col md={7}>
        <ProductInfo />
      </Col>
    </Row>
  );
}

export default ContProducts;
