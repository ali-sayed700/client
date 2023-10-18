import React from "react";
import UserOrderItems from "./UsersOrderItems";
import GetAllOrderCashHook from "../../usehooks/checkout/GetOrdersCash.Hook";
import Paginations from "../utility/paginations";

function UserOrders() {
  const [isData, onPages, pageCount] = GetAllOrderCashHook();
  if (Array.isArray(isData.data))
    return (
      <div>
        <h4>All order numbers :- # {isData.results}</h4>
        {isData.data ? (
          isData.data.map((item, index) => (
            <UserOrderItems key={index} orderItem={item} />
          ))
        ) : (
          <h3>there is no order list </h3>
        )}
        <Paginations pageCount={pageCount} onPage={onPages} />
      </div>
    );
}

export default UserOrders;
