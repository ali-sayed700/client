import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteCoupon } from "../../redux/reducers/all-methods-coupon/Delete.Coupon";

function DeleteCouponHook(coupon) {
  let dispatch = useDispatch();
  const getDate = (stamp) => {
    const date = new Date(stamp);

    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  };
  //   let dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleDelete = async () => {
    await dispatch(DeleteCoupon(coupon._id));

    setShow(false);
    // window.location.reload();
  };

  return [show, handleClose, handleDelete, handleShow, getDate];
}

export default DeleteCouponHook;
