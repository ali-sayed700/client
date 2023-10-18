import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";
import AddCatogery from "../../component/admin/AddCatogery";

function AdminAddCatogery() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 align-items-center">
        <h3 className="mb-4"> add catogery </h3>
        <Col xs={9}>
          <AddCatogery />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAddCatogery;
