import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCg } from "../../redux/reducers/all-methods-category/GetAll.Category";
import { ShowAllBrnd, ShowAllCg } from "../../redux/ApiContainer/LinkCategory";
import { GetAllBrnd } from "../../redux/reducers/all-methods-brands/GetAll.brands";
import ShowSearchProd from "../products/ShowSearchProd";

function SideBarSearchProd() {
  const [, , , getAllProd] = ShowSearchProd();
  const [cateChecked, setCateChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [fromP, setFromPr] = useState(0);
  const [toP, setToPr] = useState(0);
  let dispatch = useDispatch();

  // fetching data
  let allCategory = useSelector((state) => state.category.arr);
  let allBrand = useSelector((state) => state.brand.arr);
  let queryCate = "";
  let queryBrand = "";

  useEffect(() => {
    const run = async () => {
      await dispatch(GetAllCg(ShowAllCg()));
      await dispatch(GetAllBrnd(ShowAllBrnd()));
    };
    run();
  }, [dispatch]);

  const clickCateFilter = async (e) => {
    let value = e.target.value;
    if (value === "0") {
      await setCateChecked([]);
    } else {
      if (e.target.checked === true) {
        await setCateChecked([...cateChecked, value]);
      } else if (e.target.checked === false) {
        const newArr = cateChecked.filter((col) => {
          return col !== value;
        });

        await setCateChecked(newArr);
      }
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    queryCate = cateChecked.map((val) => "category[in]=" + val).join("&");

    localStorage.setItem("queryCategory", queryCate);
    // setTimeout(() => {
    getAllProd();
    // }, 1100);
  }, [cateChecked]);

  const clickBrandFilter = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArr = brandChecked.filter((col) => {
          return col !== value;
        });
        setBrandChecked(newArr);
      }
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    queryBrand = brandChecked.map((val) => "brand[in]=" + val).join("&");

    localStorage.setItem("queryBrand", queryBrand);
    // setTimeout(() => {
    getAllProd();
    // }, 1100);
  }, [brandChecked]);

  const fromPrice = (e) => {
    localStorage.setItem("fromPrice", e.target.value);
    setFromPr(e.target.value);
  };
  const toPrice = (e) => {
    localStorage.setItem("toPrice", e.target.value);
    setToPr(e.target.value);
  };
  useEffect(() => {
    // setTimeout(() => {
    getAllProd();
    // }, 1100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromP, toP]);

  let allCategories = [];
  try {
    if (allCategory.data) allCategories = allCategory.data;
    else allCategories = [];
  } catch (error) {}

  let allBrands = [];
  try {
    if (allBrand.data) allBrands = allBrand.data;
    else allBrands = [];
  } catch (error) {}

  return [
    allCategories,
    allBrands,
    clickCateFilter,
    clickBrandFilter,
    fromPrice,
    toPrice,
  ];
}

export default SideBarSearchProd;
