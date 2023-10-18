import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ForgetPasswordHook from "../../usehooks/auth/ForgetPassword.Hook";
import { ToastContainer } from "react-toastify";

function ForgetPassword() {
  const [onChangeEmail, email, Onforget] = ForgetPasswordHook();
  return (
    <Container>
      <Row className=" py-5 d-flex justify-content-center   h-login">
        <Col sm={12} className="d-flex flex-column w-75">
          <Form autoComplete="off">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={onChangeEmail}
                value={email}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button
              onClick={Onforget}
              variant="primary"
              type="submit"
              className="w-100">
              submit
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default ForgetPassword;
