import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import { useEffect } from "react";
import { GetOneCashOrder } from "../../redux/reducers/all-methods-method-order/GetOne.Cash.Order";

function GetOneOrderCashHook(id) {
  // let navigate = useNavigate();
  let { UpdatePay } = useSelector((state) => state.UpdateOrderToPayST);
  let { UpdateDeliver } = useSelector((state) => state.UpdateOrderToDeliverST);

  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let [isUserData, setIsUserData] = useState({});
  let [isData, setIsData] = useState([]);

  const get = async () => {
    setLoading(true);
    await dispatch(GetOneCashOrder(id));
    setLoading(false);
  };
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [UpdatePay, UpdateDeliver]);

  let { getOneCash } = useSelector((state) => state.GetOneCashOrderST);
  // GetOneCashOrderST;
  useEffect(() => {
    if (!loading) {
      if (getOneCash.data) {
        setIsData(getOneCash.data);

        if (getOneCash.data.user) {
          setIsUserData(getOneCash.data.user);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [isUserData, isData];
}

export default GetOneOrderCashHook;
