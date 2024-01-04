import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { registerUserAsync } from '../../../store/slices/auth/authSlice';
import { GreyButton, PrimaryButton } from "../../../components/Button/Button";
import authImg from '../../../assets/img/Photo background.png';
import shooterImg from '../../../assets/img/Frame 851211998.svg'
import keyIcon from '../../../assets/img/Frame1861.svg'
import "react-toastify/dist/ReactToastify.css";
import '../auth.scss';

const Password = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [password_check, setPasswordCheck] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const showToastMessage = () => {
        toast.success("Вы успешно зарегистрировались !", {
        position: toast.POSITION.TOP_RIGHT,
    })}
  
    const handleRegistration = () => {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        dispatch(registerUserAsync({ username, email, password, password_check, navigate, showToastMessage }));
    };

  return (
    <div className="container">
        <div className="password">
        <ToastContainer />
            <img src={authImg} alt="Error :(" className="main__img" />
            <div className="register__form">
            <div className="register__btns">
                <a href="/register">
                    <img src={shooterImg} 
                    alt="Error" 
                    className="register__choose_img" />
                    Назад
                </a>
                <p>Регистрация</p>
                {
                    showPassword ? 
                    <RemoveRedEyeIcon className="password__eye_blue" onClick={() => setShowPassword(false)} /> :
                    <VisibilityOffIcon className="password__eye_icon" onClick={() => setShowPassword(true)} />
                }
            </div>
                <form className="password__form">
                    <img src={keyIcon} alt="Error :(" style={{ width: '80px', marginRight: '52px' }} />
                    <h3>Придумайте пароль</h3>
                    <p>Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.</p>
                    {
                        showPassword ? 
                        <>
                            <input 
                                type="text" 
                                placeholder="********" 
                                value={password} 
                                className="password__inp" 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <input 
                                type="text" 
                                placeholder="********" 
                                value={password_check} 
                                className="password__inp" 
                                onChange={(e) => setPasswordCheck(e.target.value)} 
                            />
                        </>:
                        <>
                            <input 
                                type="password" 
                                placeholder="********" 
                                value={password} 
                                className="password__inp" 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <input 
                                type="password" 
                                placeholder="********" 
                                value={password_check} 
                                className="password__inp" 
                                onChange={(e) => setPasswordCheck(e.target.value)} 
                            />
                        </>
                    }
                    {
                        password === password_check ? 
                        <p className="password__error_password"></p> :
                        <p className="password__error_password">Пароли не совпадают</p>
                    }
                    {
                        password === password_check || 
                        password.length !== 8 || 
                        password_check.length !== 8 ? 
                        <PrimaryButton onClick={handleRegistration}>Далее</PrimaryButton> :
                        <GreyButton>Далее</GreyButton> 
                    }
                </form>
            </div>
        </div>
    </div>
)
};

export default Password;
