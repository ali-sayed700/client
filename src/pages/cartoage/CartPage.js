import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../component/cart/CartItem";
import CartCheck from "../../component/cart/CartCheck";
import GetCartHook from "../../usehooks/cart/GetCart.Hook";
import { ToastContainer } from "react-toastify";

function CartPage() {
  const [, itemCarts, cartPriceTotal, couponCartName, couponCartAfterDiscount] =
    GetCartHook();

  return (
    <div style={{ minHeight: "630px" }}>
      <Container>
        <Row>
          <h3 className="mt-4">shopping cart</h3>
        </Row>
        <Row className="my-4 justify-content-center">
          <Col xs={12} md={8}>
            {itemCarts.length >= 1 ? (
              itemCarts.map((item, index) => (
                <CartItem key={index} item={item} />
              ))
            ) : (
              <h3>no carts here</h3>
            )}
          </Col>
          <Col xs={6} md={4}>
            <CartCheck
              cart={itemCarts}
              totalCartPrice={cartPriceTotal}
              couponCartName={couponCartName}
              couponCartAfterDiscount={couponCartAfterDiscount}
            />
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default CartPage;
