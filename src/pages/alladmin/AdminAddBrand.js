import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";
import AddBrand from "../../component/admin/AddBrand";

function AdminAddBrand() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 align-items-center">
        <h3 className="mb-4"> add new brand </h3>
        <Col xs={9}>
          <AddBrand />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAddBrand;
