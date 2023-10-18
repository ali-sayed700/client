import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paginations from "../../component/utility/paginations";
import { useParams } from "react-router";
import ProductsCategoryHook from "../../usehooks/products/Products.Category.Hook";
import HomeProducts from "../../component/home/HomeProducts";

function ProductByCategory() {
  let { id } = useParams();
  const [item, onPages, pageCount] = ProductsCategoryHook(id);
  return (
    <div>
      <Container>
        <Row className="mt-4 align-items-center ">
          <Col xs={12}>
            <HomeProducts products={item.data} title="" btn="" />
          </Col>
        </Row>
        <Paginations pageCount={pageCount} onPage={onPages} />
      </Container>
    </div>
  );
}

export default ProductByCategory;
