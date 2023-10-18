import React from "react";
import Slider from "../../component/home/Slider";
import HomeCatogery from "../../component/home/HomeCatogery";
import HomeProducts from "../../component/home/HomeProducts";
import DiscountSectin from "../../component/home/DiscountSectin";
import HomeBrand from "../../component/home/HomeBrand";
import ShowProdItems from "../../usehooks/products/ShowProdItems";

function HomePage() {
  let [item] = ShowProdItems();
  if (Array.isArray(item));
  return (
    <div>
      <Slider />
      <HomeCatogery />
      <HomeProducts
        products={item}
        title="latest"
        btn="more"
        passName="/products"
      />
      <HomeProducts title="popular" btn="more" />
      <DiscountSectin />
      <HomeProducts
        products={item}
        title="most selling"
        btn="more"
        passName="/products"
      />
      <HomeBrand />
    </div>
  );
}

export default HomePage;
