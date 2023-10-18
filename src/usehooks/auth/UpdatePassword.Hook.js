import { useState } from "react";
import { Notify } from "../UseNotification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { UpdatePass } from "../../redux/reducers/all-methods-auth/Auth.Update";

function UpdatePasswordHook() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [confirmpassword, setConfirmPassword] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(true);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const validationInput = () => {
    if (password === "" || confirmpassword === "") {
      Notify("please dont let the both field empty", "warn");
      return;
    }
  };
  const { newPass, error } = useSelector((state) => state.newPass);
  const OnNewPass = async (e) => {
    e.preventDefault();
    validationInput();
    if (password !== confirmpassword) {
      Notify("please write the correct password", "warn");
      return;
    }
    setLoading(true);

    await dispatch(
      UpdatePass({
        email: localStorage.getItem("setemail"),
        newPassword: password,
      })
    );
    setLoading(false);
  };
  // console.log(register);

  // console.log(error);

  console.log(error);
  useEffect(() => {
    if (!loading) {
      if (newPass.length >= 1) {
        console.log(newPass);
        console.log("asdasd");
        Notify("new password created successfully", "success");
        setTimeout(() => {
          //   navigate("/login");
        }, 1500);
        localStorage.removeItem("setemail");
      }
      if (error) {
        if (error.status === "fail") {
          Notify("reset code not verified", "error");
        }
      }
    }
  }, [error, loading, navigate, newPass]);

  return [
    onChangeConfirmPassword,
    confirmpassword,
    onChangePassword,
    OnNewPass,
    password,
  ];
}

export default UpdatePasswordHook;
