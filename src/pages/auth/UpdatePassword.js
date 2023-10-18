import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ToastContainer } from "react-toastify";
import UpdatePasswordHook from "../../usehooks/auth/UpdatePassword.Hook";

function UpdatePassword() {
  const [
    onChangeConfirmPassword,
    confirmpassword,
    onChangePassword,
    OnNewPass,
    password,
  ] = UpdatePasswordHook();
  return (
    <Container>
      <Row className=" py-5 d-flex justify-content-center   h-login">
        <Col sm={12} className="d-flex flex-column w-75">
          <Form autoComplete="off">
            <Form.Label>Update password</Form.Label>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>new Password</Form.Label>
              <Form.Control
                onChange={onChangePassword}
                value={password}
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>confirm Password</Form.Label>
              <Form.Control
                onChange={onChangeConfirmPassword}
                value={confirmpassword}
                type="password"
                placeholder="confirm Password"
                autoComplete="off"
              />
            </Form.Group>
            <Button
              onClick={OnNewPass}
              variant="primary"
              type="submit"
              className="w-100">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default UpdatePassword;
