import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { loginUserAsync } from '../../../store/slices/auth/authSlice';
import { GreyButton, PrimaryButton } from "../../../components/Button/Button";
import authImg from '../../../assets/img/Photo background.png';
import "react-toastify/dist/ReactToastify.css";
import '../auth.scss';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const showToastMessage = () => {
    toast.success("Вы успешно вошли !", {
        position: toast.POSITION.TOP_RIGHT,
    })}
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        dispatch(loginUserAsync({ username, password, showToastMessage, navigate }))
    };

  return (
    <div className="container">
        <ToastContainer />
        <div className="login">
            <img src={authImg} alt="Error :(" className="main__img" />
            <div className="login__form">
                <form>
                    {
                        showPassword ? 
                        <RemoveRedEyeIcon className="login__eye_blue" onClick={() => setShowPassword(false)} /> :
                        <VisibilityOffIcon className="login__eye_icon" onClick={() => setShowPassword(true)} />
                    }
                    <TextField
                        id="standard-search"
                        label="Имя пользователя" 
                        variant="standard"
                        type="search" 
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    {
                        showPassword ? 
                            <TextField 
                            id="standard-search"
                            label="Пароль" 
                            variant="standard" 
                            type="text" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        /> : 
                        <TextField 
                            id="standard-search"
                            label="Пароль" 
                            variant="standard" 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    }
                    {
                        username.length === 0 || password.length === 0 ? 
                        <GreyButton>Войти</GreyButton> :
                        <PrimaryButton onClick={handleLogin}>Войти</PrimaryButton> 
                    }
                    <a href="/register" style={{ color: 'rgba(84, 88, 234, 1)', margin: '160px 0 -140px 10px' }}>Зарегистрироваться</a>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Login;
