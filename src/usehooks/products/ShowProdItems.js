import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProduct } from "../../redux/reducers/all-methods-products/GetAll.products";
import {
  ShowAllProd,
  // ShowPageProds,
} from "../../redux/ApiContainer/LinkCategory";

function ShowProdItems() {
  let dispatch = useDispatch();
  // let [item, setItem] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(GetAllProduct(ShowAllProd()));
    }, 1200);
    // setProds([]);
  }, [dispatch]);
  // let onPages = (page) => {
  //   dispatch(GetAllProduct(ShowPageProds(3, page)));
  // };
  let { prods } = useSelector((state) => state.getProducts);

  let item = [];
  try {
    if (Array.isArray(prods.data)) item = prods.data.slice(0, 3);
    else item = [];
  } catch (error) {}
  // if (item.paginationResult) pageCount = item.paginationResult.numberOfPages;
  // else pageCount = 0;

  return [item];
}

export default ShowProdItems;
