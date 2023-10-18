import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductAdmin from "../../component/admin/ProductAdmin";
import SidebarAdmin from "../../component/admin/SidebarAdmin";
import Paginations from "../../component/utility/paginations";
import ViewAdminProdHook from "../../usehooks/admin/ViewAdminProd.Hook";

function AllAdmin() {
  // let pageCount = 0;

  const [item, onPages, pageCount] = ViewAdminProdHook();
  return (
    <Container>
      <Row className="my-5 ">
        <h3 className="mb-4"> productions management </h3>
        <Col xs={9}>
          <ProductAdmin product={item} />
          <Paginations pageCount={pageCount} onPage={onPages} />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AllAdmin;
