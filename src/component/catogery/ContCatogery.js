import React from "react";

import CatogeryCard from "../allcard/catogerycard/CatogeryCard";

import { Container, Row, Spinner } from "react-bootstrap";

const ContCatogery = ({ arr, loading, error }) => {
  const colors = [
    "#ffd3e8",
    "#f4dba5",
    "#55cfdf",
    "#ff6262",
    "#0034ff",
    "#ffd3e8",
  ];
  return (
    <Container>
      <Row className="my-5">
        {loading === true ? (
          arr.data ? (
            arr.data.map((item, index) => {
              return (
                <CatogeryCard
                  key={index}
                  img={item.image}
                  title={item.name}
                  background={colors[Math.floor(Math.random() * 5 + 1)]}
                />
              );
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

  // return <CatogeryCard img={prod} title="discounts" background="#f4dba4" />;
};

export default ContCatogery;
