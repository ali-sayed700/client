import { useDispatch, useSelector } from "react-redux";
import { GetAllCg } from "../../redux/reducers/all-methods-category/GetAll.Category";
import { ShowAllCg } from "../../redux/ApiContainer/LinkCategory";
import { ChkNt, Notify } from "../../usehooks/UseNotification";
import { PostSubcategory } from "../../redux/reducers/all-methods-subcategory/Post.SubCategory";
import { useEffect, useState } from "react";
import { useRef } from "react";

function AddSubCategoryhook() {
  let dispatch = useDispatch();
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  let res = useSelector((state) => state.category.arr);
  let { arr, error } = useSelector((state) => state.subcatogery);

  const useSel = useRef();
  useEffect(() => {
    dispatch(GetAllCg(ShowAllCg()));
    ChkNt("connection network", "success");
  }, []);
  let onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === "0") {
      Notify("please choose one", "warn");
      return;
    }
    if (name === "") {
      Notify("please enter name", "warn");
      return;
    }
    setLoading(true);

    await dispatch(
      PostSubcategory({
        name,
        category: id,
      })
    );
    setLoading(false);
    useSel.current.selected = "selected";
  };

  useEffect(() => {
    if (!loading) {
      setName("");
      setId("0");
      if (arr) {
        if (arr.status === 201) {
          Notify("data uploading", "success");
        } else if (error.message === "Request failed with status code 400") {
          Notify("data is duplicated", "error");
        } else {
          Notify("there is trouble", "error");
        }
      }
      setLoading(true);
    }
  }, [loading]);
  return [useSel, name, res, onChangeName, handleChange, handleSubmit];
}

export default AddSubCategoryhook;
