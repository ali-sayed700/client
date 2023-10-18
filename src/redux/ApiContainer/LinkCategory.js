/* start API categories */

export const ShowAllCg = () => {
  return `/api/v1/categories`;
};
export const ShowOneCg = (id) => {
  return `/api/v1/categories/${id}`;
};
export const ShowLimitCg = (limit) => {
  return `/api/v1/categories?limit=${limit}`;
};
export const ShowPageCg = (limit, page) => {
  return `/api/v1/categories?limit=${limit}&page=${page}`;
};

// fetching all subcategories by categories ID
export const ShowGetOneCateg = (one) => {
  return `/api/v1/categories/${one}/subcategories`;
};

/* end API categories */

/* start API brands */

export const ShowAllBrnd = () => {
  return `/api/v1/brands`;
};
export const ShowLimitBrand = (limit) => {
  return `/api/v1/brands?limit=${limit}`;
};
export const ShowPageBrand = (limit, page) => {
  return `/api/v1/brands?limit=${limit}&page=${page}`;
};

export const ShowOneBrnd = (id) => {
  return `/api/v1/brands/${id}`;
};
/* end API brands */

/* start API products */

export const ShowAllProd = () => {
  return `/api/v1/products`;
};
export const ShowLimitProd = (limit) => {
  return `/api/v1/products?limit=${limit}`;
};
export const ShowLimitProdMan = (limit) => {
  return `/api/v1/products?limit=${limit}`;
};
export const ShowLimitProdPage = (limit, page) => {
  return `/api/v1/products?limit=${limit}&page=${page}`;
};

export const ShowGetOneProd = (id) => {
  return `/api/v1/products/${id}`;
};

export const ShowGetSpecificProd = (id) => {
  return `/api/v1/products/${id}`;
};

// update one prod
export const ShowUpdateOneProd = (id, formData) => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/products/${id}`, formData;
};

// delete one prod
// export const DeleteOneProd = (id) => {
//   return `/api/v1/products/${id}`;
// };

// fetching prods by category
export const ShowAllProdLike = (id) => {
  return `/api/v1/products/?category[in][]=${id}`;
};

/* end API products */

// start search section
export const ShowLimitAndSearch = (
  sort,
  limit,
  word,
  queryCate,
  queryBrand,
  fromPrice,
  toPrice
) => {
  return `/api/v1/products?sort=${sort}${fromPrice}&limit=${limit}&keyword=${word}&${toPrice}${queryCate}&${queryBrand}`;
};

// search section by page
export const ShowPageProds = (
  sort,
  limit,
  page,
  word,
  queryCate,
  queryBrand,
  fromPrice,
  toPrice
) => {
  return `/api/v1/products?sort=${sort}${fromPrice}&limit=${limit}&page=${page}&keyword=${word}&${toPrice}${queryCate}&${queryBrand}`;
};

// end search section

// start review
export const GetLimitReview = (id, limit) => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/products/${id}/reviews?limit=${limit}`;
};
export const GetPageReview = (id, page, limit) => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`;
};
// end review

// start coupons
export const GetAllCoupons = () => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/coupons`;
};

export const GetSpecificCoupon = (id) => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/coupons/${id}`;
};
// end coupons

// start address
export const GetAllAddress = () => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/addresses`;
};

export const GetSpecificAddress = (id) => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/addresses/${id}`;
};
// end address

// start cart
export const DeleteOneCart = (id) => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/cart/${id}`;
};

export const DeleteAllCart = () => {
  // eslint-disable-next-line no-sequences
  return `/api/v1/cart`;
};
// end cart

// start view all products and (category & brand)
export const ViewAllProdsCat = (limit, page, categoryID) => {
  return `/api/v1/products?limit=${limit}&page=${page}&category=${categoryID}`;
};

export const ViewAllProdsBrand = (limit, page, categoryID) => {
  return `/api/v1/products?limit=${limit}&page=${page}&brand=${categoryID}`;
};
// end view all products and (category & brand)

//  satrt cash order
export const ViewAllCashOrder = (limit, page) => {
  return `/api/v1/orders?limit=${limit}&page=${page}`;
};

//  end cash order
