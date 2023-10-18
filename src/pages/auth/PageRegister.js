import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RegisterHook from "../../usehooks/auth/Register.Hook";
function PageRegister() {
  const [
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPass,
    onChangePhone,
    OnSubmitValid,
    name,
    email,
    password,
    passwordConfirm,
    phone,
  ] = RegisterHook();
  return (
    <Container>
      <Row className=" py-5 d-flex justify-content-center  h-login">
        <Col sm={12} className="d-flex flex-column w-75">
          <Form autoComplete="off">
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>username</Form.Label>
              <Form.Control
                onChange={onChangeName}
                type="text"
                value={name}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
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
            <Form.Group className="mb-3">
              <Form.Label>confirm password</Form.Label>
              <Form.Control
                onChange={onChangeConfirmPass}
                value={passwordConfirm}
                type="password"
                placeholder="confirm password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>phone</Form.Label>
              <Form.Control
                onChange={onChangePhone}
                value={phone}
                type="text"
                placeholder="phone nom"
                autoComplete="off"
              />
            </Form.Group>

            <Button
              onClick={OnSubmitValid}
              variant="primary"
              type="submit"
              className="w-100">
              register
            </Button>
            <li className="mt-3 fs-5">
              <Link to="/login" variant="danger" className="pe-2 fs-4">
                click here
              </Link>{" "}
              you have already account
            </li>
          </Form>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
}

export default PageRegister;
