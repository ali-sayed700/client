import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "../allcard/brandcard/BrandCard";
import { SubTitle } from "../utility/SubTitle";

import HomeBrandHook from "../../usehooks/brand/Home.Brand.Hook";
function HomeBrand() {
  const [arr, loading, error] = HomeBrandHook();
  return (
    <Container>
      <SubTitle title="most brand" btn="more" passName="/allbrand" />
      <Row className="mb-4 d-flex justify-content-between">
        {loading === false ? (
          Array.isArray(arr.data) ? (
            arr.data.slice(0, 6).map((item, index) => {
              return <BrandCard id={item._id} key={index} img={item.image} />;
            })
          ) : (
            <h1 className="text-center">{error}</h1>
          )
        ) : (
          <Spinner
            className="text-center"
            animation="border"
            variant="primary"
          />
        )}
      </Row>
    </Container>
  );
}

export default HomeBrand;
