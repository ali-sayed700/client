import React from "react";
import { SubTitle } from "../utility/SubTitle";
import { Container, Row, Spinner } from "react-bootstrap";
import CatogeryCard from "../allcard/catogerycard/CatogeryCard";
import HomeCategoryHook from "../../usehooks/catogery/Home.Category.Hook";

const HomeCatogery = () => {
  const [arr, loading, error, colors] = HomeCategoryHook();

  return (
    <Container>
      <SubTitle title="catogery" btn="more" passName="/allcatogery" />
      <Row>
        {loading === true ? (
          Array.isArray(arr.data) ? (
            arr.data.slice(0, 6).map((item, index) => {
              return (
                <CatogeryCard
                  id={item._id}
                  key={index}
                  img={item.image}
                  title={item.name}
                  background={colors[index]}
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
};

export default HomeCatogery;
