import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCarts } from "../../redux/reducers/all-methods-cart/GetAll.Cart";

function GetCartHook() {
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let [isCount, setIsCount] = useState(0);
  let [cartId, setCartId] = useState("0");
  let [cartPriceTotal, setCartPriceTotal] = useState(0);
  let [itemCarts, setItemCarts] = useState([]);
  let [couponCartName, setCouponCartName] = useState("");
  let [couponCartAfterDiscount, setCouponCartAfterDiscount] = useState("");
  let { getCart } = useSelector((state) => state.getCartST);
  let { cart } = useSelector((state) => state.PostCart);
  let { deleCart } = useSelector((state) => state.deleteAllCartST);
  let { UpdCart } = useSelector((state) => state.UpdateCartST);
  let { ApplyCoupon } = useSelector((state) => state.ApplyCoupnSt);
  let { prods } = useSelector((state) => state.getProducts);

  useEffect(() => {
    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, cart, deleCart, UpdCart, ApplyCoupon, prods]);
  let get = async () => {
    setLoading(true);
    await dispatch(GetAllCarts());
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (getCart.status === "success") {
        setIsCount(getCart.numOfCartItems);
        setItemCarts(getCart.data.products);
        setCartPriceTotal(getCart.data.totalCartPrice);
        setCartId(getCart.data._id);
        if (getCart.data.coupon) {
          setCouponCartName(getCart.data.coupon);
        } else {
          setCouponCartName("");
        }

        if (getCart.data.totalAfterDiscount) {
          setCouponCartAfterDiscount(getCart.data.totalAfterDiscount);
        } else {
          setCouponCartAfterDiscount("");
        }
      } else {
        setCouponCartName("");
        setCouponCartAfterDiscount("");
        setIsCount(0);
        setItemCarts([]);
        setCartId("0");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    getCart.numOfCartItems,
    getCart.status,
    loading,
    cartPriceTotal,

    getCart.totalCartPrice,
  ]);

  return [
    isCount,
    itemCarts,
    cartPriceTotal,
    couponCartName,
    couponCartAfterDiscount,
    cartId,
  ];
}

export default GetCartHook;
