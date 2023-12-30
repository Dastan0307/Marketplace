// import React, { useState, useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Carousel } from 'antd';
import snikersPicture from '../../assets/img/image 2.png'
import { PrimaryButton } from '../../components/Button/Button';
import './profile_liked.scss';

const EditCard = ({ handleClose }) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
  return (
    <div>
        <ClearIcon className="card__icon" onClick={handleClose} />
        <div className="card__edit">
            <Carousel afterChange={onChange} className='card__carousel'>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
            </Carousel>
            <input type="text" className='card__price' />
            <input type="text" className='card__title' />
            <input type="text" className='card__brend' />
            <input type="text" className='card__description' />
            <PrimaryButton>Сохранить</PrimaryButton>
        </div>
    </div>
  )
};

export default EditCard;
