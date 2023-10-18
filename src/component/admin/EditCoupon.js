import { useRef } from "react";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import EditCouponHook from "../../usehooks/coupon/Edit.Coupon.Hook";
import { useParams } from "react-router";
// import AddCouponHook from "../../usehooks/coupon/Add.Coupon.Hook";
// import AdminCardCoupon from "../allcard/admincard/AdminCardCoupon";
function EditCoupon() {
  const RefDate = useRef();
  let { id } = useParams();
  const [
    name,
    dateCoupon,
    discountCoupon,
    handleSubmit,
    onChangeName,
    onChangeDate,
    onChangeDiscount,
  ] = EditCouponHook(id);

  return (
    <div>
      <Row>
        <Col xs={8} className="p-3">
          <input
            className="w-100 border border-dark py-2 rounded my-3 px-3 fs-4"
            type="text"
            placeholder="name of  coupon"
            onChange={onChangeName}
            defaultValue={name}
          />
          <input
            ref={RefDate}
            className="w-100 border border-dark py-2 rounded my-3 px-3 fs-4"
            type="text"
            onFocus={() => (RefDate.current.type = "date")}
            placeholder="date of expire"
            value={dateCoupon}
            onChange={onChangeDate}
          />
          <input
            className="w-100 border border-dark py-2 rounded my-3 px-3 fs-4"
            type="number"
            placeholder="discount"
            onChange={onChangeDiscount}
            defaultValue={discountCoupon}
          />
          <Button
            onClick={handleSubmit}
            className="px-3 fs-4 d-flex ms-auto"
            variant="dark">
            {" "}
            save setting
          </Button>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"
          />
        </Col>
      </Row>
    </div>
  );
}

export default EditCoupon;
