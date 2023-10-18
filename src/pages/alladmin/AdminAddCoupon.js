import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";

import AddCoupon from "../../component/admin/AddCoupon";

function AdminAddCoupon() {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> add coupon </h3>
        <Col xs={9}>
          <AddCoupon />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAddCoupon;
