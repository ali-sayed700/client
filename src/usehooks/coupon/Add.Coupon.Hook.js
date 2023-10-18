import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "../../usehooks/UseNotification";
import { PostCoupon } from "../../redux/reducers/all-methods-coupon/Post.Coupon";
import { GetCoupon } from "../../redux/reducers/all-methods-coupon/GetAll.Coupon";
import { GetAllCoupons } from "../../redux/ApiContainer/LinkCategory";

function AddCouponHook() {
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let [dateCoupon, setDateCoupon] = useState("");
  let [discountCoupon, setDiscountCoupon] = useState("");
  let [loading, setLoading] = useState(true);
  let { coupon, error } = useSelector((state) => state.postCoupon);
  let { getCoupon } = useSelector((state) => state.GetAllCoupon);
  let onChangeName = (e) => {
    setName(e.target.value);
  };
  let onChangeDate = (e) => {
    setDateCoupon(e.target.value);
  };
  let onChangeDiscount = (e) => {
    setDiscountCoupon(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      Notify("please complete the data", "warn");
      return;
    }

    setLoading(true);

    await dispatch(
      PostCoupon({
        name: name,
        expire: dateCoupon,
        discount: discountCoupon,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (coupon.status === 201) {
        setName("");
        setDateCoupon("");
        setDiscountCoupon("");
        Notify("data uploading", "success");
      } else if (error.status === 400) {
        Notify("duplicated coupon", "error");
      } else {
        Notify("there is trouble", "error");
      }
    }
  }, [coupon.status, error.status, loading]);
  useEffect(() => {
    const get = async () => {
      await dispatch(GetCoupon(GetAllCoupons()));
    };
    get();
  }, [dispatch, getCoupon.data]);

  let arr = [];
  try {
    if (getCoupon.data && getCoupon.data.length >= 1) arr = getCoupon.data;
  } catch (error) {}
  return [
    name,
    dateCoupon,
    discountCoupon,
    handleSubmit,
    onChangeName,
    onChangeDate,
    onChangeDiscount,
    arr,
  ];
}

export default AddCouponHook;
