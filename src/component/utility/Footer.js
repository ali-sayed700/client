import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="foot">
      <Container className="site-footer">
        <Row>
          <Col xs={12} md={6}>
            <h3 className="title-text">About</h3>
            <p>
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </Col>
          <Col xs={6} md={3}>
            <h3 className="title-text">Categories</h3>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h3 className="title-text">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />

        <Row className="py-3">
          <Col md={8} sm={6} xs={12}>
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <a className="ms-1" href="https://www.google.com">
                <strong> Scanfcode </strong>
              </a>
              .
            </p>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul className="social-icons">
              <li>
                <a className="facebook" href="https://www.google.com">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="https://www.google.com">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="https://www.google.com">
                  <i className="bx bxl-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://www.google.com">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
