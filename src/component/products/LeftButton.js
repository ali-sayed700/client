import React from "react";
import LeftArrow from "../../images/chevron-left-regular-24.png";
function LeftButton(onclick, disabled) {
  return (
    <img
      src={LeftArrow}
      alt="leftArrow"
      onClick={onclick}
      disabled={disabled}
      width="35px"
      height="35px"
      style={{
        float: "left",
        marginTop: "100px",
        cursor: "pointer",
      }}
    />
  );
}

export default LeftButton;
