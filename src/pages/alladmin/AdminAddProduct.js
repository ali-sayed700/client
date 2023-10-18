import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";

import AddProduct from "../../component/admin/AddProduct";

function AdminAddProduct() {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> add product </h3>
        <Col xs={9}>
          <AddProduct />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAddProduct;
