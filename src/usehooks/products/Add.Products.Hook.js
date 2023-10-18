import { useEffect, useRef, useState } from "react";

import avatar from "../../images/avatar.png";

import { useDispatch, useSelector } from "react-redux";
import { GetAllCg } from "../../redux/reducers/all-methods-category/GetAll.Category";
import { GetAllBrnd } from "../../redux/reducers/all-methods-brands/GetAll.brands";
import { GetOneSubCateg } from "../../redux/reducers/all-methods-subcategory/GetOne.SubCategory";
import { CrePro } from "../../redux/reducers/all-methods-products/Post.products";
import {
  ShowGetOneCateg,
  ShowAllCg,
  ShowAllBrnd,
} from "../../redux/ApiContainer/LinkCategory";

import { Notify } from "../UseNotification";

function AddProductsHook() {
  let dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const [avaImg, setAvaImg] = useState(avatar);
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [priceBef, setPriceBef] = useState("");
  const [priceAft, setPriceAft] = useState("");
  const [qty, setQty] = useState("");
  const [catId, setCatId] = useState(0);
  const [brandId, setBrandId] = useState(0);
  const [selectedSubId, setSelectedSubId] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [color, setColor] = useState([]);
  const [optional, setOptional] = useState([]);
  const [op, setOp] = useState([]);
  const [loader, setLoader] = useState(true);

  let selectRef = useRef(null);
  let categoryRef = useRef(null);
  let brandRef = useRef(null);
  let { arr } = useSelector((state) => state.category);
  let brand = useSelector((state) => state.brand.arr);
  let { CateOne } = useSelector((state) => state.getonesubcateg);
  let { prods } = useSelector((state) => state.productions);
  useEffect(() => {
    dispatch(GetAllCg(ShowAllCg()));
    dispatch(GetAllBrnd(ShowAllBrnd()));
  }, [dispatch]);
  /*------------------------------------*/
  const onChangeName = (e) => {
    setProdName(e.target.value);
  };
  const onChangeDes = (e) => {
    setProdDesc(e.target.value);
  };
  const onChangeQnt = (e) => {
    setQty(e.target.value);
  };
  const onChangeBf = (e) => {
    setPriceBef(e.target.value);
  };
  const onChangeAf = (e) => {
    setPriceAft(e.target.value);
  };

  const ShowColor = (e) => {
    setShowColor(e);
  };

  const handleCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(GetOneSubCateg(ShowGetOneCateg(e.target.value)));
      setCatId(e.target.value);
    }
  };

  useEffect(() => {
    if (catId !== 0) {
      if (CateOne.data) {
        setOptional(CateOne.data);
        // setSubcat(CateOne.data);
      }
    }
  }, [CateOne.data, catId]);

  useEffect(() => {
    let colSelected = ["#f2792f", "#9a7cc4", "#7a1211", "#dfff", "#0fff"];

    setOp(
      optional.map((e) => {
        return {
          value: e.name,
          label: e.name,
          color: colSelected[Math.floor(Math.random() * 5)],
          id: e._id,
        };
      })
    );
  }, [optional]);

  let colorSyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      //   console.log(data, isDisabled, isFocused, isSelected);
      return {
        ...styles,
        color: "#191515",
        cursor: "pointer",
        backgroundColor: data.color,
        // margin: "5px 0 ",
        ":hover": {
          backgroundColor: "#fff",
        },
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#fff",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "#ccc",
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  const handleBrand = (e) => {
    setBrandId(e.target.value);
  };
  const handleColor = (e) => {
    setColor([...color, e.hex]);
    setShowColor(!showColor);
  };
  const removeColor = (e) => {
    // color.splice(e, 1);
    const newColor = color.filter((col) => {
      return col !== e;
    });
    setColor(newColor);
  };

  const onImageChange = (e) => {
    let arrTest = [...images, ...e.target.files];

    if (e.target.files) {
      let arr = [];

      arrTest.slice(0, 5).forEach((img, i) => {
        arr.push(img);
      });
      console.log(arr);
      setImages(arr);
    }

    setAvaImg(avatar);
  };

  const removeImg = (e) => {
    const newImg = images.slice(0, 5).filter((col) => {
      return col !== e;
    });

    setImages(newImg);

    setAvaImg(avatar);
  };

  const onselect = (select) => {
    setSelectedSubId(select);
  };

  const handleProd = async (e) => {
    e.preventDefault();

    if (
      prodName === "" ||
      priceBef === 0 ||
      prodDesc === "" ||
      qty === "" ||
      priceAft === 0 ||
      images.length <= 0
    ) {
      Notify("please complete the data", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("imageCover", images[0]);
    formData.append("category", catId);
    images.map((e) => {
      return formData.append("images", e);
    });

    formData.append("description", prodDesc);
    formData.append("quantity", qty);
    formData.append("price", priceBef);
    formData.append("priceAfterDiscount", priceAft);
    formData.append("brand", brandId);

    color.map((e) => {
      return formData.append("availableColors", e);
    });

    selectedSubId.map((subcatId) => {
      return formData.append("subcategory", subcatId.id);
    });

    await dispatch(CrePro(formData));
    setLoader(false);
    categoryRef.current.selected = "selected";
    brandRef.current.selected = "selected";
    selectRef.current.clearValue();
  };

  useEffect(() => {
    if (!loader) {
      setImages([]);
      setAvaImg(avatar);
      setProdName("");
      setProdDesc("");
      setPriceBef("");
      setPriceAft("");
      setQty("");
      setCatId(0);
      setBrandId(0);
      setColor([]);
      setSelectedSubId([]);
      setOptional([]);
      setOp();

      // console.log(EmptyRef.current);
      if (prods) {
        if (prods.status === 201) {
          Notify("data uploading", "success");
        } else {
          Notify("there is trouble", "error");
        }
      }
      setLoader(true);
    }
  }, [loader, prods]);

  return [
    arr,
    brand,
    avaImg,
    op,
    onChangeName,
    onChangeDes,
    onChangeQnt,
    onChangeBf,
    onChangeAf,
    handleCategory,
    colorSyles,
    handleBrand,
    handleColor,
    removeColor,
    onImageChange,
    removeImg,
    handleProd,
    onselect,
    images,
    prodName,
    qty,
    priceAft,
    priceBef,
    prodDesc,
    color,
    showColor,
    ShowColor,
    categoryRef,
    brandRef,
    selectRef,
  ];
}

export default AddProductsHook;
