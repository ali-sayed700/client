import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateOrderToPay } from "../../redux/reducers/all-methods-method-order/Update.Order.Pay";
import { UpdateOrderToDeliver } from "../../redux/reducers/all-methods-method-order/Update.Order.Deliver";
import { useEffect } from "react";
import { Notify } from "../UseNotification";

function UpdateOrderStatusHook(id) {
  let dispatch = useDispatch();

  let [loading, setLoading] = useState(true);
  let [isloading, setIsLoading] = useState(true);

  let [payStatus, setPayStatus] = useState(0);
  let [deliverStatus, setDeliverStatus] = useState(0);
  const onChangePay = (e) => {
    setPayStatus(e.target.value);
  };
  const onChangeDeliver = (e) => {
    setDeliverStatus(e.target.value);
  };

  const HandlePay = async () => {
    if (payStatus === "true") {
      setLoading(true);
      await dispatch(UpdateOrderToPay(id));
      setLoading(false);
    } else if (payStatus === "0") {
      Notify("please, choose one", "warn");
    } else {
      Notify("something is wrong", "error");
    }
  };
  const HandleDeliver = async () => {
    if (deliverStatus === "true") {
      setIsLoading(true);
      await dispatch(UpdateOrderToDeliver(id));

      setIsLoading(false);
    } else if (deliverStatus === "0") {
      Notify("please, choose one", "warn");
    } else {
      Notify("something is wrong", "error");
    }
  };
  let { UpdatePay } = useSelector((state) => state.UpdateOrderToPayST);
  useEffect(() => {
    if (!loading) {
      if (UpdatePay.status === "Success") {
        Notify("status is paid", "success");
      } else {
        Notify("status pay is used aleady", "warn");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  let { UpdateDeliver } = useSelector((state) => state.UpdateOrderToDeliverST);
  useEffect(() => {
    if (!isloading) {
      if (UpdateDeliver.status === "Success") {
        Notify("status is paid", "success");
      } else {
        Notify("status delivery is used aleady", "warn");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isloading]);
  return [onChangePay, HandlePay, onChangeDeliver, HandleDeliver];
}

export default UpdateOrderStatusHook;
