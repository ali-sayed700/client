import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ShowLimitCg, ShowPageCg } from "../../redux/ApiContainer/LinkCategory";
import { GetAllCg } from "../../redux/reducers/all-methods-category/GetAll.Category";

function AllCatogeryHook() {
  let dispatch = useDispatch();
  let { arr, loading, error } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(GetAllCg(ShowLimitCg(3)));
  }, [dispatch]);
  let item = [];
  try {
    if (arr.data) item = arr;
  } catch (error) {}
  let pageCount = 0;
  if (item.paginationResult) pageCount = item.paginationResult.numberOfPages;
  let onPage = (page) => {
    dispatch(GetAllCg(ShowPageCg(3, page)));
  };
  return [item, loading, error, pageCount, onPage];
}

export default AllCatogeryHook;
