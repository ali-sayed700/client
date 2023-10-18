import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function SidebarsUser() {
  return (
    <Stack className="bg-white  rounded admin-sidebar bx-shadow">
      <Link className="order-admin" to="/user/AllOrder">
        <button className=" fs-4 py-3 ">orders managment</button>
      </Link>

      <Link className="order-admin" to="/user/favorders">
        <button className=" fs-4 py-3 "> favorite orders</button>
      </Link>

      <Link className="order-admin" to="/user/address">
        <button className=" fs-4 py-3 "> address</button>
      </Link>
      <Link className="order-admin" to="/user/add-address">
        <button className=" fs-4 py-3 "> add address</button>
      </Link>
      <Link className="order-admin" to="/user/profile">
        <button className=" fs-4 py-3 "> profile</button>
      </Link>
    </Stack>
  );
}

export default SidebarsUser;
