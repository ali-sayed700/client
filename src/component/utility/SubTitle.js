import React from "react";
import { Link } from "react-router-dom";

export const SubTitle = ({ title, btn, passName }) => {
  return (
    <div className="d-flex justify-content-between align-items-center py-5">
      {btn ? (
        <Link to={`${passName}`}>
          <div className="catogery-more">{btn}</div>
        </Link>
      ) : null}
      <div className="catogery-title">{title}</div>
    </div>
  );
};

// import React from "react";
// import { Link } from "react-router-dom";

// export const SubTitle = ({ title, btn, passName }) => {
//   return (
//     <div className="d-flex justify-content-between align-items-center py-5">
//       {btn ? (
//         <Link to={`${passName}`}>
//           <div className="catogery-more">{btn}</div>
//         </Link>
//       ) : null}
//       <div className="catogery-title">{title}</div>
//     </div>
//   );
// };
