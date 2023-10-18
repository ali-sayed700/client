import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteCartHook from "../../usehooks/cart/DeleteCart.Hook";
// import ApplyCouponHook from "../../usehooks/coupon/ApplyCoupon.Hook";
import ApplyCouponHook from "../../usehooks/coupon/ApplyCoupons.Hook";
import { Notify } from "../../usehooks/UseNotification";
import { ToastContainer } from "react-toastify";

function CartCheck({
  totalCartPrice,
  couponCartName,
  couponCartAfterDiscount,
  cart,
}) {
  const [HandleRemoveAll] = DeleteCartHook();
  const [handleApply, onChangeCouponName, couponName] = ApplyCouponHook();
  let navigate = useNavigate();
  useEffect(() => {
    if (couponCartName) {
      onChangeCouponName(couponCartName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [couponCartName]);
  const handlePay = () => {
    if (cart.length >= 1) {
      navigate("/order/payment");
    } else {
      Notify("please, add product for buying", "warn");
    }
  };
  return (
    <div className="cart-checkout ">
      <div className="border d-flex rounded">
        <Button onClick={handleApply} className="p-3" variant="dark">
          apply
        </Button>
        <input
          className="text-center fs-4"
          type="text"
          placeholder="code of discount"
          onChange={(e) => onChangeCouponName(e.target.value)}
          value={couponName}
        />
      </div>
      {couponCartAfterDiscount && couponCartName ? (
        <div>
          <p className="border text-center fs-4 mt-3 p-2 fw-bold rounded">
            {`$ ${totalCartPrice}`}
          </p>
          <strong className="fs-4"> after discount</strong>
          <p className="border text-center fs-4 mt-3 p-2 fw-bold rounded">
            {`$ ${couponCartAfterDiscount}`}
          </p>
        </div>
      ) : (
        <p className="border text-center fs-4 mt-3 p-2 fw-bold rounded">
          {`$ ${totalCartPrice}`}
        </p>
      )}
      <Button
        onClick={HandleRemoveAll}
        className="p-3 w-100 fs-4 mb-3"
        variant="dark">
        remove all
      </Button>{" "}
      <Button onClick={handlePay} className="p-3 w-100 fs-4" variant="dark">
        pay
      </Button>
      <ToastContainer />
    </div>
  );
}

export default CartCheck;
