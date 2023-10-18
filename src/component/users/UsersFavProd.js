import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
// import Paginations from "../utility/paginations";
// import GetWishListHook from "../../usehooks/wishlist/Get.WishList.Hook";
import HomeProducts from "../home/HomeProducts";
// import { useState } from "react";
// import { useEffect } from "react";
// import GetWishList from "../../redux/reducers/all-methods-wishlist/Get.WishList";
// import { useDispatch, useSelector } from "react-redux";
// import GetWishListHook from "../../usehooks/wishlist/Get.WishList.Hook";
import { useDispatch, useSelector } from "react-redux";
import { GetWishList } from "../../redux/reducers/all-methods-wishlist/Get.WishList";

function UsersFavProd() {
  const dispatch = useDispatch();
  let { getwishlist } = useSelector((state) => state.getwishlist);
  let { wishlist } = useSelector((state) => state.postwishlist);
  let { Delwishlist } = useSelector((state) => state.Delwishlist);
  let [loading, setLoading] = useState(true);
  let [items, setItems] = useState([]);

  useEffect(() => {
    let get = async () => {
      setLoading(true);
      await dispatch(GetWishList());
      setLoading(false);
    };

    get();
  }, [dispatch, wishlist, Delwishlist]);
  // console.log(getwishlist.data);
  useEffect(() => {
    if (!loading) {
      if (getwishlist.data) {
        setItems(getwishlist.data);
      }
    }
  }, [getwishlist.data, loading]);
  return (
    <div>
      <Row>
        {items ? (
          <HomeProducts products={items} title="" btn="" />
        ) : (
          <p> there is no items </p>
        )}
      </Row>
      {/* <Paginations /> */}
    </div>
  );
}

export default UsersFavProd;
