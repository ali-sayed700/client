import React from "react";
import RightArrow from "../../images/chevron-right-regular-24.png";
function RightButton(onclick, disabled) {
  return (
    <img
      src={RightArrow}
      alt="RightArrow"
      onClick={onclick}
      disabled={disabled}
      width="35px"
      height="35px"
      style={{ float: "right", marginTop: "100px", cursor: "pointer" }}
    />
  );
}

export default RightButton;
