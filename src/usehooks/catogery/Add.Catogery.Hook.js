import avatar from "../../images/avatar.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostACg } from "../../redux/reducers/all-methods-category/Post.Category";
import { Notify } from "../../usehooks/UseNotification";

function AddCatogeryHook() {
  let dispatch = useDispatch();
  let [img, setImg] = useState(avatar);
  let [name, setName] = useState("");
  let [selFile, setSelFile] = useState(null);
  let [loading, setLoading] = useState(true);
  let [ispress, setIspress] = useState(false);
  let res = useSelector((state) => state.categoryPost.arr);

  let onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || selFile === null) {
      Notify("please complete the data", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selFile);
    setLoading(true);
    setIspress(true);

    await dispatch(PostACg(formData));

    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setName("");
      setSelFile(null);
      setTimeout(() => {
        setIspress(false);
        setLoading(true);
      }, 3000);

      if (res.status === 201) {
        Notify("data uploading", "success");
      } else {
        Notify("there is trouble", "error");
      }
    }
  }, [loading]);
  return [
    img,
    name,
    loading,
    ispress,
    onImageChange,
    handleSubmit,
    onChangeName,
  ];
}

export default AddCatogeryHook;
