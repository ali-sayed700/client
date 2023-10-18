import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paginations from "../../component/utility/paginations";
import { useParams } from "react-router";
import HomeProducts from "../../component/home/HomeProducts";
import ProductsBrandHook from "../../usehooks/products/Products.Brand.Hook";

function ProductByBrand() {
  let { id } = useParams();
  const [item, onPages, pageCount] = ProductsBrandHook(id);
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

export default ProductByBrand;
