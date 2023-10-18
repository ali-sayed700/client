import React from "react";
import { Button } from "react-bootstrap";
import ViewDetailsProd from "../../usehooks/products/ViewDetailsProd";
import { useParams } from "react-router";
import AddToCartHook from "../../usehooks/cart/AddToCart.Hook";
import { ToastContainer } from "react-toastify";

function ProductInfo() {
  let { id } = useParams();
  let [items, , categoryProducts, brandProducts] = ViewDetailsProd(id);
  const [HandleClick, indexColor, HandleAddCart] = AddToCartHook(id, items);
  return (
    <div>
      <div className="title-prod my-3">
        <h3>{categoryProducts.name}</h3>
        <p className="fs-4">quantity:- {items.quantity}</p>
        <span className="fs-4 text-warning">
          <i className="fa fa-star"></i>
          {items.ratingsAverage}
        </span>
      </div>

      <div className="brand-prod py-3">
        <h3 className="mb-4">
          brand:- <strong>{brandProducts.name}</strong>
        </h3>
        {items.availableColors
          ? items.availableColors.map((color, index) => {
              return (
                <span
                  onClick={() => HandleClick(index, color)}
                  className="ms-3"
                  key={index}
                  style={{
                    backgroundColor: color,
                    border: indexColor === index ? "2px solid black" : "none",
                  }}></span>
              );
            })
          : null}
      </div>
      {/* <span key={index} style={{ backgroundColor: color }}></span> */}
      <div className="descrption-prod">
        <h3>contents:-</h3>
        <p className="fs-4 my-3">{items.description}</p>
      </div>

      <div className="btn-prod d-flex align-items-center gap-5 mt-4">
        <Button
          onClick={HandleAddCart}
          className="text-uppercase"
          variant="dark"
          size="lg">
          add to cart
        </Button>
        {items.priceAfterDiscount ? (
          <p className="fs-4 mb-0 fw-bold">
            <del>{items.priceAfterDiscount}</del> {items.price}
          </p>
        ) : (
          <p className="fs-4 mb-0 fw-bold">{items.price}</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductInfo;
