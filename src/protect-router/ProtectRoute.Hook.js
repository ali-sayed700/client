import { useEffect } from "react";
import { useState } from "react";

function ProtectRouteHook() {
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userData) {
      if (userData.role === "user") {
        setIsUser(true);
        setIsAdmin(false);
      } else {
        setIsUser(false);
        setIsAdmin(true);
      }
    } else {
      setIsUser(false);
      setIsAdmin(false);
    }
  }, [userData]);
  return [userData, isUser, isAdmin];
}

export default ProtectRouteHook;
