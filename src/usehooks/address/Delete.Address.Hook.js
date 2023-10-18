import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteAddress } from "../../redux/reducers/all-methods-address/Delete.Address";

function DeleteAddressHook(dele) {
  let dispatch = useDispatch();

  //   let dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleDelete = async () => {
    await dispatch(DeleteAddress(dele._id));

    setShow(false);
    // window.location.reload();
  };

  return [show, handleClose, handleDelete, handleShow];
}

export default DeleteAddressHook;
