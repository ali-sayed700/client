import React from "react";
import { Container } from "react-bootstrap";
import RateItem from "./RateItem";
import RatingPost from "./RatingPost";
import Paginations from "../utility/paginations";
import GetRateHook from "../../usehooks/review/Get.Rate.Hook";
import { useParams } from "react-router";

function RateCont({ rateQtity, rateAve }) {
  let { id } = useParams();
  const [allRv, onPages, pageCount] = GetRateHook(id);
  if (Array.isArray(allRv))
    return (
      <Container className="my-5 bx-shadow p-3 rounded bg-white">
        <div className="d-flex gap-4 align-items-center">
          <p className="fs-3">ratings </p>
          <p className="fs-3 d-flex align-items-center ">
            {rateQtity}
            <i
              className="bx bxs-star mt-2 ms-2"
              style={{ color: "#ecfb00" }}></i>{" "}
          </p>
          <p className="fs-3">({`${rateAve}`} rated)</p>
        </div>
        <RatingPost />
        {allRv.length >= 1 ? (
          allRv.map((review, index) => <RateItem key={index} review={review} />)
        ) : (
          <p>no comments </p>
        )}

        {allRv.length >= 1 ? (
          <Paginations pageCount={pageCount} onPage={onPages} />
        ) : null}
      </Container>
    );
}

export default RateCont;
