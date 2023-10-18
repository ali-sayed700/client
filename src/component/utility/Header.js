import React from "react";
import { Container } from "react-bootstrap";
import AllCatogeryHook from "../../usehooks/catogery/All.Category.Hook";
import { Link } from "react-router-dom";

function Header() {
  // console.log("doen");
  const [item] = AllCatogeryHook();
  if (Array.isArray(item.data))
    return (
      <div className="bg-white">
        <Container>
          <div className=" d-flex flex-wrap align-items-center py-3">
            {Array.isArray(item.data)
              ? item.data.map((item, index) => (
                  <Link key={index} to={`/product/category/${item._id}`}>
                    <div className="head-product">{item.name}</div>
                  </Link>
                ))
              : null}

            <Link to="/allcatogery">
              <div className="head-product">more</div>
            </Link>
          </div>
        </Container>
      </div>
    );
}

export default Header;
