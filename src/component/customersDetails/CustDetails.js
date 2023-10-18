import React from "react";
import { Button, Row } from "react-bootstrap";
import { useParams } from "react-router";
import UpdateOrderStatusHook from "../../usehooks/checkout/UpdateOrder.Status.Hook";
import { ToastContainer } from "react-toastify";

function CustDetails({ user, isData }) {
  let { id } = useParams();
  const [onChangePay, HandlePay, onChangeDeliver, HandleDeliver] =
    UpdateOrderStatusHook(id);
  return (
    <div className="bg-white p-3 gust-details">
      <Row>
        <div>
          <h3 className="mb-4">customers details</h3>
          <p className="fs-4 ">
            {" "}
            <strong>name</strong>{" "}
            <span className="text-black-50 ms-2"> {user.name}</span>
          </p>
          <p className="fs-4">
            {" "}
            <strong>mobile</strong>{" "}
            <span className="text-black-50 ms-2">{user.phone} </span>
          </p>
          <p className="fs-4">
            {" "}
            <strong>E-mail</strong>{" "}
            <span className="text-black-50 ms-2"> {user.email} </span>
          </p>
        </div>
      </Row>
      <p className="bg-light text-center fs-4 p-3">
        {" "}
        <strong>the total amount </strong>
        <span className="text-black-50 ms-1 ">
          {" "}
          $ {isData.totalOrderPrice}{" "}
        </span>
      </p>

      <form className="d-flex justify-content-center align-items-center gap-3">
        <select
          onChange={onChangeDeliver}
          className="w-75 fs-4 border p-2 bg-light rounded text-center">
          <option value="0">delivery</option>
          <option value="true">delivered </option>
          <option value="false">pending</option>
        </select>
        <Button onClick={HandleDeliver} variant="dark" className="fs-4 px-4">
          save
        </Button>
      </form>

      <form className="d-flex justify-content-center align-items-center gap-3">
        <select
          onChange={onChangePay}
          className="w-75 fs-4 border p-2 bg-light rounded text-center">
          <option value="0">The Amount</option>
          <option value="true">paid </option>
          <option value="false">not paid</option>
        </select>
        <Button onClick={HandlePay} variant="dark" className="fs-4 px-4">
          save
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default CustDetails;
