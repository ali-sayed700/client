import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarsUser from "../../component/users/SidebarsUser";
import EditAddress from "../../component/users/EditAddress";

function UserEditAddress() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> edit address </h3>
        <Col xs={9}>
          <EditAddress />
        </Col>
        <Col xs={3}>
          <SidebarsUser />
        </Col>
      </Row>
    </Container>
  );
}
export default UserEditAddress;
