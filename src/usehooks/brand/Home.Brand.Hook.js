import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ShowAllBrnd } from "../../redux/ApiContainer/LinkCategory";
import { GetAllBrnd } from "../../redux/reducers/all-methods-brands/GetAll.brands";

function HomeBrandHook() {
  let dispatch = useDispatch();
  let { arr, loading, error } = useSelector((state) => state.brand);
  useEffect(() => {
    dispatch(GetAllBrnd(ShowAllBrnd()));
  }, [dispatch]);

  return [arr, loading, error];
}

export default HomeBrandHook;
