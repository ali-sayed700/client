import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllCg } from "../../redux/reducers/all-methods-category/GetAll.Category";
import { ShowAllCg } from "../../redux/ApiContainer/LinkCategory";

function HomeCategoryHook() {
  let dispatch = useDispatch();
  let { arr, loading, error } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(GetAllCg(ShowAllCg()));
  }, [dispatch]);
  const colors = [
    "#ffd3e8",
    "#f4dba5",
    "#55cfdf",
    "#ff6262",
    "#0034ff",
    "#ffd3e8",
  ];
  return [arr, loading, error, colors];
}

export default HomeCategoryHook;
