import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarsUser from "../../component/users/SidebarsUser";
import AddNewAddress from "../../component/users/AddNewAddress";

function UserAddAddress() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> add new address </h3>
        <Col xs={9}>
          <AddNewAddress />
        </Col>
        <Col xs={3}>
          <SidebarsUser />
        </Col>
      </Row>
    </Container>
  );
}

export default UserAddAddress;
