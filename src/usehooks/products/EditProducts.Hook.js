import { useEffect, useState } from "react";

import avatar from "../../images/avatar.png";

import { useDispatch, useSelector } from "react-redux";
import { GetAllCg } from "../../redux/reducers/all-methods-category/GetAll.Category";
import { GetAllBrnd } from "../../redux/reducers/all-methods-brands/GetAll.brands";
import { GetOneSubCateg } from "../../redux/reducers/all-methods-subcategory/GetOne.SubCategory";
import {
  ShowGetOneCateg,
  ShowAllCg,
  ShowAllBrnd,
  ShowGetOneProd,
} from "../../redux/ApiContainer/LinkCategory";

import { Notify } from "../UseNotification";
import { GetAllProduct } from "../../redux/reducers/all-methods-products/GetAll.products";
import { UpdateProds } from "../../redux/reducers/all-methods-products/Update.products";
import { useNavigate } from "react-router";

function EditProductsHook(id) {
  let dispatch = useDispatch();
  let preNavigate = useNavigate();
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

  // let categoryRef = useRef(null);
  // let brandRef = useRef(null);
  // let changeRef = useRef("");

  let { arr } = useSelector((state) => state.category);
  let brand = useSelector((state) => state.brand.arr);
  let { CateOne } = useSelector((state) => state.getonesubcateg);

  let item = useSelector((state) => state.getProducts.prods);
  let { UpProds } = useSelector((state) => state.upAllProd);
  console.log(UpProds);
  useEffect(() => {
    const run = async () => {
      await dispatch(GetAllProduct(ShowGetOneProd(id)));
      await dispatch(GetAllCg(ShowAllCg()));
      await dispatch(GetAllBrnd(ShowAllBrnd()));
    };
    run();
  }, [dispatch, id]);
  /*------------------------------------*/
  useEffect(() => {
    if (item.data) {
      setImages(item.data.images || []);

      // setAvaImg(avatar);
      setProdName(item.data.title || "");
      setProdDesc(item.data.description || "");
      setPriceBef(item.data.price || "");
      setPriceAft(item.data.priceAfterDiscount || "");
      setQty(item.data.quantity || "");
      setCatId(item.data.category || 0);
      setBrandId(item.data.brand || 0);
      setColor(item.data.availableColors || []);
    }
  }, [item]);
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

  const handleCategory = (e) => {
    if (e.target.value === "0") {
      return;
    } else {
      setCatId(e.target.value);
    }
  };

  useEffect(() => {
    if (catId !== 0) {
      const run = async () => {
        await dispatch(GetOneSubCateg(ShowGetOneCateg(catId)));
      };
      run();
    }
  }, [catId, dispatch]);

  useEffect(() => {
    if (CateOne) {
      setOptional(CateOne.data);
    }
  }, [CateOne]);

  useEffect(() => {
    let colSelected = ["#f2792f", "#9a7cc4", "#7a1211", "#dfff", "#0fff"];

    setOp(
      optional?.map((e) => {
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
  let onselect = (e) => {
    setSelectedSubId(e);
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
    let arrTest = [...e.target.files];
    // console.log(arrTest);
    if (e.target.files) {
      let arr = [...images];
      arrTest.forEach((img, i) => {
        arr.push(URL.createObjectURL(img));
        // eslint-disable-next-line no-undef
      });
      setImages(arr);
    }
    setAvaImg(avatar);
  };

  const removeImg = (e) => {
    const newImg = images.slice(0, 5).filter((col) => {
      return col !== e;
    });
    setAvaImg(avatar);
    setImages(newImg);
    // changeRef.current.value = "";
  };

  // --------------------------------------------------------------------------
  // ***Here is the code for converting "image source" (url) to "Base64".***
  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  // ***Here is code for converting "Base64" to javascript "File Object".***

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = window.atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  // --------------------------------------------------------------------------handleRemove
  function handleRemove(e) {
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
  }

  async function handleProd(e) {
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
    formData.append("category", catId);
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

    for (let i = 0; i < images.length; i++) {
      await toDataURL(images[i]).then((dataUrl) => {
        let fileData = dataURLtoFile(dataUrl, Math.random() + ".jpeg");
        return formData.append("images", fileData);
      });
    }

    await toDataURL(images[0]).then((dataUrl) => {
      let fileData = dataURLtoFile(dataUrl, Math.random() + ".jpeg");
      return formData.append("imageCover", fileData);
    });
    setLoader(true);
    await dispatch(UpdateProds({ id: id, formData: formData }));
    setLoader(false);
  }
  useEffect(() => {
    if (!loader) {
      if (UpProds) {
        if (UpProds.status === 200) {
          Notify("data uploading", "success");
          setTimeout(() => {
            preNavigate(-1);
          }, 1500);
        } else {
          Notify("there is trouble", "error");
        }
      }
    }
  }, [UpProds, loader, preNavigate]);

  return [
    arr,
    brand,
    avaImg,
    op,
    // showPlus,
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
    handleRemove,
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
    // categoryRef,
    // brandRef,
    catId,
    brandId,
    // changeRef,
  ];
}
export default EditProductsHook;
