import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import GetAllAddressHook from "../../usehooks/address/GetAll.Address.Hook";
import PayOrderCashHook from "../../usehooks/checkout/PayOrderCash.Hook";
import { ToastContainer } from "react-toastify";
import { Notify } from "../../usehooks/UseNotification";
import PayOrderCardHook from "../../usehooks/checkout/PayOrderCard.Hook";
import GetCartHook from "../../usehooks/cart/GetCart.Hook";

function PaymentMethod() {
  const [, , cartPriceTotal, couponCartName, couponCartAfterDiscount] =
    GetCartHook();
  const [HandleAddess, isData, HandlePay] = PayOrderCashHook();
  const [HandlePayCard] = PayOrderCardHook(isData);
  const [arr] = GetAllAddressHook();
  let [type, setType] = useState("");
  const onChangeMethod = (e) => {
    setType(e.target.value);
  };
  const HandleMethod = () => {
    if (type === "credit") {
      HandlePayCard();
    } else if (type === "cash") {
      HandlePay();
    } else {
      Notify("please , choose payment method", "warn");
    }
  };
  return (
    <div>
      <h3 className="mt-5">payment ways </h3>
      <Stack className="paymethod mt-4">
        <div>
          <label className="d-flex align-items-center fs-4 gap-3">
            <input
              onChange={onChangeMethod}
              id="credit"
              type="radio"
              name="pay"
              value="credit"
            />
            pay by credit card
          </label>
        </div>

        <div>
          <label className="d-flex align-items-center fs-4 gap-3">
            <input
              onChange={onChangeMethod}
              id="cash"
              type="radio"
              value="cash"
              name="pay"
            />
            cash
          </label>
        </div>

        <div>
          <select
            onChange={HandleAddess}
            className="w-100 fs-4 border border-light-subtle p-2 cursor rounded  fw-bold">
            <option value="0">choose Address </option>

            {arr.length >= 1 ? (
              arr.map((e, i) => {
                return (
                  <option key={i} value={e._id}>
                    {e.alias}
                  </option>
                );
              })
            ) : (
              <option value="0">no address here </option>
            )}
          </select>
        </div>
      </Stack>
      <Stack direction="horizontal" className="gap-3 align-items-center mt-4">
        <Button
          variant="dark"
          className="p-3 fs-4 fw-bold"
          style={{ width: "10rem" }}
          onClick={HandleMethod}>
          pay
        </Button>
        {couponCartAfterDiscount && couponCartName ? (
          <div>
            <p className="border text-center fs-4 mt-3 p-2 fw-bold rounded">
              {`$ ${cartPriceTotal}`}
            </p>
            <strong className="fs-4"> after discount</strong>
            <p className="border text-center fs-4 mt-3 p-2 fw-bold rounded">
              {`$ ${couponCartAfterDiscount}`}
            </p>
          </div>
        ) : (
          <p className="border text-center fs-4 mt-3 p-2 fw-bold rounded">
            {`$ ${cartPriceTotal}`}
          </p>
        )}
      </Stack>
      <ToastContainer />
    </div>
  );
}

export default PaymentMethod;
