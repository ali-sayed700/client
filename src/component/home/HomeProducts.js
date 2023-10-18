import React from "react";
import { SubTitle } from "../utility/SubTitle";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../allcard/productcard/ProductCard";
import GetWishListHook from "../../usehooks/wishlist/Get.WishList.Hook";

function HomeProducts({ title, btn, passName, products }) {
  const [favProdList] = GetWishListHook();
  if (Array.isArray(products));
  return (
    <Container>
      {title || btn ? (
        <SubTitle title={title} btn={btn} passName={passName} />
      ) : null}

      <Row>
        {products
          ? products.map((item, index) => (
              <ProductCard key={index} items={item} favProd={favProdList} />
            ))
          : null}
      </Row>
    </Container>
  );
}

export default HomeProducts;
