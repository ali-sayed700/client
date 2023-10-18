import Header from "../../component/utility/Header";
import { Container } from "react-bootstrap";
import ContProducts from "../../component/products/ContProducts";
import RateCont from "../../component/rate/RateCont";
import HomeProducts from "../../component/home/HomeProducts";
import ViewDetailsProd from "../../usehooks/products/ViewDetailsProd";
import { useParams } from "react-router";

function ProductsDetails() {
  let { id } = useParams();

  const [items, , , , productsLikes] = ViewDetailsProd(id);
  if (productsLikes)
    if (items) {
      var rateQtity = items.ratingsQuantity || 0;

      var rateAve = items.ratingsAverage || 0;
    }
  // console.log(productsLikes);
  return (
    <div style={{ minHeight: "700px" }}>
      <Header />
      <Container>
        <ContProducts />
        <RateCont rateQtity={rateQtity} rateAve={rateAve} />
        <HomeProducts
          title="products may you like"
          products={productsLikes?.slice(0, 4)}
        />
      </Container>
    </div>
  );
}

export default ProductsDetails;
