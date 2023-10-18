import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";
import OrderAdmin from "../../component/admin/OrderAdmin";

function AllOrder() {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> orders management </h3>
        <Col xs={9}>
          <OrderAdmin />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AllOrder;
