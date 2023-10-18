import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CatogeryCard = ({ img, background, title, id }) => {
  return (
    <Col xs={6} md={4} lg={2} className="d-flex justify-content-around my-4">
      <div className="allcard ">
        <div
          className="catogery-card"
          style={{ backgroundColor: `${background}` }}>
          <Link to={`/product/category/${id}`}>
            <img src={img} alt={`${title}`} />
            <p>{title}</p>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CatogeryCard;
