import React from "react";
import { useNavigate } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/img/Frame 851212101.svg'
import { PrimaryButton } from "../Button/Button";
import headerIcon from '../../assets/img/Frame 8512120732.svg';

const Header = ({ handleClickOpen }) => {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const userImg = localStorage.getItem('user_photo');

  return (
    <div className="header">
        <img src={logo} alt="Error :(" style={{ width: '196px', height: '44px' }} />
        <div className="header__btn">
            <PrimaryButton onClick={handleClickOpen}>Подать объявление</PrimaryButton>
            <div className="header__user" onClick={() => navigate('/profile')} >
                <p>{username ? username : ''}<br /><span>{email ? email : ''}</span></p>
                {
                  userImg ? 
                  <img src={userImg} alt="Error :(" style={{width: '60px',height: '60px',  borderRadius: '100px'}} /> :
                  <img src={headerIcon} alt="Error :(" style={{width: '60px'}} /> 
                }
            </div>
        </div>
    </div>
  )
};

export default Header;
