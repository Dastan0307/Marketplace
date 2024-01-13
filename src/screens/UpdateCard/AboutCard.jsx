// import React, { useState, useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Carousel } from 'antd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import snikersPicture from '../../assets/img/image 2.png'
import '../ProfileLiked/profile_liked.scss';

const AboutCard = ({ handleCloseAboutCard, id }) => {
    const { about_product } = useSelector((state) => state.product);

  return (
    <div>
        <ClearIcon className="card__icon" onClick={handleCloseAboutCard} />
        <div className="card__edit">
            <Carousel className='card__carousel'>
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
            <div className="about__card">
                <h3 className='about__card_price'>{about_product.price} $</h3>
                <div className="card__like">
                    <FavoriteIcon className='card__like_icon' />
                    <p>Нравится: 1 M</p>
                </div>
                <h3 className='about__card_title'>{about_product.title}</h3>
                <p className='about__title_p'>{about_product.short_description}</p>
                <h3 className='card__about_description'>Детальное описание</h3>
                <p className='card__description_p'>{about_product.long_description}</p>
            </div>
        </div>
    </div>
  )
};

export default AboutCard;
