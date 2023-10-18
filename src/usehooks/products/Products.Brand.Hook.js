import { useDispatch, useSelector } from "react-redux";
import { ViewAllProdsBrand } from "../../redux/ApiContainer/LinkCategory";
import { useEffect } from "react";
import { ViewAllProdBrand } from "../../redux/reducers/all-methods-products/ViewAll.Prod.Brand";

function ProductsBrandHook(catId) {
  let dispatch = useDispatch();
  let limit = 3;
  let pageCount = 0;

  const getAllProd = async () => {
    await dispatch(ViewAllProdBrand(ViewAllProdsBrand(limit, "", catId)));
  };

  useEffect(() => {
    getAllProd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let onPages = async (page) => {
    await dispatch(ViewAllProdBrand(ViewAllProdsBrand(limit, page, catId)));
  };

  // fetching all data
  let { viewAllProd } = useSelector((state) => state.viewAllProdBrandST);

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

export default ProductsBrandHook;
