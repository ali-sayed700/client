import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "../UseNotification";
import { EditReview } from "../../redux/reducers/all-methods.reviews/Edit.Reviews";

function EditRateHook(review) {
  let dispatch = useDispatch();
  let [editText, setEditText] = useState(review.review);
  let [editRating, setEditRating] = useState(review.rating);
  let [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useEffect(() => {
  //  if (user._id === review.user._id) {
  //    setIsUSer(true);
  //  }
  //   }, []);
  let onChangeText = (e) => {
    setEditText(e.target.value);
  };
  let ratingChanged = (e) => {
    setEditRating(e);
  };

  const [showEdit, setShowEdit] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);
  let { editRev } = useSelector((state) => state.editreview);

  let handleEdit = async () => {
    setLoading(true);

    await dispatch(
      EditReview({
        id: review._id,
        formRv: { review: editText, rating: editRating },
      })
    );
    setLoading(false);
    handleEditClose();
  };
  useEffect(() => {
    if (!loading) {
      if (editRev.status === 200) {
        Notify(" review is edited successfully", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        Notify("there's ptoblem in edition ", "warn");
      }
    }
  }, [editRev.status, loading]);
  return [
    handleEdit,
    handleEditClose,
    handleEditShow,
    showEdit,
    onChangeText,
    editText,
    editRating,
    ratingChanged,
  ];
}

export default EditRateHook;
