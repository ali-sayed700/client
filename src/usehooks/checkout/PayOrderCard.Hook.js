import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetCartHook from "../cart/GetCart.Hook";
import { Notify } from "../UseNotification";
import { GetCardOrder } from "../../redux/reducers/all-methods-method-order/Get.Card.Order";
// import { GetCardOrder } from "../../redux/reducers/all-methods-method-order/Get.Card.Order";

function PayOrderCardHook(isData) {
  const [, , , , , cartId] = GetCartHook();
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);

  // create card pay

  const HandlePayCard = async () => {
    if (cartId === "0") {
      Notify("please,add products to cart", "warn");
      return;
    }
    // if (isData.length <= 0) {
    //   Notify("please,choose address first", "warn");
    //   return;
    // }
    setLoading(true);

    await dispatch(
      GetCardOrder({
        id: cartId,
        data: {
          shippingAddress: {
            details: isData.details,
            phone: isData.phone,
          },
        },
      })
    );
    setLoading(false);
  };
  let { CardOrder } = useSelector((state) => state.GetCardOrderST);
  useEffect(() => {
    if (!loading) {
      if (CardOrder.status === "success") {
        Notify("order paid successfully", "success");
        if (CardOrder.session.url) {
          window.open(CardOrder.session.url);
        }
      } else {
        Notify("something is wrong ,try again", "error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return [HandlePayCard];
}

export default PayOrderCardHook;
