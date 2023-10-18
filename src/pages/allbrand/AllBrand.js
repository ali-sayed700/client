import React from "react";
import Paginations from "../../component/utility/paginations";
import ContBrand from "../../component/brand/ContBrand";
import AllBrandHook from "../../usehooks/brand/All.Brand.Hook";

function AllBrand() {
  const [arr, loading, error, pageCount, onPage] = AllBrandHook();
  return (
    <div className="my-5">
      <div className="fs-3 text-end">all brand</div>
      <ContBrand arr={arr} loading={loading} error={error} />
      <Paginations pageCount={pageCount} onPage={onPage} />
    </div>
  );
}

export default AllBrand;
