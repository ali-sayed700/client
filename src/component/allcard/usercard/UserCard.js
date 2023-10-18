import React from "react";

import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function UserCard({ cartItem }) {
  return (
    <Row className=" mb-3  p-3 ">
      <div className="d-flex gap-3 align-items-center justify-content-between  box-cart">
        <Link to={`/products/${cartItem.product._id}`}>
          <div className="image-cart">
            <img src={cartItem.product.imageCover} alt="prod" />
          </div>
        </Link>
        <div className="content-cart">
          <p className="fs-4  ">{cartItem.product.title} </p>
          <p className="my-3 fs-4">
            <span className="text-warning">
              rating {cartItem.product.ratingsAverage || 0}
            </span>
            <span> ({cartItem.product.ratingsQuantity || 0})</span>
          </p>
          <label className="my-3 fs-4">
            amount:{"  "}
            <input
              type="text"
              className="border me-3 w-25 "
              defaultValue={cartItem.count || 0}
            />
          </label>
          <div className="brand-prod py-3">
            <span
              style={{
                backgroundColor: cartItem.color,
              }}></span>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default UserCard;
