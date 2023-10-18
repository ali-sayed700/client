import { useEffect, useState } from "react";
import ShowSearchProd from "../products/ShowSearchProd";
import { useNavigate } from "react-router";

const NavBarSearch = () => {
  // eslint-disable-next-line no-undef
  const [, , , getAllProd] = ShowSearchProd();
  const [searchWord, setSearchWord] = useState("");
  const naviSearch = useNavigate();
  const OnChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/products") {
      naviSearch("/products");
    }
    // navigate("/products");
    getAllProd();
  };

  useEffect(() => {
    setTimeout(() => {
      getAllProd();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);
  // console.log(searchWord);

  return [OnChangeSearch];
};

export default NavBarSearch;
