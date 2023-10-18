import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DelReview } from "../../redux/reducers/all-methods.reviews/Delete.Reviews";
import { Notify } from "../../usehooks/UseNotification";
import { useEffect } from "react";
import EditRateHook from "../../usehooks/review/Edit.Rate.Hook";
import ReactStars from "react-rating-stars-component";

function RateItem({ review }) {
  const [
    handleEdit,
    handleEditClose,
    handleEditShow,
    showEdit,
    onChangeText,
    editText,
    editRating,
    ratingChanged,
  ] = EditRateHook(review);
  let dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isUser, setIsUSer] = useState(false);
  if (user)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (user._id === review.user._id) {
        setIsUSer(true);
      }
    }, [review.user._id, user._id]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleDelete = async () => {
    await dispatch(DelReview(review._id));
    setIsUSer(false);
    Notify("deleted review successfully", "success");
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  let editChangedRating = (e) => {
    ratingChanged(e);
  };

  let settings = {
    value: editRating,
    classNames: "d-block",
    count: 5,
    onChange: editChangedRating,
    size: 24,
    isHalf: true,
    emptyIcon: <i className="far fa-star"></i>,
    halfIcon: <i className="fa fa-star-half-alt"></i>,
    fullIcon: <i className="fa fa-star"></i>,
    activeColor: "#ffd700",
  };
  return (
    <div className="py-3">
      <div className="d-flex gap-4 align-items-center">
        <p className="fs-4">{review.user.name}</p>
        <p className="fs-3 d-flex align-items-center ">
          {review.rating}
          <i
            className="bx bxs-star mt-2 ms-2"
            style={{ color: "#ecfb00" }}></i>{" "}
        </p>
      </div>
      <div>
        <p className="fs-3">{review.review}</p>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleDelete}>
            confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...settings} />
          <div className="my-3 py-4 border-bottom ">
            <textarea
              value={editText}
              onChange={onChangeText}
              className="w-100 resize-none border rounded fs-3 p-3 "
              placeholder="write a comment"
              rows="2"></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleEdit}>
            edit
          </Button>
        </Modal.Footer>
      </Modal>
      {isUser ? (
        <div className="adjusting border-bottome fs-1 d-flex justify-content-end ">
          <i
            className="bx bxs-edit cursor text-warning me-2"
            onClick={handleEditShow}></i>
          <i className="bx bx-x cursor text-warning" onClick={handleShow}></i>
        </div>
      ) : null}
    </div>
  );
}

export default RateItem;
