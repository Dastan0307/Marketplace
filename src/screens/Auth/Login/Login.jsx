import React from "react";
import TextField from '@mui/material/TextField';
import PrimaryButton from "../../../components/Button/Button";
import authImg from '../../../assets/img/Photo background.png';
import '../auth.scss';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Login = () => {
  return (
    <div className="container">
        <div className="login">
            <img src={authImg} alt="Error :(" className="main__img" />
            <div className="login__form">
                <form>
                    <RemoveRedEyeIcon className="login__eye_icon" />
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
                        type="password" 
                        required 
                        
                    />
                    <PrimaryButton>Войти</PrimaryButton>
                    <a href="/register" style={{ color: 'rgba(84, 88, 234, 1)', margin: '160px 0 -140px 10px' }}>Зарегистрироваться</a>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Login;
