import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "../UseNotification";

import { PostAddress } from "../../redux/reducers/all-methods-address/Post.Address";
import { useNavigate } from "react-router";

function AddAddressHook() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [alias, setAlias] = useState("");
  let [details, setDetails] = useState("");
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(true);
  let { addAddress, error } = useSelector((state) => state.PostAddresses);

  let onChangeAlias = (e) => {
    setAlias(e.target.value);
  };
  let onChangeDetails = (e) => {
    setDetails(e.target.value);
  };
  let onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (alias === "" || details === "" || phone === "") {
      Notify("please complete the data", "warn");
      return;
    }

    setLoading(true);

    await dispatch(
      PostAddress({
        alias,
        details,
        phone,
      })
    );

    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      if (addAddress.status === 200) {
        setAlias("");
        setDetails("");
        setPhone("");
        Notify("address created successfully", "success");
        setTimeout(() => {
          navigate("/user/address");
        }, 1500);
      } else {
        Notify("there is trouble", "error");
      }
    }
  }, [addAddress.status, error.status, loading, navigate]);

  return [
    alias,
    details,
    phone,
    handleSubmit,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
  ];
}

export default AddAddressHook;
