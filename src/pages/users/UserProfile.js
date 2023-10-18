import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarsUser from "../../component/users/SidebarsUser";
import UsersProfile from "../../component/users/UsersProfile";

function UserProfile() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> profile page </h3>
        <Col xs={9}>
          <UsersProfile />
        </Col>
        <Col xs={3}>
          <SidebarsUser />
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
