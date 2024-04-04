import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./reducers/all-methods-category/GetAll.Category";
import PostCgSlice from "./reducers/all-methods-category/Post.Category";
import BrandsSlice from "./reducers/all-methods-brands/GetAll.brands";
import PostBrandsSlice from "./reducers/all-methods-brands/Post.brand";
import PostSubcategorySlice from "./reducers/all-methods-subcategory/Post.SubCategory";
import GetOneSubCategSlice from "./reducers/all-methods-subcategory/GetOne.SubCategory";
import PostProsSlice from "./reducers/all-methods-products/Post.products";
import GetAllProsSlice from "./reducers/all-methods-products/GetAll.products";
import GetAllProdLikeSlice from "./reducers/all-methods-products/GetAll.productsLikes";
import DeletProdSlice from "./reducers/all-methods-products/DeleteProd";
import UpdateProdsSlice from "./reducers/all-methods-products/Update.products";
import PostRegisterSlice from "./reducers/all-methods-auth/Auth.Register";
import PostLoginSlice from "./reducers/all-methods-auth/Auth.Login";
import GetMeSlice from "./reducers/all-methods-auth/Auth.GetMe";
import ForgetPassSlice from "./reducers/all-methods-auth/Auth.ForgetPAssword";
import resetCodePassSlice from "./reducers/all-methods-auth/Auth.ResetCode";
import UpdatePassSlice from "./reducers/all-methods-auth/Auth.Update";
import GetOneProdsSlice from "./reducers/all-methods-products/GetOne.Products";
import PostReviewSlice from "./reducers/all-methods.reviews/Post.Reviews";
import GetReviewSlice from "./reducers/all-methods.reviews/Get.Reviews";
import DeleReviewSlice from "./reducers/all-methods.reviews/Delete.Reviews";
import EditReviewSlice from "./reducers/all-methods.reviews/Edit.Reviews";
import PostWishSlice from "./reducers/all-methods-wishlist/Post.WishList";
import DeleteWishSlice from "./reducers/all-methods-wishlist/Delete.WishList";
import GetWishSlice from "./reducers/all-methods-wishlist/Get.WishList";
import PostCouponsSlice from "./reducers/all-methods-coupon/Post.Coupon";
import GetCouponsSlice from "./reducers/all-methods-coupon/GetAll.Coupon";
import DeleteCouponsSlice from "./reducers/all-methods-coupon/Delete.Coupon";
import UpdateCouponsSlice from "./reducers/all-methods-coupon/Update.Coupon";
import PostAddressSlice from "./reducers/all-methods-address/Post.Address";
import GetAddressSlice from "./reducers/all-methods-address/GetAll.Address";
import DeleteAddressSlice from "./reducers/all-methods-address/Delete.Address";
import UpdateAddressSlice from "./reducers/all-methods-address/Update.Address";
import UpdateProfileInfoSlice from "./reducers/all-methods-profile/Update.ProfileInfo";
import UpdateProfilePassSlice from "./reducers/all-methods-profile/Update.ProfilePassword";
import PostCartSlice from "./reducers/all-methods-cart/Post.Cart";
import GetCartSlice from "./reducers/all-methods-cart/GetAll.Cart";
import DeleteCartsSlice from "./reducers/all-methods-cart/Delete.Cart";
import UpdateCartSlice from "./reducers/all-methods-cart/Update.Cart";
import UpdateApplyCouponSlice from "./reducers/all-methods-coupon/Create.ApplyCoupon";
import ViewAllProdCategorySlice from "./reducers/all-methods-products/ViewAll.Prod.category";
import ViewAllProdBrandSlice from "./reducers/all-methods-products/ViewAll.Prod.Brand";
import PostCashOrderSlice from "./reducers/all-methods-method-order/Post.Cash.Order";
import GetCashOrderSlice from "./reducers/all-methods-method-order/GetAll.Cash.Order";
import GetOneCashOrderSlice from "./reducers/all-methods-method-order/GetOne.Cash.Order";
import UpdateOrderPaySlice from "./reducers/all-methods-method-order/Update.Order.Pay";
import UpdateOrderDeliverSlice from "./reducers/all-methods-method-order/Update.Order.Deliver";
import GetCardOrderSlice from "./reducers/all-methods-method-order/Get.Card.Order";
import  GetSearchProsSlice  from "./reducers/all-methods-products/GetSearch.products";

let store = configureStore({
  reducer: {
    category: CategorySlice,
    categoryPost: PostCgSlice,
    brand: BrandsSlice,
    brandPost: PostBrandsSlice,
    subcatogery: PostSubcategorySlice,
    getonesubcateg: GetOneSubCategSlice,
    productions: PostProsSlice,
    getProducts: GetAllProsSlice,
    getSearchPRo: GetSearchProsSlice,
    getAllProdLikes: GetAllProdLikeSlice,
    getOneProd: GetOneProdsSlice,
    deletProds: DeletProdSlice,
    upAllProd: UpdateProdsSlice,
    register: PostRegisterSlice,
    login: PostLoginSlice,
    getmelogged: GetMeSlice,
    forgetpass: ForgetPassSlice,
    resetCodePass: resetCodePassSlice,
    newPass: UpdatePassSlice,
    PostRv: PostReviewSlice,
    getALlReview: GetReviewSlice,
    deleteReview: DeleReviewSlice,
    editreview: EditReviewSlice,
    postwishlist: PostWishSlice,
    Delwishlist: DeleteWishSlice,
    getwishlist: GetWishSlice,
    postCoupon: PostCouponsSlice,
    GetAllCoupon: GetCouponsSlice,
    DeleteCoupons: DeleteCouponsSlice,
    UpdateCoupons: UpdateCouponsSlice,
    PostAddresses: PostAddressSlice,
    GetAddresses: GetAddressSlice,
    DeleteAddresses: DeleteAddressSlice,
    UpdateAddresses: UpdateAddressSlice,
    UpdateProfInfo: UpdateProfileInfoSlice,
    UpdateProfPass: UpdateProfilePassSlice,
    PostCart: PostCartSlice,
    getCartST: GetCartSlice,
    deleteAllCartST: DeleteCartsSlice,
    UpdateCartST: UpdateCartSlice,
    ApplyCoupnSt: UpdateApplyCouponSlice,
    viewAllProdCategST: ViewAllProdCategorySlice,
    viewAllProdBrandST: ViewAllProdBrandSlice,
    PostCashOrderST: PostCashOrderSlice,
    GetCashOrderST: GetCashOrderSlice,
    GetOneCashOrderST: GetOneCashOrderSlice,
    UpdateOrderToPayST: UpdateOrderPaySlice,
    UpdateOrderToDeliverST: UpdateOrderDeliverSlice,
    GetCardOrderST: GetCardOrderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
