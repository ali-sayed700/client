import React from "react";

import { Button, Col, Row } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { CompactPicker } from "react-color";

import { ToastContainer } from "react-toastify";
import EditProductsHook from "../../usehooks/products/EditProducts.Hook";
import { useParams } from "react-router";

const animatedComponents = makeAnimated();
function EditProduct() {
  let { id } = useParams();
  const [
    arr,
    brand,
    avaImg,
    op,
    // showPlus,
    onChangeName,
    onChangeDes,
    onChangeQnt,
    onChangeBf,
    onChangeAf,
    handleCategory,
    colorSyles,
    handleBrand,
    handleColor,
    removeColor,
    onImageChange,
    removeImg,
    handleProd,
    handleRemove,
    onselect,
    images,
    prodName,
    qty,
    priceAft,
    priceBef,
    prodDesc,
    color,
    showColor,
    ShowColor,
    // categoryRef,
    // brandRef,
    catId,
    brandId,
    changeRef,
  ] = EditProductsHook(id);

  return (
    <div className="admin-ad-prod">
      <Row>
        <Col sm={8}>
          <div className="add-prod-img ">
            <h3 className="my-4">product's photo</h3>
            <div className="my-5">
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                <label htmlFor="upload-photo">
                  {images.length <= 4 ? (
                    <img
                      src={avaImg}
                      alt="avatar"
                      height="50px"
                      width="50px"
                      style={{ cursor: "pointer" }}
                    />
                  ) : null}
                </label>

                {Array.isArray(images)
                  ? images.slice(0, 5).map((e, i) => {
                      // console.log(e);
                      return (
                        <img
                          key={i}
                          src={e}
                          alt={e}
                          width="20%"
                          style={{
                            cursor: "pointer",
                            objectFit: "contain",
                          }}
                          className="my-3 ms-3"
                          onClick={() => removeImg(e)}
                        />
                      );
                    })
                  : null}
              </label>
              <input
                type="file"
                id="upload-photo"
                name="photo"
                style={{ opacity: "0", position: "relative", zIndex: "-1" }}
                onChange={onImageChange}
                multiple
                ref={changeRef}
              />
            </div>
          </div>

          <div>
            <input
              value={prodName}
              onChange={onChangeName}
              type="text"
              placeholder="name of product"
              className="w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
              required
            />
            <textarea
              value={prodDesc}
              onChange={onChangeDes}
              className="w-100 p-2 fs-4"
              rows="3"
              placeholder="describtion of product"></textarea>
          </div>
          <div>
            <input
              value={qty}
              onChange={onChangeQnt}
              type="number"
              placeholder="Quantity"
              className="w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            />
            <input
              value={priceBef}
              onChange={onChangeBf}
              type="number"
              placeholder="price of product"
              className="w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            />
            <input
              value={priceAft}
              onChange={onChangeAf}
              type="number"
              placeholder="price after discount"
              className="w-100 py-2 px-4 fs-4 rounded border border-light-subtle my-3"
            />
            <select
              value={catId}
              onChange={handleCategory}
              className="w-100 fs-4 border border-light-subtle p-2 cursor rounded  fw-bold">
              <option
                value="0"
                // ref={categoryRef}
              >
                main catogery{" "}
              </option>

              {arr.data
                ? arr.data.map((e, i) => {
                    return (
                      <option value={e._id} key={i}>
                        {e.name}
                      </option>
                    );
                  })
                : null}
            </select>

            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              //   name="colors"

              options={op}
              className="basic-multi-select fs-4 my-3 "
              classNamePrefix="select"
              styles={colorSyles}
              placeholder="enter "
              onChange={onselect}
            />

            <select
              value={brandId}
              onChange={handleBrand}
              className="w-100 fs-4 border border-light-subtle p-2 cursor rounded  fw-bold">
              <option
                value="0"
                // ref={brandRef}
              >
                brand{" "}
              </option>
              {brand.data
                ? brand.data.map((e, i) => {
                    return (
                      <option value={e._id} key={i}>
                        {e.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
          <div className="admin-prod-color">
            {color
              ? color.map((e, i) => {
                  return (
                    <span
                      onClick={() => removeColor(e)}
                      key={i}
                      style={{ backgroundColor: e }}></span>
                  );
                })
              : null}
            <span
              onClick={() => ShowColor(!showColor)}
              className="border fs-1 text-center lh-1 cursor"
              style={{ backgroundColor: "#fff" }}>
              +
            </span>
          </div>
          {showColor === true ? (
            <CompactPicker onChangeComplete={handleColor} />
          ) : null}

          <Button
            onClick={handleProd}
            className="px-3 fs-4 d-flex ms-auto"
            variant="dark">
            save setting
          </Button>
          <Button className="px-3 fs-4 d-flex ms-auto" onClick={handleRemove}>
            remove all
          </Button>
        </Col>
        <ToastContainer autoClose={500} />
      </Row>
    </div>
  );
}
export default EditProduct;
