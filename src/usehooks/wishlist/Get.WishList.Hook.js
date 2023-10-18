import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWishList } from "../../redux/reducers/all-methods-wishlist/Get.WishList";
import { useState } from "react";

function GetWishListHook() {
  const dispatch = useDispatch();
  let { wishlist } = useSelector((state) => state.postwishlist);
  let { Delwishlist } = useSelector((state) => state.Delwishlist);
  let [loading, setLoading] = useState(true);
  let [favProdList, setFavProd] = useState([]);

  useEffect(() => {
    let get = async () => {
      setLoading(true);
      await dispatch(GetWishList());
      setLoading(false);
    };

    get();
  }, [dispatch, wishlist, Delwishlist]);
  let { getwishlist } = useSelector((state) => state.getwishlist);
  // console.log(getwishlist.data);
  useEffect(() => {
    if (!loading) {
      if (getwishlist.data) {
        setFavProd(getwishlist.data.map((item) => item._id));
      }
    }
  }, [getwishlist.data, loading]);

  return [favProdList, getwishlist];
}

export default GetWishListHook;
