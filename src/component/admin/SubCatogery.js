import React from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubCategoryhook from "../../usehooks/subcategory/Add.SubCategory.hook";

function SubCatogery() {
  const [useSel, name, res, onChangeName, handleChange, handleSubmit] =
    AddSubCategoryhook();

  return (
    <div>
      <Row>
        <Col sm={8}>
          <Form>
            <h3 className="mb-4"> add new sub catogery </h3>
            <input
              onChange={onChangeName}
              value={name}
              type="text"
              placeholder="name of sub catogery"
              className="w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            />
            <select
              name="res"
              onChange={handleChange}
              className="w-100 fs-4 border border-light-subtle p-2 cursor rounded text-center fw-bold">
              <option value="0" ref={useSel}>
                choose one category
              </option>
              {res.data
                ? res.data.map((e, i) => {
                    return (
                      <option key={i} value={e._id}>
                        {e.name}
                      </option>
                    );
                  })
                : null}
            </select>
            <Button
              onClick={handleSubmit}
              className="px-3 fs-4 d-flex ms-auto my-2"
              variant="dark">
              save setting
            </Button>
          </Form>
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
}

export default SubCatogery;
