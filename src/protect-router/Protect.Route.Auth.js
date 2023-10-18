import { Navigate, Outlet } from "react-router";

function ProtectRouteAuth({ auth, children }) {
  if (auth === false) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
}

export default ProtectRouteAuth;
