import { useState } from "react";
import { Notify } from "../UseNotification";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../redux/reducers/all-methods-auth/Auth.Login";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function LoginHook() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const OnLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Notify("please complete the fill", "warn");
      return;
    }

    setLoading(true);
    await dispatch(Login({ email, password }));
    setLoading(false);
  };

  const { login, error } = useSelector((state) => state.login);
  useEffect(() => {
    if (!loading) {
      if (login) {
        if (login.token) {
          localStorage.setItem("token", login.token);
          localStorage.setItem("user", JSON.stringify(login.data));
          Notify("account created successfully", "success");

          setTimeout(() => {
            // window.location.href = "/";
            navigate("/");
          }, 1500);
        } else if (error.message === "Incorrect email or password") {
          Notify("please make sure about email and passwrd", "error");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        } else if (error.errors[0].msg === "Invalid email formate") {
          Notify("please write valid email", "error");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
    }
  }, [error, loading, login, navigate]);
  return [onChangeEmail, onChangePassword, email, password, OnLogin];
}

export default LoginHook;
