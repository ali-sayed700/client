import { useState } from "react";
import { Notify } from "../UseNotification";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../../redux/reducers/all-methods-auth/Auth.Register";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function RegisterHook() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirm, setPasswordConfirm] = useState("");
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(true);
  //   const regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  /*
    This regex will enforce these rules:

At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])
Minimum eight in length .{8,} (with the anchors)

    */
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPass = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const validationInput = () => {
    if (name === "") {
      Notify("please write username", "warn");
      return;
    }
    if (phone.length <= 10) {
      Notify("please write the correct phone number", "warn");
      return;
    }
    // if (password.match(regx)) {
    //   Notify("correct nom", "success");
    // } else {
    //   Notify(
    //     "password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    //     "warn"
    //   );
    // }
  };
  const { register, error } = useSelector((state) => state.register);
  const OnSubmitValid = async (e) => {
    e.preventDefault();
    validationInput();
    if (password !== passwordConfirm) {
      Notify("please write the correct password", "warn");
      return;
    }
    setLoading(true);

    await dispatch(Register({ name, email, password, passwordConfirm, phone }));
    setLoading(false);
  };
  // console.log(register);

  // console.log(error);

  useEffect(() => {
    if (!loading) {
      if (register) {
        if (register.token) {
          localStorage.setItem("token", register.token);
          Notify("account created successfully", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      }
      if (error) {
        error.forEach((err) => {
          console.log(err);
          if (err.msg === "E-mail already in use") {
            Notify("E-mail already in use", "error");
          }
          if (err.msg === "accept only egypt phone numbers") {
            Notify("accept only egypt phone numbers", "error");
          }
          if (err.msg === "Password confirmation is incorrect") {
            Notify("please enter the right password", "error");
          }
        });
      }
    }
  }, [error, loading, navigate, register]);

  return [
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPass,
    onChangePhone,
    OnSubmitValid,
    name,
    email,
    password,
    passwordConfirm,
    phone,
  ];
}

export default RegisterHook;
