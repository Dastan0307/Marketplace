import React from "react";
import { useNavigate } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/img/Frame 851212101.svg'
import PrimaryButton from "../Button/Button";
import headerIcon from '../../assets/img/Frame 8512120732.svg';

const Header = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  return (
    <div className="header">
        <img src={logo} alt="Error :(" style={{ width: '196px', height: '44px' }} />
        <div className="header__btn">
            <PrimaryButton>Подать объявление</PrimaryButton>
            <div className="header__user" onClick={() => navigate('/profile')} >
                <p>{username ? username : ''}<br /><span>{email ? email : ''}</span></p>
                <img src={headerIcon} alt="Error :("  />
            </div>
        </div>
    </div>
  )
};

export default Header;
