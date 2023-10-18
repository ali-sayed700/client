import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "../allcard/brandcard/BrandCard";

const ContBrand = ({ arr, loading, error }) => {
  return (
    <Container>
      <Row className="mb-4 d-flex justify-content-between">
        {loading === false ? (
          arr.data ? (
            arr.data.map((item, index) => {
              return <BrandCard key={index} img={item.image} />;
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
};

export default ContBrand;
