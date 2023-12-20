import React from "react";
import TextField from '@mui/material/TextField';
import PrimaryButton from "../../../components/Button/Button";
import authImg from '../../../assets/img/Photo background.png';
import shooterImg from '../../../assets/img/Frame 851211998.svg'
import '../auth.scss';

const Register = () => {
  return (
    <div className="container">
        <div className="register">
            <img src={authImg} alt="Error :(" className="main__img" />
            <div className="register__form">
            <div className="register__btns">
                <a href="#"><img src={shooterImg} alt="Error" className="register__choose_img" />Назад</a>
                <p>Регистрация</p>
            </div>
                <form>
                    <TextField
                        id="standard-search"
                        label="Имя пользователя" 
                        variant="standard"
                        type="search" 
                        required
                    />
                    <TextField 
                        id="standard-search"
                        label="Почта" 
                        variant="standard" 
                        type="email" 
                        required 
                    />
                    <PrimaryButton>Далее</PrimaryButton>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Register;
