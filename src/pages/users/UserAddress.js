import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarsUser from "../../component/users/SidebarsUser";
import UsersAddress from "../../component/users/UsersAddress";

function UserAddress() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> the address </h3>
        <Col xs={9}>
          <UsersAddress />
        </Col>
        <Col xs={3}>
          <SidebarsUser />
        </Col>
      </Row>
    </Container>
  );
}

export default UserAddress;
