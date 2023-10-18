import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "../UseNotification";
import { CreateApplyCoupon } from "../../redux/reducers/all-methods-coupon/Create.ApplyCoupon";

function ApplyCouponHook() {
  let dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");

  const [loading, setLoading] = useState(true);

  let { ApplyCoupon } = useSelector((state) => state.ApplyCoupnSt);
  const onChangeCouponName = (e) => {
    setCouponName(e);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (couponName === "") {
      Notify("please, write the coupon ", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      CreateApplyCoupon({
        couponName: couponName,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      if (ApplyCoupon.status === 200) {
        Notify(" coupon applied successfully  ", "success");
      } else {
        Notify("something is wrong  ", "error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return [handleApply, onChangeCouponName, couponName];
}
export default ApplyCouponHook;
