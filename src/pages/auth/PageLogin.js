import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import LoginHook from "../../usehooks/auth/Login.Hook";
import { ToastContainer } from "react-toastify";

function PageLogin() {
  const [onChangeEmail, onChangePassword, email, password, OnLogin] =
    LoginHook();
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={onChangePassword}
                value={password}
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
            </Form.Group>
            <Link
              to="/user/forgetpassword"
              variant="danger"
              className="py-2 d-block  fs-4">
              forget password
            </Link>{" "}
            <Button
              onClick={OnLogin}
              variant="primary"
              type="submit"
              className="w-100">
              login
            </Button>
            <li className="mt-3 fs-5">
              <Link to="/register" variant="danger" className="pe-2 fs-4">
                click here
              </Link>{" "}
              register here
            </li>
          </Form>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
}

export default PageLogin;
