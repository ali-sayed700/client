import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BrandCard({ id, img }) {
  return (
    <Col xs={6} md={4} lg={2} className="d-flex justify-content-center py-4 ">
      <Link to={`/product/brand/${id}`}>
        <Card style={{ width: "15rem" }} className="cursor border-0">
          <Card.Img variant="top" src={img} />
        </Card>
      </Link>
    </Col>
  );
}

export default BrandCard;
