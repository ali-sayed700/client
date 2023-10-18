import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

function DownUpDrop({ title, clickAllProd }) {
  const DropItem = (key) => {
    localStorage.setItem("sortTypes", key);
    clickAllProd();
  };
  return (
    <div className="d-flex justify-content-between align-items-center py-3">
      <div className="fs-3">{title}</div>
      <div>
        <Dropdown>
          <Dropdown.Toggle
            className="drop-btn fs-3 d-flex gap-2 align-items-center "
            id="dropdown-basic">
            <i className="bx bx-sort-down mt-2"></i>
            sort by
          </Dropdown.Toggle>

          <Dropdown.Menu className="drop-menu">
            <Dropdown.Item onClick={() => DropItem("")} href="#/action-1">
              not select
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => DropItem("most selling")}
              href="#/action-1">
              most selling
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => DropItem("most reviews")}
              href="#/action-2">
              most reviews
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => DropItem("price up to down")}
              href="#/action-3">
              price up to down
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => DropItem("price down to up")}
              href="#/action-3">
              price down to up
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default DownUpDrop;

//  <UnopDropdown
//    onAppear={handler}
//    onDisappearStart={handler}
//    trigger={
//      <div className="fs-4">
//        <i className="bx bx-sort-down me-2"></i>
//        sort by
//      </div>
//    }
//    delay={110}
//    align="CENTER"
//    hover>
//    <div>
//      <div></div>
//      <div></div>
//      <div></div>
//    </div>
//  </UnopDropdown>;

//    <Container>
//      <div className="d-flex justify-content-between align-items-center py-3">
//        <div className="fs-4"> 600 pro</div>
//        <div>
//          <UnopDropdown
//            onAppear={handler}
//            onDisappearStart={handler}
//            trigger={<button className="AnimatedDropdownButton">Hover</button>}
//            delay={300}
//            align="CENTER"
//            hover>
//            <div>
//              <div>I am random</div>
//              <div>I am random</div>
//              <div>I am random</div>
//            </div>
//          </UnopDropdown>
//        </div>
//      </div>
//    </Container>;
