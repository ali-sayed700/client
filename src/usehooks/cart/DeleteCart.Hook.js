import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { GetAllCarts } from "../../redux/reducers/all-methods-cart/GetAll.Cart";
import { DeleteCarts } from "../../redux/reducers/all-methods-cart/Delete.Cart";
import {
  DeleteAllCart,
  DeleteOneCart,
} from "../../redux/ApiContainer/LinkCategory";
import { Notify } from "../UseNotification";

function DeleteCartHook(id) {
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let [loadingOne, setLoadingOne] = useState(true);
  // let [count, setCount] = useState(0);
  // let [cartPriceTotal, setCartPriceTotal] = useState(0);
  // let [itemCarts, setItemCarts] = useState([]);
  let { deleCart } = useSelector((state) => state.deleteAllCartST);
  // let { cart } = useSelector((state) => state.PostCart);
  const HandleRemoveAll = async (e) => {
    e.preventDefault();

    setLoading(true);
    await dispatch(DeleteCarts(DeleteAllCart()));
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      if (deleCart === "") {
        Notify("removed all cart", "success");
        window.location.reload(false);
      } else {
        Notify("somesting is wrong ", "error");
      }
    }
  }, [deleCart, loading]);
  const HandleDeleteOne = async (e) => {
    e.preventDefault();

    setLoadingOne(true);
    await dispatch(DeleteCarts(DeleteOneCart(id)));
    setLoadingOne(false);
  };
  useEffect(() => {
    if (!loadingOne) {
      if (deleCart.status === "success") {
        Notify("item is removed ", "success");
      } else {
        Notify("somesting is wrong ", "error");
      }
    }
  }, [deleCart.status, loadingOne]);
  return [HandleRemoveAll, HandleDeleteOne];
}

export default DeleteCartHook;
