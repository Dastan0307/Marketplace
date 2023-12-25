import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { loginUserAsync } from '../../../store/slices/auth/auth';
import PrimaryButton from "../../../components/Button/Button";
import authImg from '../../../assets/img/Photo background.png';
import '../auth.scss';

const Login = () => {
    const dispatch = useDispatch();
    const notify = () => toast.success("Успешное уведомление!");
  
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(loginUserAsync({ username, password, notify }))
    };

  return (
    <div className="container">
        {/* <ToastContainer style={{position: 'absolute'}}/> */}
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
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <TextField 
                        id="standard-search"
                        label="Пароль" 
                        variant="standard" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <PrimaryButton onClick={handleLogin}>Войти</PrimaryButton>
                    <a href="/register" style={{ color: 'rgba(84, 88, 234, 1)', margin: '160px 0 -140px 10px' }}>Зарегистрироваться</a>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Login;
