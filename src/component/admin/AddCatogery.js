import { Button, Spinner } from "react-bootstrap";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCatogeryHook from "../../usehooks/catogery/Add.Catogery.Hook";

function AddCatogery() {
  const [
    img,
    name,
    loading,
    ispress,
    onImageChange,
    handleSubmit,
    onChangeName,
  ] = AddCatogeryHook();

  return (
    <div>
      <Row>
        <Col xs={8} className="p-3">
          <h3>catogery's picture</h3>
          <div className="my-5">
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="avatar"
                height="100px"
                width="100px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="upload-photo"
              name="photo"
              style={{ opacity: "0", position: "relative", zIndex: "-1" }}
              onChange={onImageChange}
            />
          </div>
          <input
            className="w-100 border border-dark py-2 rounded my-3 px-3 fs-4"
            type="text"
            placeholder="name of  catogery"
            onChange={onChangeName}
            value={name}
          />
          <Button
            onClick={handleSubmit}
            className="px-3 fs-4 d-flex ms-auto"
            variant="dark">
            save setting
          </Button>
          {ispress ? (
            loading ? (
              <Spinner
                className="text-center"
                animation="border"
                variant="primary"
              />
            ) : (
              <h3>loading done</h3>
            )
          ) : null}
        </Col>
      </Row>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default AddCatogery;
