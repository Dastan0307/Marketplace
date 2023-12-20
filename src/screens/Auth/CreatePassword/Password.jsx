import React from "react";
import TextField from '@mui/material/TextField';
import PrimaryButton from "../../../components/Button/Button";
import authImg from '../../../assets/img/Photo background.png';
import shooterImg from '../../../assets/img/Frame 851211998.svg'
import eyeIcon from '../../../assets/img/eye-disable.svg';
import keyIcon from '../../../assets/img/Frame 861.svg'
import '../auth.scss';

const Password = () => {
  return (
    <div className="container">
        <div className="password">
            <img src={authImg} alt="Error :(" className="main__img" />
            <div className="register__form">
            <div className="register__btns">
                <a href="#"><img src={shooterImg} alt="Error" className="register__choose_img" />Назад</a>
                <p>Регистрация</p>
                <img src={eyeIcon} alt="Error :(" className="password__eye_icon" />
            </div>
                <form className="password__form">
                    <img src={keyIcon} alt="Error :(" style={{ width: '80px', marginRight: '52px' }} />
                    <h3>Придумайте пароль</h3>
                    <p>Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.</p>
                    <input type="password" placeholder="********" className="register__inp" />
                    <input type="password" placeholder="********" className="register__inp" />
                    <PrimaryButton>Далее</PrimaryButton>
                </form>
            </div>
        </div>
    </div>
)
};

export default Password;
