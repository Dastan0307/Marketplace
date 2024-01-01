import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import ClearIcon from '@mui/icons-material/Clear';
import Header from "../../components/Header/Header";
import Card from '../../components/Card/Card';
import AddCard from "../AddCard/AddCard";
import './main.scss'
import CardShow from "../../components/Card/CardShow";


const Main = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className="main">
        <Header handleClickOpen={handleClickOpen} />
        <div className="main__card">
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
            <CardShow />
                 <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <ClearIcon className="card__close_icon" onClick={handleClose} />
                    <AddCard />
                </Backdrop>
        </div>
    </div>
  )
};

export default Main;
