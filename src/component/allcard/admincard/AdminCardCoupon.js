import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteCouponHook from "../../../usehooks/coupon/Delete.Coupon.Hook";
function AdminCardCoupon({ coupon }) {
  const [show, handleClose, handleDelete, handleShow, getDate] =
    DeleteCouponHook(coupon);
  return (
    <div sm={8} className="bg-white p-3 rounded bx-shadow mt-3">
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
      <Row>
        <Col className="d-flex justify-content-between">
          <h4>list of coupons</h4>
          <div className="d-flex gap-3 fs-4 ">
            <Link
              className="text-black-50 hover"
              to={`/admin/editCoupon/${coupon._id}`}>
              <p>
                <i className="bx bxs-edit"></i>
                edit
              </p>
            </Link>
            <p onClick={handleShow} className="text-black-50 cursor hover">
              <i className="bx bx-trash"></i>
              delete
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="fs-4">
          <p>
            <strong>coupon name</strong> {coupon.name}
          </p>
          <p>
            <strong>exoire of date</strong> {getDate(coupon.expire)}
          </p>
          <p>
            <strong>discount</strong> {coupon.discount}%
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AdminCardCoupon;
