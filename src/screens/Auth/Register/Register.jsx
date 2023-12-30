import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, GreyButton } from "../../../components/Button/Button";
import authImg from '../../../assets/img/Photo background.png';
import shooterImg from '../../../assets/img/Frame 851211998.svg'
import '../auth.scss';

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const handleRegistration = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        navigate('/password');
    };


  return (
    <div className="container">
        <div className="register">
            <img src={authImg} alt="Error :(" className="main__img" />
            <div className="register__form">
            <div className="register__btns">
                <a href="/"><img src={shooterImg} alt="Error" className="register__choose_img" />Назад</a>
                <p>Регистрация</p>
            </div>
                <form>
                    <TextField
                        id="standard-search"
                        label="Имя пользователя" 
                        variant="standard"
                        type="search" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField 
                        id="standard-search"
                        label="Почта" 
                        variant="standard" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    {
                        username.length === 0 || email.length === 0 ? 
                        <GreyButton>Далее</GreyButton> :
                        <PrimaryButton onClick={handleRegistration} >Далее</PrimaryButton> 
                    }
                </form>
            </div>
        </div>
    </div>
  )
};

export default Register;
