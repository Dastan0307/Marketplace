import React from "react";
import LogoutImg from '../../../assets/img/logout 01.svg';
import PrimaryButton from '../../../components/Button/Button';
import { Button } from 'antd';
import '../auth.scss';

const Logout = ({ logoutCardClose }) => {
  return (
    <div className="logout">
        <img src={LogoutImg} alt="Error :(" width={130} />
        <p>Вы действительно хотите выйти с приложения?</p>
        <PrimaryButton>Выйти</PrimaryButton>
        <Button shape="round" className="logout__btn" onClick={logoutCardClose}>Отмена</Button>
    </div>
  )
};

export default Logout;
