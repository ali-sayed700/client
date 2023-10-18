import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteAddressHook from "../../usehooks/address/Delete.Address.Hook";

function AddressCard({ item }) {
  const [show, handleClose, handleDelete, handleShow] = DeleteAddressHook(item);
  return (
    <div className="bg-white p-3 rounded bx-shadow mt-3">
      <Row>
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
        <Col className="d-flex justify-content-between">
          <h4>{item.alias}</h4>
          <div className="d-flex gap-3 fs-4 ">
            <Link
              className="text-black-50 hover"
              to={`/user/edit-address/${item._id}`}>
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
          <p>{item.details}</p>
          <p>
            <strong>mobile</strong> {item.phone}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AddressCard;
