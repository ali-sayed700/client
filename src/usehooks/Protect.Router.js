import ForgetPassword from "../pages/auth/ForgetPassword";
import { useSelector } from "react-redux";
import ResetCodePassword from "../pages/auth/ResetCodePassword";
import AllAdmin from "../pages/alladmin/AllAdmin";
import { Outlet } from "react-router";
// import HomePage from "../pages/home/HomePage";

const useAuth = () => {
  const { forgetpass } = useSelector((state) => state.forgetpass);
  if (forgetpass.status === "Success") return true;
};

const useAuth2 = () => {
  const { resetCodePass } = useSelector((state) => state.resetCodePass);
  if (resetCodePass.status === "Success") return true;
};
const useAuthAdmin = () => {
  let user = localStorage.getItem("user");
  if (!user.role === "user") return true;
};

function ProtectRouter() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <ForgetPassword />;
}

export let ProtectUpdateRouter = () => {
  const isAuth = useAuth2();
  return isAuth ? <Outlet /> : <ResetCodePassword />;
};

export let ProtectADminRouter = () => {
  const isAuth = useAuthAdmin();

  return isAuth ? <Outlet /> : <AllAdmin />;
};
export default ProtectRouter;
