import React from "react";
import { Row } from "react-bootstrap";
import AdminCardOrder from "../allcard/admincard/AdminCardOrder";
import GetAllOrderCashHook from "../../usehooks/checkout/GetOrdersCash.Hook";
import Paginations from "../utility/paginations";

function OrderAdmin() {
  const [isData, onPages, pageCount] = GetAllOrderCashHook();

  return (
    <Row>
      {isData.data ? (
        isData.data.map((item, index) => (
          <AdminCardOrder key={index} orderItem={item} />
        ))
      ) : (
        <h3>there is no order list </h3>
      )}
      <Paginations pageCount={pageCount} onPage={onPages} />
    </Row>
  );
}

export default OrderAdmin;
