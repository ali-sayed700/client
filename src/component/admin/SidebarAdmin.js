import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function SidebarAdmin() {
  return (
    <Stack className="bg-white  rounded admin-sidebar">
      <Link className="order-admin" to="/admin/AllOrder">
        <button className=" fs-4 py-3 ">order managment</button>
      </Link>

      <Link className="order-admin" to="/admin/alladmin">
        <button className=" fs-4 py-3 "> products managment</button>
      </Link>

      <Link className="order-admin" to="/admin/addbrand">
        <button className=" fs-4 py-3 "> add brand</button>
      </Link>
      <Link className="order-admin" to="/admin/addcatogery">
        <button className=" fs-4 py-3 "> add catogery</button>
      </Link>

      <Link className="order-admin" to="/admin/subcatogery">
        <button className=" fs-4 py-3 "> sub catogery</button>
      </Link>
      <Link className="order-admin" to="/admin/addproduct">
        <button className=" fs-4 py-3 "> add product</button>
      </Link>
      <Link className="order-admin" to="/admin/coupon">
        <button className=" fs-4 py-3 "> add coupon</button>
      </Link>
    </Stack>
  );
}

export default SidebarAdmin;
