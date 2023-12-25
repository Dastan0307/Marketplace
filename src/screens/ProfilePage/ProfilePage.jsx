import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import ClearIcon from '@mui/icons-material/Clear';
import spinnerIcon from '../../assets/img/Frame 861.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import profileIcon from '../../assets/img/Frame 851212073.svg';
import heartIcon from '../../assets/img/Frame 851212065.svg';
import productIcon from '../../assets/img/Frame 8512120651.svg';
import exitIcon from '../../assets/img/Frame 8512120652.svg';
import backIcon from '../../assets/img/Frame 851211999.svg';
import phoneIcon from '../../assets/img/Frame 860.svg';
import Logout from "../../screens/Auth/Logout/Logout";
import './profile.scss';

const ProfilePage = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [open, setOpen] = useState(false);
    const [changePhoneNumber, setChangePhoneNumber] = useState(false);
    const [logout, setLogout] = useState(false);
    const [timer, setTimer] = useState(false);

    const navigate = useNavigate();

    const changePhoneNumberClose = () => {
        setChangePhoneNumber(false);
    };
    const changePhoneNumberOpen = () => {
        setChangePhoneNumber(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const logoutCardClose = () => {
        setLogout(false);
    };
    const logoutCardOpen = () => {
        console.log('hello');
        setLogout(true);
    };

    const date = new Date('Thu, 26 Sep 2022 22:01:00');
    
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const [over, setOver] = useState(false);
    const [[ m, s], setTime] = useState([ min, sec]);
    
    const tick =()=>{
        if(over) return;
        if ( m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([ 59, 59]);
        } else if (s === 0) {
            setTime([ m - 1, 59]);
        } else {
            setTime([ m, s - 1]);
        }
    }

    function closeTimer() {
        setTimeout(() => {
            setTimer(true)
        }, 60000);
    };

    function checkPhoneNumber() {
        changePhoneNumberOpen()
        handleClose()
        closeTimer()
    }

    useEffect(()=>{
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    })


  return (
    <div className="container" >
        <div className="profile__menu_list">
            <div className="profile__user_name" >
                <img src={profileIcon} alt="Error :(" style={{width: '60px'}} />
                <p>Алесястар<br /><span>sergeykrash01</span></p>
            </div>
            <div className="profile__menu_btns">
                <button onClick={() => navigate('/profile_liked')}><p><img src={heartIcon} alt="Error :(" style={{width: '30'}} />Понравившиеся</p> <ArrowForwardIosIcon /></button>
                <button><p><img src={productIcon} alt="Error :(" style={{width: '30'}} />Мои товары</p> <ArrowForwardIosIcon /></button>
                <button onClick={logoutCardOpen}><p><img src={exitIcon} alt="Error :(" style={{width: '30'}} />Выйти</p> <ArrowForwardIosIcon /></button>
            </div>
        </div>
        <div className="profile__user">
            <div className="back__btn">
                <button><img src={backIcon} alt="Error :(" />Назад</button>
                <p>Профиль</p>
            </div>
            <div className="profile__img">
                <img src={profileIcon} alt="Error:(" style={{width: '80px'}} />
                {/* <input type="file" placeholder="Выбрать фотографию"/> */}
                <button>Выбрать фотографию</button>
            </div>
            <div className="profile__user_name">
                <button>Имя</button>
                <hr />
                <button>Фамилия</button>
                <hr />
                <h3>Алесястар</h3>
                <hr />
                <button>Дата рождения</button>
            </div>
            <div className="profile__contact_user">
                <button className="profile__contact_btn" onClick={handleOpen}>Добавить номер<span>0(000) 000 000</span></button>
                <hr />
                <p>nikitina.alesya@gmail.</p>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <ClearIcon className="profile__clear_icon" onClick={handleClose} />
                    <div className="profile__edit_number">
                        <h3>Изменить номер телефона</h3>
                        <img src={phoneIcon} alt="Error :(" style={{width:'80px', marginBottom: '40px'}} />
                        <h4>Введите номер телефона</h4>
                        <p className="profile__contact_p">Мы отправим вам СМС с кодом подтверждения</p>
                        <input type="text" placeholder="0(000) 000 000" onChange={(e) => setPhoneNumber(e.target.value)} />
                        <strong>0(000) 000 000</strong>
                        {
                            phoneNumber.length === 10 ? 
                            <button onClick={checkPhoneNumber} style={{background: 'rgba(84, 88, 234, 1)'}} 
                            >Далее</button> : 
                            <button style={{background: 'rgba(247, 247, 248, 1)'}}>Далее</button>
                        }
                    </div>
                </Backdrop>
                {/* Message for confirmation */}
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={changePhoneNumber}
                >
                    <ClearIcon className="profile__icon_checkNumber" onClick={changePhoneNumberClose} />
                    <div className="profile__check_number">
                        <h3>Изменить номер телефона</h3>
                        <img src={phoneIcon} alt="Error :(" style={{width:'80px', marginBottom: '40px'}} />
                        <h4>Введите код из СМС</h4>
                        <input type="text" placeholder="0 0 0 0" />
                       {
                        timer ? 
                        <button className="profile__checkNumber_btn">Отправить код еще раз</button>
                        :
                        <div className="profile__timer">
                            <p style={{marginLeft: '38%', marginBottom: '-24px'}}>Повторный запрос</p>
                            <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={spinnerIcon} alt="Error" style={{width: '16px', color: 'rgba(192, 192, 192, 1)', marginRight: '5px'}} />
                                {`${m
                                .toString()
                                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
                            </p>
                        </div> 
                       }
                    </div>
                </Backdrop> 
                {/* exit  */}
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={logout}
                >
                 <Logout logoutCardClose={logoutCardClose} />
                </Backdrop> 
            </div>
        </div>
    </div>
  )
};

export default ProfilePage;
