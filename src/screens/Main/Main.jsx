import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import ClearIcon from '@mui/icons-material/Clear';
import Header from "../../components/Header/Header";
import Card from '../../components/Card/Card';
import AddCard from "../AddCard/AddCard";
import './main.scss'


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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
                 <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <ClearIcon className="card__close_icon" onClick={handleClose} />
                    {/* <div className="card__add">
                        <div className="card__add_img">
                            <img src={addFotoIcon} type="file" alt="Error :(" /> 
                            <img src={addFotoIcon} alt="Error :(" /> 
                            <img src={addFotoIcon} alt="Error :(" /> 
                            <img src={addFotoIcon} alt="Error :(" /> 
                        </div>
                        <input type="text" placeholder="Цена" value={} onChange={(e) => set(e.target.value)} />
                        <input type="text" placeholder="Название" value={} onChange={(e) => set(e.target.value)} />
                        <input type="text" placeholder="Краткое описание" value={} onChange={(e) => set(e.target.value)} />
                        <input type="text" placeholder="Полное описание" value={} onChange={(e) => set(e.target.value)} />
                        <PrimaryButton>Добавить</PrimaryButton>
                    </div> */}
                    <AddCard />
                </Backdrop>
        </div>
    </div>
  )
};

export default Main;
