import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCoupon } from "../../redux/reducers/all-methods-coupon/GetAll.Coupon";
import { GetSpecificCoupon } from "../../redux/ApiContainer/LinkCategory";
import { UpdateCoupon } from "../../redux/reducers/all-methods-coupon/Update.Coupon";
import { Notify } from "../UseNotification";
import { useNavigate } from "react-router";

function EditCouponHook(id) {
  let navigate = useNavigate();

  const getDate = (stamp) => {
    const date = new Date(stamp);

    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  };
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let [dateCoupon, setDateCoupon] = useState("");
  let [discountCoupon, setDiscountCoupon] = useState("");
  let [loading, setLoading] = useState(true);
  let [isData, setIsData] = useState(true);
  let getOneCoupon = useSelector((state) => state.GetAllCoupon.getCoupon);
  let { UpdCoupon, error } = useSelector((state) => state.UpdateCoupons);
  let onChangeName = (e) => {
    setName(e.target.value);
  };
  let onChangeDate = (e) => {
    setDateCoupon(e.target.value);
  };
  let onChangeDiscount = (e) => {
    setDiscountCoupon(e.target.value);
  };

  useEffect(() => {
    const get = async () => {
      setIsData(true);
      await dispatch(GetCoupon(GetSpecificCoupon(id)));
      setIsData(false);
    };
    get();
  }, [dispatch, id]);
  useEffect(() => {
    if (!isData) {
      if (getOneCoupon.data) {
        setName(getOneCoupon.data.name);
        setDateCoupon(getDate(getOneCoupon.data.expire));
        setDiscountCoupon(getOneCoupon.data.discount);
      }
    }
  }, [getOneCoupon.data, isData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      dateCoupon === "" ||
      discountCoupon === "" ||
      name === getOneCoupon.data.name
    ) {
      Notify("please change  the data", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      UpdateCoupon({
        id,
        data: {
          name: name,
          expire: dateCoupon,
          discount: discountCoupon,
        },
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (UpdCoupon.status === 200) {
        setName("");
        setDateCoupon("");
        setDiscountCoupon("");
        setTimeout(() => {
          navigate("/admin/coupon");
        }, 1000);
        Notify("data uploading", "success");
      } else {
        Notify("there is trouble", "error");
      }
    }
  }, [UpdCoupon.status, error.status, loading, navigate]);
  return [
    name,
    dateCoupon,
    discountCoupon,
    handleSubmit,
    onChangeName,
    onChangeDate,
    onChangeDiscount,
  ];
}

export default EditCouponHook;
