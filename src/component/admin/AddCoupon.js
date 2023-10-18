import { useRef } from "react";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "../../usehooks/coupon/Add.Coupon.Hook";
import AdminCardCoupon from "../allcard/admincard/AdminCardCoupon";
function AddCoupon() {
  const RefDate = useRef();
  const [
    name,
    dateCoupon,
    discountCoupon,
    handleSubmit,
    onChangeName,
    onChangeDate,
    onChangeDiscount,
    arr,
  ] = AddCouponHook();
  return (
    <div>
      <Row>
        <Col xs={8} className="p-3">
          <input
            className="w-100 border border-dark py-2 rounded my-3 px-3 fs-4"
            type="text"
            placeholder="name of  coupon"
            onChange={onChangeName}
            value={name}
          />
          <input
            ref={RefDate}
            className="w-100 border border-dark py-2 rounded my-3 px-3 fs-4"
            type="text"
            placeholder="date of expire"
            onFocus={() => (RefDate.current.type = "date")}
            onBlur={() => (RefDate.current.type = "text")}
            onChange={onChangeDate}
            value={dateCoupon}
          />
          <input
            className="w-100 border border-dark py-2 rounded my-3 px-3 fs-4"
            type="number"
            placeholder="discount"
            onChange={onChangeDiscount}
            value={discountCoupon}
          />
          <Button
            className="px-3 fs-4 d-flex ms-auto"
            variant="dark"
            onClick={handleSubmit}>
            save setting
          </Button>
          {arr.length >= 1 ? (
            arr.map((item, index) => (
              <AdminCardCoupon coupon={item} key={index} />
            ))
          ) : (
            <p> there is no coupons </p>
          )}

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

export default AddCoupon;
