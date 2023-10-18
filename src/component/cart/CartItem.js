import React from "react";
// import { Col, Row } from "react-bootstrap";
import img_cart from "../../images/prod_03.png";
import { Stack } from "react-bootstrap";
import DeleteCartHook from "../../usehooks/cart/DeleteCart.Hook";
import { ToastContainer } from "react-toastify";
import UpdateCartHook from "../../usehooks/cart/UpdateCart.Hook";
function CartItem({ item }) {
  const [, HandleDeleteOne] = DeleteCartHook(item._id);
  const [isCount, onChangeCount] = UpdateCartHook(item);
  return (
    <div className="cart-item  d-flex justify-content-between mb-3 bx-shadow p-3 ">
      <div className="d-flex gap-3  box-cart">
        <div className="image-cart">
          <img src={item.product.imageCover || img_cart} alt="prod" />
        </div>
        <div className="content-cart">
          <h3 className="">{item.product.title || ""}</h3>
          <p className="fs-4  ">
            {item.product.descrption || ""}{" "}
            <span className="text-warning">
              {item.product.ratingsAverage || 0}
            </span>
          </p>
          <p className="fs-4">
            category <strong>{item.product.category.name || ""}</strong>
          </p>

          <p className="fs-4">
            brand <strong>{item.product.brand.name || ""}</strong>
          </p>

          {item.color ? (
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                backgroundColor: `${item.color}`,
                cursor: "pointer",
              }}></div>
          ) : null}

          <label className="my-3 fs-4">
            <input
              type="text"
              className="border me-3 w-25 "
              onBlur={onChangeCount}
              defaultValue={isCount}
            />
            {/* {item.count} */}
          </label>
        </div>
      </div>

      <Stack className="action-cart justify-content-between align-items-end ">
        <p
          onClick={HandleDeleteOne}
          className="icons-cart fs-4 cursor  d-flex align-items-center flex-wrap ">
          <i className="bx bx-trash pe-2"></i>
          remove
        </p>

        <strong className="fs-3">{item.price}</strong>
      </Stack>
      <ToastContainer />
    </div>
  );
}

export default CartItem;
