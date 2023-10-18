import { useState } from "react";
import { Notify } from "../UseNotification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ResetCode } from "../../redux/reducers/all-methods-auth/Auth.ResetCode";
import { useNavigate } from "react-router";
function ResetPassword() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [resetCode, setResetCode] = useState("");
  let [loading, setLoading] = useState(true);
  const onChangeResetCode = (e) => {
    setResetCode(e.target.value);
  };

  const OnReset = async (e) => {
    e.preventDefault();
    if (resetCode === "") {
      Notify("please complete the fill", "warn");
      return;
    }
    setLoading(true);
    await dispatch(ResetCode({ resetCode }));
    setLoading(false);
  };
  const { resetCodePass, error } = useSelector((state) => state.resetCodePass);

  useEffect(() => {
    if (!loading) {
      if (error.status === "fail") {
        Notify("Reset code is invalid", "error");
      }
      if (resetCodePass.status === "Success") {
        Notify("reset code sent to gmail", "success");
        setTimeout(() => {
          navigate("/user/updatepassword");
        }, 1500);
      }
    }
  }, [error.status, resetCodePass, loading, navigate]);

  return [onChangeResetCode, resetCode, OnReset];
}

export default ResetPassword;
