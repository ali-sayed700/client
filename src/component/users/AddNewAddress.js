import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import AddAddressHook from "../../usehooks/address/Add.Address.Hook";
import { ToastContainer } from "react-toastify";

function AddNewAddress() {
  const [
    alias,
    details,
    phone,
    handleSubmit,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    // arr,
  ] = AddAddressHook();
  return (
    <div>
      <Row>
        <Col>
          <input
            type="text"
            placeholder=" address ex(work or home)"
            className="bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            value={alias}
            onChange={onChangeAlias}
          />
          <textarea
            className="bg-transparent border w-100 p-2 fs-4"
            rows="4"
            placeholder="address details"
            value={details}
            onChange={onChangeDetails}></textarea>
          <input
            type="text"
            placeholder="mobile number"
            className=" bg-transparent border w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            value={phone}
            onChange={onChangePhone}
          />
        </Col>
      </Row>
      <Button
        onClick={handleSubmit}
        className="px-3 fs-4 d-flex  ms-auto my-2 py-3"
        variant="dark">
        add new address
      </Button>
      <ToastContainer />
    </div>
  );
}

export default AddNewAddress;
