import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";
import SubCatogery from "../../component/admin/SubCatogery";

function AdminSubCatogery() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 align-items-center">
        <Col xs={9}>
          <SubCatogery />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminSubCatogery;
