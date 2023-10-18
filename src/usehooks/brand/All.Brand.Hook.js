import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllBrnd } from "../../redux/reducers/all-methods-brands/GetAll.brands";
import {
  ShowLimitBrand,
  ShowPageBrand,
} from "../../redux/ApiContainer/LinkCategory";

function useAllBrandHook() {
  let dispatch = useDispatch();
  let { arr, loading, error } = useSelector((state) => state.brand);
  useEffect(() => {
    dispatch(GetAllBrnd(ShowLimitBrand(3)));
  }, [dispatch]);
  let pageCount = 0;
  if (arr.paginationResult) pageCount = arr.paginationResult.numberOfPages;
  let onPage = (page) => {
    dispatch(GetAllBrnd(ShowPageBrand(3, page)));
  };
  return [arr, loading, error, pageCount, onPage];
}

export default useAllBrandHook;
