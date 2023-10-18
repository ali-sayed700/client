import { useDispatch, useSelector } from "react-redux";
import {
  ShowAllProdLike,
  ShowGetOneProd,
  // ShowGetSpecificProd,
  ShowOneBrnd,
  ShowOneCg,
} from "../../redux/ApiContainer/LinkCategory";
// import { GetAllProduct } from "../../redux/reducers/all-methods-products/GetAll.products";
import { useEffect } from "react";
// import { GetOneProduct } from "../../redux/reducers/all-methods-products/GetOne.products";
// import { GetOneProduct } from "../../redux/reducers/all-methods-products/GetOne.products";
import img1 from "../../images/prod_01.png";
import { GetAllCg } from "../../redux/reducers/all-methods-category/GetAll.Category";
import { GetAllBrnd } from "../../redux/reducers/all-methods-brands/GetAll.brands";
import { GetProductLike } from "../../redux/reducers/all-methods-products/GetAll.productsLikes";
// import { GetOneProd } from "../../redux/reducers/all-methods-products/GetOne.Products";
// import { GetAllProduct } from "../../redux/reducers/all-methods-products/GetAll.products";
import { useState } from "react";
import { GetOneProd } from "../../redux/reducers/all-methods-products/GetOne.Products";

function ViewDetailsProd(id) {
  let dispatch = useDispatch();
  let [items, setItems] = useState([]);
  // let [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(GetOneProd(ShowGetOneProd(id)));
  }, [dispatch, id]);

  // let { prods } = useSelector((state) => state.getProducts);
  let { getOneProd } = useSelector((state) => state.getOneProd);
  let { arr } = useSelector((state) => state.category);
  let { prodLike } = useSelector((state) => state.getAllProdLikes);
  let brand = useSelector((state) => state.brand.arr);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // let items = [];
  useEffect(() => {
    if (getOneProd.data) setItems(getOneProd.data);
    else setItems([]);
  }, [getOneProd]);
  // console.log(prodLike);

  let get = async () => {
    if (items.category) {
      await dispatch(GetAllCg(ShowOneCg(items.category)));
    }
    if (items.brand) {
      await dispatch(GetAllBrnd(ShowOneBrnd(items.brand)));
    }
    if (items.category) {
      await dispatch(GetProductLike(ShowAllProdLike(items.category)));
    }
  };
  // get one category id
  // get one brand id
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getOneProd]);

  let images = [];
  if (items.images)
    images = items.images.map((img) => {
      return { original: img, thumbnail: img };
    });
  else
    images = [
      {
        original: `${img1}`,
        thumbnail: `${img1}`,
      },
    ];

  //  category name
  let categoryProducts = [];

  if (arr.data) categoryProducts = arr.data;
  else categoryProducts = [];

  //  brand name
  let brandProducts = [];

  if (brand.data) brandProducts = brand.data;
  else brandProducts = [];

  //  brand name
  let productsLikes = [];

  if (prodLike.data) productsLikes = prodLike.data;
  else productsLikes = [];

  return [items, images, categoryProducts, brandProducts, productsLikes];
}

export default ViewDetailsProd;
