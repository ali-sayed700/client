import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ToastContainer } from "react-toastify";
import ResetPassword from "../../usehooks/auth/ResetPassword.Hook";

function ResetCodePassword() {
  const [onChangeResetCode, resetCode, OnReset] = ResetPassword();

  return (
    <Container>
      <Row className=" py-5 d-flex justify-content-center   h-login">
        <Col sm={12} className="d-flex flex-column w-75">
          <Form autoComplete="off">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>reset code</Form.Label>
              <Form.Control
                onChange={onChangeResetCode}
                value={resetCode}
                type="text"
                placeholder="Enter reset code"
              />
            </Form.Group>

            <Button
              onClick={OnReset}
              variant="primary"
              type="submit"
              className="w-100">
              reset
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default ResetCodePassword;
