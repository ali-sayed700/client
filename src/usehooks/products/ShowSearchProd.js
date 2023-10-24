import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProduct } from "../../redux/reducers/all-methods-products/GetAll.products";
import {
  ShowLimitAndSearch,
  ShowLimitProd,
  ShowPageProds,
} from "../../redux/ApiContainer/LinkCategory";
import { useState } from "react";

function ShowSearchProd() {
  let limit = 9;
  let pageCount = 0;
  let dispatch = useDispatch();
  let [item, setItem] = useState([]);

  let word = "";
  let sort = "";
  let queryCate = "";
  let queryBrand = "";
  let fromPrice = "";
  let toPrice = "";
  let priceFromString = "";
  let priceToString = "";
  const getAllProd = async () => {
    getStorage();
    SortData();

    await dispatch(
      GetAllProduct(
        ShowLimitAndSearch(
          sort,
          limit,
          word,
          queryCate,
          queryBrand,
          priceFromString,
          priceToString
        )
      )
    );
  };
  useEffect(() => {
    getAllProd();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(GetAllProduct(ShowLimitProd(limit)));
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  let onPages = async (page) => {
    getStorage();
    SortData();

    await dispatch(
      GetAllProduct(
        ShowPageProds(
          sort,
          limit,
          page,
          word,
          queryCate,
          priceFromString,
          priceToString
        )
      )
    );
  };

  const getStorage = () => {
    if (localStorage.getItem("searchWord"))
      word = localStorage.getItem("searchWord");
    if (localStorage.getItem("queryCategory"))
      queryCate = localStorage.getItem("queryCategory");
    if (localStorage.getItem("queryBrand"))
      queryBrand = localStorage.getItem("queryBrand");
    if (localStorage.getItem("toPrice"))
      toPrice = localStorage.getItem("toPrice");
    if (localStorage.getItem("fromPrice"))
      fromPrice = localStorage.getItem("fromPrice");

    if (fromPrice === "" || fromPrice <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${fromPrice}`;
    }

    if (toPrice === "" || toPrice <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${toPrice}`;
    }
  };

  // fetching all data
  let { prods } = useSelector((state) => state.getProducts);
  // console.log(prods.data);
  // let item = [];
  useEffect(() => {
    if (Array.isArray(prods.data)) {
      setItem(prods);
      // item = prods.data;
    } else {
      setItem([]);
      // item = [];
    }
  }, [prods]);
  // page count query
  if (item.paginationResult) pageCount = item.paginationResult.numberOfPages;
  else pageCount = 0;

  // sort query
  let sortTyp = "";

  const SortData = () => {
    if (localStorage.getItem("sortTypes")) {
      sortTyp = localStorage.getItem("sortTypes");
    } else {
      sortTyp = "";
    }

    if (sortTyp === "price down to up") {
      sort = "+price";
    } else if (sortTyp === "price up to down") {
      sort = "-price";
    } else if (sortTyp === "most reviews") {
      sort = "ratingsQuantity";
    } else if (sortTyp === "most selling") {
      sort = "sold";
    } else {
      sort = "";
    }
  };
  return [item, pageCount, onPages, getAllProd];
}

export default ShowSearchProd;
