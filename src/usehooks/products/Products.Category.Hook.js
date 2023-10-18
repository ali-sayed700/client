import { useDispatch, useSelector } from "react-redux";
import { ViewAllProdsCat } from "../../redux/ApiContainer/LinkCategory";
import { ViewAllProdCategory } from "../../redux/reducers/all-methods-products/ViewAll.Prod.category";
import { useEffect } from "react";

function ProductsCategoryHook(catId) {
  let dispatch = useDispatch();
  let limit = 3;
  let pageCount = 0;

  const getAllProd = async () => {
    await dispatch(ViewAllProdCategory(ViewAllProdsCat(limit, "", catId)));
  };

  useEffect(() => {
    getAllProd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let onPages = async (page) => {
    await dispatch(ViewAllProdCategory(ViewAllProdsCat(limit, page, catId)));
  };

  // fetching all data
  let { viewAllProd } = useSelector((state) => state.viewAllProdCategST);

  let item = [];
  try {
    if (viewAllProd) item = viewAllProd;
    else item = [];
  } catch (error) {}

  // page count query
  if (item.paginationResult) pageCount = item.paginationResult.numberOfPages;
  else pageCount = 0;
  return [item, onPages, pageCount];
}

export default ProductsCategoryHook;
