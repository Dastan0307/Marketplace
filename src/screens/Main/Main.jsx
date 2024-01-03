import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import AddProduct from "../AddCard/AddProduct";
import CardShow from "../../components/Card/CardShow";
import { getProduct } from "../../store/slices/products/productSlice";
import './main.scss'


const Main = () => {
    const [open, setOpen] = useState(false);

    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

  return (
    <div className="main">
      <ToastContainer />
        <Header handleClickOpen={handleClickOpen} />
        <div className="main__card">
            {
              products?.map((item) => 
                <CardShow key={item.id} item={item} />
              )
            }
                 <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <ClearIcon className="card__close_icon" onClick={handleClose} />
                    <AddProduct handleClose={handleClose} />
                </Backdrop>
        </div>
    </div>
  )
};

export default Main;
