import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { PostWishList } from "../../../redux/reducers/all-methods-wishlist/Post.WishList";
import { PostWishList } from "../../../src/redux/reducers/all-methods-wishlist/Post.WishList";
import { DeleteWishList } from "../../../src/redux/reducers/all-methods-wishlist/Delete.WishList";
import { Notify } from "../../../src/usehooks/UseNotification";
import HeartOff from "../../../src/images/heart-regular-24.png";
import HeartOn from "../../../src/images/heart-solid-24.png";

function WishListCardHook(items, favProd) {
  let allFav = favProd.some((fitem) => fitem === items._id);
  let [isBool, setIsBool] = useState(allFav);
  const [isFav, setIsFav] = useState(HeartOff);
  let dispatch = useDispatch();
  const [loadAdd, setLoadingAdd] = useState(true);
  const [loadRemv, setLoadRemv] = useState(true);
  let navigate = useNavigate();

  // console.log(allFav);
  let handleHeart = () => {
    if (isBool === true) {
      RemoveHeart();
    } else {
      ClickHeart();
    }
  };
  useEffect(() => {
    setIsBool(allFav);
  }, [allFav, favProd]);

  useEffect(() => {
    if (isBool === true) {
      setIsFav(HeartOn);
    } else {
      setIsFav(HeartOff);
    }
  }, [isBool]);
  let { wishlist, error } = useSelector((state) => state.postwishlist);
  let { Delwishlist } = useSelector((state) => state.Delwishlist);

  const ClickHeart = async () => {
    setLoadingAdd(true);
    setIsBool(true);
    setIsFav(HeartOn);
    await dispatch(PostWishList({ productId: items._id }));
    setLoadingAdd(false);
  };
  const RemoveHeart = async () => {
    setLoadRemv(true);
    setIsBool(false);
    setIsFav(HeartOff);

    await dispatch(DeleteWishList(items._id));
    setLoadRemv(false);
  };

  useEffect(() => {
    if (!loadAdd) {
      if (wishlist.status === "success") {
        Notify("product added to list", "success");
      }
      if (error.status === 401) {
        Notify("please login again", "error");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    }
  }, [error.status, loadAdd, navigate, wishlist.status]);

  useEffect(() => {
    if (!loadRemv) {
      if (Delwishlist.status === "success") {
        Notify("product removed successfully", "warn");
      }
      if (error.status === 401) {
        Notify("please login again", "error");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    }
  }, [Delwishlist.status, error.status, loadRemv, navigate]);
  return [isFav, handleHeart];
}

export default WishListCardHook;
