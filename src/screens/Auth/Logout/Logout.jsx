import React from "react";
import { toast } from "react-toastify";
import { Button } from 'antd';
import LogoutImg from '../../../assets/img/logout 01.svg';
import { PrimaryButton } from '../../../components/Button/Button';
import '../auth.scss';

const Logout = ({ logoutCardClose }) => {
  function handleLogout() {
    localStorage.clear();
    toast.warning('Вы вышли из своей учетной записи');
    logoutCardClose();
  };

  return (
    <div className="logout">
        <img src={LogoutImg} alt="Error :(" width={130} />
        <p>Вы действительно хотите выйти с приложения?</p>
        <PrimaryButton onClick={handleLogout}>Выйти</PrimaryButton>
        <Button shape="round" className="logout__btn" onClick={logoutCardClose}>Отмена</Button>
    </div>
  )
};

export default Logout;
