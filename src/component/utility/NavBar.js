import React from "react";
import { Button, Dropdown, Nav } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavBarSearch from "../../usehooks/search/NavBar.SearchProd";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import GetCartHook from "../../usehooks/cart/GetCart.Hook";
// import { GetMe } from "../../redux/reducers/all-methods-auth/Auth.GetMe";

// import NavBarSearch from "../../usehooks/search/NavBar.SearchProd";

function NavBar() {
  let navigate = useNavigate();
  // const [searchWord, onChangeSearch] = NavBarSearch();
  let [user, setUser] = useState("");

  const [onChangeSearch] = NavBarSearch();

  let word = "";

  if (localStorage.getItem("searchWord"))
    word = localStorage.getItem("searchWord");

  useEffect(() => {
    if (localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem("user")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("user")]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser("");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  const translogin = () => {
    if (!user) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
  const [isCount] = GetCartHook();
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand href="/" className="title-text">
          Noon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="w-100" id="navbarScroll">
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll></Nav> */}
          <Form className="w-100 navbar-form">
            <Form.Control
              value={word}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={onChangeSearch}
              onClick={translogin}
            />
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="navbar-icons text-white " id="navbarScroll">
          {user ? (
            <Dropdown>
              <Button variant="success">{user.name}</Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                {user.role === "admin" ? (
                  <Dropdown.Item href="/admin/alladmin">
                    control panel
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item href="user/address">
                    Home managment
                  </Dropdown.Item>
                )}

                <Dropdown.Item onClick={logout} href="#">
                  log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Nav.Link href="/login">
              <i className="bx bx-user-circle bx-md ms-sm-2 title-text"></i>
            </Nav.Link>
          )}

          <Nav.Link href="/cart" className="position-relative">
            <i className="bx bx-cart bx-md ms-lg-2 title-text  "></i>
            <span className=" position-absolute top-0 start-50   translate-middle  badge rounded-pill bg-danger">
              {isCount || 0}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
