import { useState } from "react";
import { Notify } from "../UseNotification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ForgetPass } from "../../redux/reducers/all-methods-auth/Auth.ForgetPAssword";
import { useNavigate } from "react-router";
function ForgetPasswordHook() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(true);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const Onforget = async (e) => {
    e.preventDefault();
    if (email === "") {
      Notify("please complete the fill", "warn");
      return;
    }
    localStorage.setItem("setemail", email);
    setLoading(true);
    await dispatch(ForgetPass({ email }));
    setLoading(false);
  };
  const { forgetpass, error } = useSelector((state) => state.forgetpass);

  useEffect(() => {
    if (!loading) {
      if (error.status === "fail") {
        Notify("no user for this E-mail", "error");
      }
      if (forgetpass.status === "Success") {
        Notify("reset code sent to gmail", "success");
        setTimeout(() => {
          navigate("/user/resetcodepassword");
        }, 1500);
      }
    }
  }, [error.status, forgetpass, loading, navigate]);

  return [onChangeEmail, email, Onforget];
}

export default ForgetPasswordHook;
