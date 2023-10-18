import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetLimitReview,
  GetPageReview,
} from "../../redux/ApiContainer/LinkCategory";
import { GetReview } from "../../redux/reducers/all-methods.reviews/Get.Reviews";

function GetRateHook(id) {
  let limit = 1;
  let pageCount = 0;
  let dispatch = useDispatch();
  let { showReview } = useSelector((state) => state.getALlReview);
  useEffect(() => {
    dispatch(GetReview(GetLimitReview(id, limit)));
  }, [dispatch, id, limit]);

  // page count query
  if (showReview.paginationResult)
    pageCount = showReview.paginationResult.numberOfPages;
  else pageCount = 0;

  let onPages = (page) => {
    dispatch(GetReview(GetPageReview(id, page, limit)));
  };
  let allRv = [];
  if (showReview.data) allRv = showReview.data;
  else allRv = [];

  return [allRv, onPages, pageCount];
}

export default GetRateHook;
