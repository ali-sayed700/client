import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCart } from "../../redux/reducers/all-methods-cart/Post.Cart";
import { useEffect } from "react";
import { Notify } from "../UseNotification";

function AddToCartHook(id, items) {
  let dispatch = useDispatch();
  const [indexColor, setIndexColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [loading, setLoading] = useState(true);
  let { cart } = useSelector((state) => state.PostCart);

  const HandleClick = (index, color) => {
    setIndexColor(index);
    setTextColor(color);
  };
  const HandleAddCart = async (e) => {
    e.preventDefault();
    if (items.availableColors.length >= 1) {
      if (textColor === "") {
        Notify("please add color ", "warn");
        return;
      }
    } else {
      setTextColor("");
    }
    setLoading(true);
    await dispatch(PostCart({ productId: id, color: textColor }));
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      if (cart.status) {
        Notify("added to cart successfully", "success");
      } else {
        Notify("please login in", "warn");
      }
    }
  }, [cart.status, loading]);
  return [HandleClick, indexColor, HandleAddCart];
}

export default AddToCartHook;
