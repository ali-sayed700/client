import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostReview } from "../../redux/reducers/all-methods.reviews/Post.Reviews";
import { useEffect } from "react";
import { Notify } from "../UseNotification";

// import { createReview } from "../../redux/ApiContainer/LinkCategory";

function AddRateHook(id) {
  let dispatch = useDispatch();
  let [rateText, setRateText] = useState("");
  let [rateValue, setRateValue] = useState(0);
  let [loading, setLoading] = useState(true);
  let user;

  let onChangeText = (e) => {
    setRateText(e.target.value);
  };
  let onChangeValue = (val) => {
    setRateValue(val);
  };

  if (localStorage.getItem("user")) {
    // eslint-disable-next-line no-unused-vars
    user = JSON.parse(localStorage.getItem("user"));
  }

  let { review, error } = useSelector((state) => state.PostRv);
  let onSubmitext = async () => {
    if (rateText === "" || rateValue === 0) {
      Notify("please fill both", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      PostReview({
        id,
        formRv: { review: rateText, rating: rateValue },
      })
    );
    setLoading(false);

    setRateText("");
    setRateValue(0);
  };
  useEffect(() => {
    if (!loading) {
      if (review) {
        if (review.status === 201) {
          Notify("you added review successfully", "success");
        }
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }

      if (error) {
        if (error.status === 500) {
          Notify("you must sign in firts ", "error");
          return;
        } else if (error.status === 403) {
          Notify("admin cant rate on this product", "error");
          return;
        } else if (
          error.data.errors[0].msg ===
          "You already added review on this product"
        ) {
          Notify("You already added review on this product", "error");
          return;
        }
      }
    }
  }, [error, loading, review]);
  return [onChangeText, onChangeValue, rateText, rateValue, user, onSubmitext];
}

export default AddRateHook;
