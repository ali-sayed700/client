import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { GetSpecificAddress } from "../../redux/ApiContainer/LinkCategory";
import { GetAddress } from "../../redux/reducers/all-methods-address/GetAll.Address";
import { useEffect } from "react";
import GetCartHook from "../cart/GetCart.Hook";
import { Notify } from "../UseNotification";
import { PostCashOrder } from "../../redux/reducers/all-methods-method-order/Post.Cash.Order";

function PayOrderCashHook() {
  const [, , , , , cartId] = GetCartHook();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let [isloading, setIsLoading] = useState(true);
  let [isData, setIsData] = useState([]);

  let HandleAddess = (e) => {
    setIsData([]);
    if (e.target.value !== "0") {
      get(e.target.value);
    }
  };

  const get = async (id) => {
    setLoading(true);
    await dispatch(GetAddress(GetSpecificAddress(id)));
    setLoading(false);
  };

  let { getOneAddress } = useSelector((state) => state.GetAddresses);

  useEffect(() => {
    if (!loading) {
      if (getOneAddress.status === "success") {
        setIsData(getOneAddress.data);
      } else {
        setIsData([]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // create cash pay
  let { cashOrder } = useSelector((state) => state.PostCashOrderST);
  const HandlePay = async () => {
    if (cartId === "0") {
      Notify("please,add products to cart", "warn");
      return;
    }
    if (isData.length <= 0) {
      Notify("please,choose address first", "warn");
      return;
    }
    setIsLoading(true);
    await dispatch(
      PostCashOrder({
        id: cartId,
        data: {
          shippingAddress: {
            details: isData.details,
            phone: isData.phone,
          },
        },
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isloading) {
      if (cashOrder.status === 201) {
        Notify("order paid successfully", "success");
        setTimeout(() => {
          navigate("/user/allorder");
        }, 1000);
      } else {
        Notify("something is wrong ,try again", "error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isloading]);
  return [HandleAddess, isData, HandlePay];
}

export default PayOrderCashHook;
