// import React, { useState, useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Carousel } from 'antd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import snikersPicture from '../../assets/img/image 2.png'
import './profile_liked.scss';

const AboutCard = ({ handleCloseAboutCard }) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
  return (
    <div>
        <ClearIcon className="card__icon" onClick={handleCloseAboutCard} />
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
            <div className="about__card">
                <h3 className='about__card_price'>12000 сом</h3>
                <div className="card__like">
                    <FavoriteIcon className='card__like_icon' />
                    <p>Нравится: 1 M</p>
                </div>
                <h3 className='about__card_title'>Adidas Yeezy 500</h3>
                <p className='about__title_p'>The Yeezy 500 Blush is a limited edition shoe designed by Kanye West for Adidas</p>
                <h3 className='card__about_description'>Детальное описание</h3>
                <p className='card__description_p'>It features a unique design, with a chunky silhouette and a blush colorway. The shoe has a mix of suede, mesh and leather, and it's considered a highly sought-after item among shoe enthusiasts.</p>
            </div>
        </div>
    </div>
  )
};

export default AboutCard;
