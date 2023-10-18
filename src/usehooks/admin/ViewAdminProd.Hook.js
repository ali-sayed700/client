import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProduct } from "../../redux/reducers/all-methods-products/GetAll.products";
import {
  ShowLimitProd,
  ShowLimitProdPage,

  // ShowPageProds,
} from "../../redux/ApiContainer/LinkCategory";

function ViewAdminProdHook() {
  let { DelProd } = useSelector((state) => state.deletProds);
  let pageCount = 0;
  let dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(GetAllProduct(ShowLimitProd(5)));
    }, 1000);
  }, [dispatch, DelProd]);
  let { prods } = useSelector((state) => state.getProducts);
  let item = [];
  try {
    if (Array.isArray(prods.data)) item = prods;
    else item = [];
  } catch (error) {}
  try {
    if (item.paginationResult) pageCount = item.paginationResult.numberOfPages;
    else pageCount = 0;
  } catch (error) {}

  let onPages = async (page) => {
    await dispatch(GetAllProduct(ShowLimitProdPage(5, page)));
  };
  return [item, onPages, pageCount];
}

export default ViewAdminProdHook;
