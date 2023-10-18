import React from "react";
import Header from "../../component/utility/Header";
import DownUpDrop from "../../component/utility/DownUpDrop";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../component/utility/SideFilter";
import HomeProducts from "../../component/home/HomeProducts";
import ShowSearchProd from "../../usehooks/products/ShowSearchProd";
import Paginations from "../../component/utility/paginations";

function ShopProduct() {
  const [item, pageCount, onPages, getAllProd] = ShowSearchProd();

  // console.log(item);
  return (
    <div>
      <Header />

      <Container>
        <DownUpDrop
          clickAllProd={getAllProd}
          title={`results ${item.results}`}
        />
        <Row className="mt-4 align-items-center ">
          <Col xs={2}>
            <SideFilter />
          </Col>
          <Col xs={10}>
            <HomeProducts products={item.data} title="" btn="" />
          </Col>
        </Row>
        <Paginations pageCount={pageCount} onPage={onPages} />
      </Container>
    </div>
  );
}

export default ShopProduct;
