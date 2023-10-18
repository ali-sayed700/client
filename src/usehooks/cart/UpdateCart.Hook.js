import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCart } from "../../redux/reducers/all-methods-cart/Update.Cart";
import { Notify } from "../UseNotification";

function UpdateCartHook(item) {
  let dispatch = useDispatch();
  const [isCount, setIsCount] = useState("");

  const [loading, setLoading] = useState(true);
  let { UpdCart } = useSelector((state) => state.UpdateCartST);

  useEffect(() => {
    setIsCount(item.count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeCount = (e) => {
    setIsCount(e.target.value);
    if (isCount.toString() === e.target.value) {
      return;
    }
    const get = async () => {
      setLoading(true);
      await dispatch(
        UpdateCart({ id: item._id, data: { count: e.target.value } })
      );
      setLoading(false);
    };
    setTimeout(() => {
      get();
    }, 1000);
  };
  useEffect(() => {
    if (!loading) {
      if (UpdCart.status === "success") {
        Notify("quantitu changeable successfully", "success");
      } else {
        Notify("Something is wrong", "error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [UpdCart.status, loading]);
  //   console.log(UpdCart);
  return [isCount, onChangeCount];
}

export default UpdateCartHook;
