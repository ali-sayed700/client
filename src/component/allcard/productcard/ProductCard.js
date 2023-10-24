import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import WishListCardHook from "../../../usehooks/wishlist/WishList.Card.Hook";

function ProductCard({ items, favProd }) {
  const [isFav, handleHeart] = WishListCardHook(items, favProd);
  let rateAve;
  if (items) rateAve = items.ratingsAverage || 0;
  return (
    <Col xs={6} md={4} lg={2} className="d-flex justify-content-around my-4 ">
      <Card className="prodct-card border-0">
        <Link className="text-center p-4" to={`/products/${items._id}`}>
          <Card.Img
            className="card-image"
            variant="top"
            src={items.imageCover}
          />
        </Link>
        <Card.Body>
          <Card.Title>
            <img src={isFav} alt="" onClick={handleHeart} className="cursor" />
          </Card.Title>
          <Card.Text className="fs-4 mt-3">{items.title}</Card.Text>
          <div className="card-icon d-flex justify-content-between mt-3">
            {items.priceAfterDiscount ? (
              <Card.Text className="fs-4 mb-0 fw-bold">
                <del>{items.priceAfterDiscount}</del> {items.price}
              </Card.Text>
            ) : (
              <Card.Text className="fs-4 mb-0 fw-bold">{items.price}</Card.Text>
            )}
            {/* <Card.Text className="fs-4 mb-0 fw-bold">{items.price}</Card.Text> */}

            <i className="bx bxs-star fs-2 text-warning">{rateAve}</i>
          </div>
          <div className="d-flex mt-3 align-items-center gap-1">
            <Card.Text className="mb-0 fs-4">{items.description}</Card.Text>
          </div>
        </Card.Body>
        <ToastContainer />
      </Card>
    </Col>
  );
}

export default ProductCard;
