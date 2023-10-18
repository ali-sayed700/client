import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import { ViewAllCashOrder } from "../../redux/ApiContainer/LinkCategory";
import { useEffect } from "react";

import { GetAllCashOrder } from "../../redux/reducers/all-methods-method-order/GetAll.Cash.Order";

function GetAllOrderCashHook() {
  // let navigate = useNavigate();
  let limit = 1;
  let pageCount = 0;
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  // let [isloading, setIsLoading] = useState(true);
  let [isData, setIsData] = useState([]);

  const get = async (id) => {
    setLoading(true);
    await dispatch(GetAllCashOrder(ViewAllCashOrder(limit)));
    setLoading(false);
  };
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let onPages = async (page) => {
    setLoading(true);
    await dispatch(GetAllCashOrder(ViewAllCashOrder(limit, page)));
    setLoading(false);
  };
  if (isData.paginationResult) {
    pageCount = isData.paginationResult.numberOfPages;
  } else {
    pageCount = 0;
  }

  let { getCash } = useSelector((state) => state.GetCashOrderST);

  useEffect(() => {
    if (!loading) {
      if (getCash.results > 0) {
        setIsData(getCash);
      } else {
        setIsData([]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [isData, onPages, pageCount];
}

export default GetAllOrderCashHook;
