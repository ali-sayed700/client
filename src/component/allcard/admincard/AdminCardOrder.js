import React from "react";
// import { Col, Row } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
function AdminCardOrder({ orderItem }) {
  return (
    <>
      <Link to={`/admin/order/${orderItem._id}`}>
        <div className="cart-item  d-flex justify-content-between mb-3 bx-shadow p-3 ">
          <div className="d-flex gap-3  box-cart">
            <div className="content-cart fs-3">
              <h3 className="">order num {orderItem.id}</h3>

              <p className="fs-4  ">userName:- {orderItem.user.email}</p>
              <p>
                delivered :-{" "}
                <strong>
                  {orderItem.isDelivered === true ? "deliverd" : "pending"}
                </strong>
              </p>
              <p>
                paid :-{" "}
                <strong>
                  {orderItem.isPaid === true ? "paid" : "pending"}
                </strong>
              </p>
              <p>
                payment method :-{" "}
                <strong>
                  {orderItem.paymentMethodType === "cash" ? "cash" : "by card"}
                </strong>
              </p>
            </div>
          </div>

          <Stack className="action-cart justify-content-start align-items-end ">
            {orderItem
              ? orderItem.cartItems.map((val, index) => (
                  <strong className="fs-3" key={index}>
                    {" "}
                    {val.product.title}{" "}
                  </strong>
                ))
              : null}
            <strong className="fs-3 mt-auto">
              $ {orderItem.totalOrderPrice}{" "}
            </strong>
          </Stack>
        </div>
      </Link>
    </>
  );
}

export default AdminCardOrder;
