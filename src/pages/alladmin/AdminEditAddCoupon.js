import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";

import EditCoupon from "../../component/admin/EditCoupon";

function AdminEditAddCoupon() {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> edit coupon </h3>
        <Col xs={9}>
          <EditCoupon />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEditAddCoupon;
