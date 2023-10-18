import React from "react";
import { Row } from "react-bootstrap";
import SideBarSearchProd from "../../usehooks/search/SideBar.SearchProd";

function SideFilter() {
  const [
    allCategories,
    allBrands,
    clickCateFilter,
    clickBrandFilter,
    fromPrice,
    toPrice,
  ] = SideBarSearchProd();

  let priceFromStorage = localStorage.getItem("fromPrice") || "";
  let priceToStorage = localStorage.getItem("toPrice") || "";
  if (Array.isArray(allCategories) && Array.isArray(allBrands))
    return (
      <Row>
        <div className="filter-type">
          <h3 className="mb-3">types</h3>
          <label className="d-flex gap-2 align-items-center mt-3 cursor fs-4">
            <input
              onChange={clickCateFilter}
              type="checkbox"
              name="all"
              value="0"
              id="all"
            />{" "}
            all
          </label>
          {allCategories
            ? allCategories.map((item, index) => {
                return (
                  <label
                    key={index}
                    className="d-flex gap-2 align-items-center mt-3 cursor fs-4">
                    <input
                      onChange={clickCateFilter}
                      type="checkbox"
                      name={item.name}
                      value={item._id}
                    />
                    {item.name}
                  </label>
                );
              })
            : null}
        </div>
        <div className="filter-brand">
          <h3 className="mb-3">brands</h3>
          <label className="d-flex gap-2 align-items-center mt-3 cursor fs-4">
            <input
              onChange={clickCateFilter}
              type="checkbox"
              name="all"
              value="all"
              id="all"
            />{" "}
            all
          </label>
          {allBrands
            ? allBrands.map((item, index) => {
                return (
                  <label
                    key={index}
                    className="d-flex gap-2 align-items-center mt-3 cursor fs-4">
                    <input
                      onChange={clickBrandFilter}
                      type="checkbox"
                      name={item.name}
                      value={item._id}
                    />
                    {item.name}
                  </label>
                );
              })
            : null}
        </div>

        <div className="filter-price">
          <h3 className="my-3 ">price</h3>

          <label className="d-flex gap-2 align-items-center mt-3 cursor fs-4">
            from
            <input
              value={priceFromStorage}
              onChange={fromPrice}
              type="number"
              name="from"
              id="from"
              className="border"
            />
          </label>
          <label className="d-flex gap-4 align-items-center my-3  cursor fs-4">
            to
            <input
              value={priceToStorage}
              onChange={toPrice}
              type="number"
              name="to"
              id="to"
              className="border ms-3"
            />
          </label>
        </div>
      </Row>
    );
}

export default SideFilter;
