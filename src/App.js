import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Footer from "./component/utility/Footer";
import NavBar from "./component/utility/NavBar";
import PageLogin from "./pages/auth/PageLogin";
import PageRegister from "./pages/auth/PageRegister";
import AllCatogery from "./pages/allcatogery/AllCatogery";
import AllBrand from "./pages/allbrand/AllBrand";
import ShopProduct from "./pages/product/ShopProduct";
import ProductsDetails from "./pages/product/ProductsDetails";
import CartPage from "./pages/cartoage/CartPage";
import PaymentWay from "./pages/payment/PaymentWay";
import AllAdmin from "./pages/alladmin/AllAdmin";
import AllOrder from "./pages/alladmin/AllOrder";
import AdminOrderDetails from "./pages/alladmin/AdminOrderDetails";
import AdminAddBrand from "./pages/alladmin/AdminAddBrand";
import AdminAddCatogery from "./pages/alladmin/AdminAddCatogery";
import AdminSubCatogery from "./pages/alladmin/AdminSubCatogery";
import AdminAddProduct from "./pages/alladmin/AdminAddProduct";
import UserMainOrders from "./pages/users/UserMainOrders";
import UserFavProd from "./pages/users/UserFavProd";
import UserAddress from "./pages/users/UserAddress";
import UserAddAddress from "./pages/users/UserAddAddress";
import UserEditAddress from "./pages/users/UserEditAddress";
import UserProfile from "./pages/users/UserProfile";
import AdminEditProduct from "./pages/alladmin/AdminEditProduct";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetCodePassword from "./pages/auth/ResetCodePassword";
import UpdatePassword from "./pages/auth/UpdatePassword";
// import ProtectRouter, {
//   // ProtectADminRouter,
//   ProtectUpdateRouter,
// } from "./usehooks/Protect.Router";
import AdminAddCoupon from "./pages/alladmin/AdminAddCoupon";
import AdminEditAddCoupon from "./pages/alladmin/AdminEditAddCoupon";
import ProtectRouteHook from "./protect-router/ProtectRoute.Hook";
import ProtectRouteAuth from "./protect-router/Protect.Route.Auth";
import ProductByCategory from "./pages/product/ProductByCategory";
import ProductByBrand from "./pages/product/ProductByBrand";

// import { disableReactDevTools } from '@fvilers/disable-react-devtools';


// if (process.env.NODE_ENV === 'production') {
//   disableReactDevTools();
// }
function App() {
  // eslint-disable-next-line no-unused-vars
  const [userData, isUser, isAdmin] = ProtectRouteHook();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/allcatogery" element={<AllCatogery />} />
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products" element={<ShopProduct />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/payment" element={<PaymentWay />} />
          <Route path="/product/category/:id" element={<ProductByCategory />} />
          <Route path="/product/brand/:id" element={<ProductByBrand />} />

          {/* ************************************************************ */}
          <Route element={<ProtectRouteAuth auth={isAdmin} />}>
            <Route path="/admin/alladmin" element={<AllAdmin />} />
            <Route path="/admin/AllOrder" element={<AllOrder />} />
            <Route path="/admin/order/:id" element={<AdminOrderDetails />} />
            <Route path="/admin/addbrand" element={<AdminAddBrand />} />
            <Route path="/admin/addcatogery" element={<AdminAddCatogery />} />
            <Route path="/admin/subcatogery" element={<AdminSubCatogery />} />
            <Route path="/admin/addproduct" element={<AdminAddProduct />} />
            <Route path="/admin/edit/:id" element={<AdminEditProduct />} />
            <Route
              path="/admin/editCoupon/:id"
              element={<AdminEditAddCoupon />}
            />
            <Route path="/admin/coupon" element={<AdminAddCoupon />} />
          </Route>
          {/* ************************************************************ */}
          <Route element={<ProtectRouteAuth auth={isUser} />}>
            <Route path="/user/allorder" element={<UserMainOrders />} />
            <Route path="/user/favorders" element={<UserFavProd />} />
            <Route path="/user/address" element={<UserAddress />} />
            <Route path="/user/add-address" element={<UserAddAddress />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddress />}
            />
            <Route path="/user/profile" element={<UserProfile />} />
          </Route>
          {/* ************************************************************ */}

          <Route path="/user/forgetpassword" element={<ForgetPassword />} />

          <Route
            path="/user/resetcodepassword"
            element={<ResetCodePassword />}
          />

          <Route path="/user/updatepassword" element={<UpdatePassword />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
