import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarsUser from "../../component/users/SidebarsUser";
import UsersFavProd from "../../component/users/UsersFavProd";

function UserFavProd() {
  return (
    <Container style={{ minHeight: "650px" }}>
      <Row className="my-5 ">
        <h3 className="mb-4"> favorite products </h3>
        <Col xs={9}>
          <UsersFavProd />
        </Col>
        <Col xs={3}>
          <SidebarsUser />
        </Col>
      </Row>
    </Container>
  );
}

export default UserFavProd;
