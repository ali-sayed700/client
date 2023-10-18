import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpecificAddress } from "../../redux/ApiContainer/LinkCategory";
import { Notify } from "../UseNotification";
import { useNavigate } from "react-router";
import { GetAddress } from "../../redux/reducers/all-methods-address/GetAll.Address";
import { UpdateAddress } from "../../redux/reducers/all-methods-address/Update.Address";

function EditAddressHook(id) {
  let navigate = useNavigate();

  let dispatch = useDispatch();
  let [alias, setAlias] = useState("");
  let [details, setDetails] = useState("");
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(true);
  let [isData, setIsData] = useState(true);

  let { getOneAddress } = useSelector((state) => state.GetAddresses);
  let { UpdAddress } = useSelector((state) => state.UpdateAddresses);
  console.log(getOneAddress);
  let onChangeAlias = (e) => {
    setAlias(e.target.value);
  };
  let onChangeDetails = (e) => {
    setDetails(e.target.value);
  };
  let onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    const get = async () => {
      setIsData(true);
      await dispatch(GetAddress(GetSpecificAddress(id)));
      setIsData(false);
    };
    get();
  }, [dispatch, id]);

  useEffect(() => {
    if (!isData) {
      if (getOneAddress.data) {
        setAlias(getOneAddress.data.alias);
        setDetails(getOneAddress.data.details);
        setPhone(getOneAddress.data.phone);
      }
    }
  }, [getOneAddress.data, isData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      alias === "" ||
      details === "" ||
      phone === "" ||
      alias === getOneAddress.data.name
    ) {
      Notify("please change  the data", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      UpdateAddress({
        id,
        data: {
          alias,
          details,
          phone,
        },
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (UpdAddress.status === 200) {
        setAlias("");
        setDetails("");
        setPhone("");
        setTimeout(() => {
          navigate("/user/address");
        }, 1000);
        Notify("data uploading", "success");
      } else {
        Notify("there is trouble", "error");
      }
    }
  }, [UpdAddress.status, loading, navigate]);
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

export default EditAddressHook;
