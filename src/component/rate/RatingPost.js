import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddRateHook from "../../usehooks/review/Add.Rate.Hook";
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
function RatingPost() {
  let { id } = useParams();
  const [onChangeText, onChangeValue, rateText, rateValue, user, onSubmitext] =
    AddRateHook(id);

  const ratingChanged = (newRating) => {
    onChangeValue(newRating);
  };
  let settings = {
    value: rateValue,
    classNames: "d-block",
    count: 5,
    onChange: ratingChanged,
    size: 24,
    isHalf: true,
    emptyIcon: <i className="far fa-star"></i>,
    halfIcon: <i className="fa fa-star-half-alt"></i>,
    fullIcon: <i className="fa fa-star"></i>,
    activeColor: "#ffd700",
  };
  if (user)
    return (
      <div>
        <Row>
          <Col className="d-flex align-items-center gap-4">
            <h3 className="mb-0 fs-3">{user.name}</h3>
            <ReactStars {...settings} />
          </Col>
        </Row>
        <div className="my-3 py-4 border-bottom ">
          <textarea
            value={rateText}
            onChange={onChangeText}
            className="w-100 resize-none border rounded fs-3 p-3 "
            placeholder="write a comment"
            rows="2"></textarea>
          <Button
            onClick={onSubmitext}
            variant="outline-dark"
            className="d-flex mt-3 ms-auto py-2 fs-4">
            add a comment
          </Button>
          <ToastContainer />
        </div>
      </div>
    );
}

export default RatingPost;
