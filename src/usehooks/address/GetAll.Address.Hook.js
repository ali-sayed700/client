import { useEffect, useState } from "react";
import { GetAllAddress } from "../../redux/ApiContainer/LinkCategory";
import { GetAddress } from "../../redux/reducers/all-methods-address/GetAll.Address";
import { useDispatch, useSelector } from "react-redux";

function GetAllAddressHook() {
  let dispatch = useDispatch();
  let [arr, setArr] = useState([]);
  let [loading, setLoading] = useState(true);
  let { getOneAddress } = useSelector((state) => state.GetAddresses);
  let { deleAddress } = useSelector((state) => state.DeleteAddresses);
  //   console.log(getOneAddress);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAddress(GetAllAddress()));
      setLoading(false);
    };
    get();
  }, [dispatch, deleAddress]);

  useEffect(() => {
    if (!loading) {
      if (getOneAddress.status === "success") {
        setArr(getOneAddress.data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [arr];
}

export default GetAllAddressHook;
