import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "../UseNotification";

import { UpdateProfileInfo } from "../../redux/reducers/all-methods-profile/Update.ProfileInfo";
import { UpdateProfilePass } from "../../redux/reducers/all-methods-profile/Update.ProfilePassword";
import { useNavigate } from "react-router";

function EditProfileHook(id) {
  let navigate = useNavigate();
  let user;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(true);
  let [isloading, setIsLoading] = useState(true);
  let { UpdInfo, error } = useSelector((state) => state.UpdateProfInfo);

  let { UpdPass, err } = useSelector((state) => state.UpdateProfPass);
  let updateUser = UpdInfo.data;

  let onChangeName = (e) => {
    setName(e.target.value);
  };
  let onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user.email, user.name, user.phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      Notify("please change  the data", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      UpdateProfileInfo({
        name,
        email,
        phone,
      })
    );
    setShow(false);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (UpdInfo.status === 200) {
        setName("");
        setEmail("");
        setPhone("");
        Notify("data uploading", "success");
        if (updateUser) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          user = localStorage.setItem(
            "user",
            JSON.stringify(updateUser.data.user)
          );
        }
      } else if (error.status === 400) {
        Notify("Email is already in use", "error");
      } else {
        Notify("there is trouble", "error");
      }
    }
  }, [UpdInfo, UpdInfo.status, loading]);

  // Model Notification settings
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Model Notification settings

  // edit password
  let [oldPass, setOldPass] = useState("");
  let [newPass, setNewPass] = useState("");
  let [confirmPass, setConfirmPass] = useState("");

  let onChangeOldPass = (e) => {
    setOldPass(e.target.value);
  };
  let onChangeNewPass = (e) => {
    setNewPass(e.target.value);
  };
  let onChangeConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };
  const handleChange = async (e) => {
    e.preventDefault();
    if (oldPass === "" || newPass === "" || confirmPass === "") {
      Notify("please change  the data", "warn");
      return;
    }
    if (newPass !== confirmPass) {
      Notify("password not matched", "warn");
      return;
    }
    setIsLoading(true);
    await dispatch(
      UpdateProfilePass({
        currentPassword: oldPass,
        password: newPass,
        passwordConfirm: confirmPass,
      })
    );

    setIsLoading(false);
  };

  console.log(UpdPass);
  console.log(err);
  useEffect(() => {
    if (!isloading) {
      if (UpdPass.status === 200) {
        setOldPass("");
        setConfirmPass("");
        setNewPass("");
        Notify("data uploading", "success");

        if (UpdPass.data) {
          // localStorage.setItem("user", JSON.stringify(UpdPass.data.data));
          // localStorage.setItem("token", JSON.stringify(UpdPass.data.token));
          setTimeout(() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/login");
          }, 1500);
        }
      } else if (err.status === 401) {
        Notify("please login again ", "warn");
      } else {
        Notify("there is trouble", "error");
      }
    }
  }, [UpdPass.data, UpdPass.status, err.status, isloading, navigate]);
  // edit password

  return [
    name,
    email,
    phone,
    handleClose,
    handleShow,
    show,
    user,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    handleSubmit,
    handleChange,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ];
}

export default EditProfileHook;
