import React from "react";
import { Col, Row } from "react-bootstrap";

import { Button, Modal } from "react-bootstrap";
import EditProfileHook from "../../usehooks/profile/Edit.Profile.Hook";
import { ToastContainer } from "react-toastify";
function UsersProfile() {
  const [
    name,
    email,
    phone,
    handleClose,
    handleShow,
    show,
    user,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    handleSubmit,
    handleChange,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ] = EditProfileHook();

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            autoComplete="true"
            type="text"
            placeholder="write name"
            className="  bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            value={name}
            onChange={onChangeName}
          />
          <input
            autoComplete="true"
            type="text"
            placeholder="write mobile phone"
            className="  bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            value={phone}
            onChange={onChangePhone}
          />
          <input
            autoComplete="true"
            type="email"
            placeholder="write toyr email"
            className="  bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            value={email}
            onChange={onChangeEmail}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleSubmit}>
            edit
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col className="bg-white p-3 rounded bx-shadow">
          <div className="d-flex justify-content-between fs-4">
            <p>
              <strong>name</strong>: {user.name}
            </p>

            <p className="text-black-50 hover cursor" onClick={handleShow}>
              <i className="bx bxs-edit"></i>
              edit
            </p>
          </div>
          <p className="fs-4">
            <strong>mobile</strong>: {user.phone}
          </p>
          <p className="fs-4">
            <strong>e-mail</strong>: {user.email}
          </p>
        </Col>
      </Row>
      <Row className="my-5 bx-shadow p-3">
        <h4>change current password</h4>
        <Col>
          <form>
            <input
              autoComplete="true"
              type="text"
              placeholder=" old password"
              className=" bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
              onChange={onChangeOldPass}
            />
            <input
              autoComplete="true"
              type="password"
              placeholder="new password"
              className="  bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
              onChange={onChangeNewPass}
            />
            <input
              autoComplete="true"
              type="password"
              placeholder=" confirm password"
              className=" bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
              onChange={onChangeConfirmPass}
            />
            <Button
              onClick={handleChange}
              className="px-3 fs-4 d-flex  ms-auto my-2 py-3"
              variant="dark">
              save edit
            </Button>
          </form>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default UsersProfile;
