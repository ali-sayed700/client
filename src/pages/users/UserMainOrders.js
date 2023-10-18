import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarsUser from "../../component/users/SidebarsUser";
import UserOrders from "../../component/users/UsersOrders";

function UserMainOrders() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 ">
        {/* <h3 className="mb-4"> productions management </h3> */}
        <Col xs={9}>
          <UserOrders />
        </Col>
        <Col xs={3}>
          <SidebarsUser />
        </Col>
      </Row>
    </Container>
  );
}

export default UserMainOrders;
