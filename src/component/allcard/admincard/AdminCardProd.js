import Card from "react-bootstrap/Card";
import { Button, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeletProd } from "../../../redux/reducers/all-methods-products/DeleteProd";
// import { DeleteOneProd } from "../../../redux/ApiContainer/LinkCategory";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
function AdminCardProd({ product }) {
  let dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleDelete = async () => {
    await dispatch(DeletProd(product._id));

    setShow(false);
    // window.location.reload();
  };

  return (
    <Col xs={6} md={4} className="d-flex justify-content-around mb-4 ">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
      <Card
        style={{ width: "22rem" }}
        className="prodct-card border-0 p-3 rounded">
        <div className="d-flex justify-content-between align-items-center my-3">
          <Link to={`/admin/edit/${product._id}`}>
            <Button variant="primary" className="fs-4 cursor fw-bold ">
              edit
            </Button>
          </Link>
          <Button
            onClick={handleShow}
            variant="danger"
            className="fs-4 cursor fw-bold ">
            delete
          </Button>
        </div>

        <Link to={`/products/${product._id}`}>
          <Card.Img variant="top" src={product.imageCover} />
        </Link>
        <Card.Body>
          {/* <Card.Title>
      <i className="bx bx-heart fs-2 cursor"></i>
    </Card.Title> */}
          <Card.Text className="fs-4 mt-3">{product.title}</Card.Text>
          <div className="card-icon d-flex justify-content-between mt-3">
            {product.priceAfterDiscount ? (
              <Card.Text className="fs-4 mb-0 fw-bold">
                <del>{product.priceAfterDiscount}</del> {product.price}
              </Card.Text>
            ) : (
              <Card.Text className="fs-4 mb-0 fw-bold">
                {product.price}
              </Card.Text>
            )}
            <div className="d-flex align-items-center gap-1">
              <Card.Text className="mb-0 fs-4">
                {product.ratingsQuantity}
              </Card.Text>
              <i className="bx bxs-star fs-2 text-warning"></i>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default AdminCardProd;
