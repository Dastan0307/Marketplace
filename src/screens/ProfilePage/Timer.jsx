import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addNumberUser, sendCode } from '../../store/slices/auth/authSlice';
import spinnerIcon from '../../assets/img/Frame 861.svg';
import phoneIcon from '../../assets/img/Frame 860.svg';

const Timer = ({ phone_number, changePhoneNumberClose }) => {
    const [time, setTime] = useState(60);
    const [timerEnd, setTimerEnd] = useState(false);
    const [code_activationn, setCodeActivation] = useState('');

    const dispatch = useDispatch();
    
    function againSendCode() {
        dispatch(addNumberUser(phone_number));
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            const code_activation = Number(code_activationn);
            dispatch(sendCode({code_activation, phone_number, changePhoneNumberClose}));
            setCodeActivation('');
        }
    }
    const startTimer = () => {
        setTimerEnd(true);
        const x = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        }, 1000);
        setTimeout(() => {
        clearInterval(x);
        setTimerEnd(false);
        setTime(60); // Сброс времени после истечения таймера
        }, 60000);
    };

    useEffect(() => {
        startTimer();
    }, []);

    function againStartTimer() {
        againSendCode()
        startTimer()
    }

   return (
        <>
            <div className="profile__check_number">
                <h3>Изменить номер телефона</h3>
                <img 
                    src={phoneIcon} 
                    alt="Error :(" 
                    style={{width:'80px', marginBottom: '40px'}} 
                />
                <h4>Введите код из СМС</h4>
                <input 
                    type="text" 
                    placeholder="0 0 0 0" 
                    value={code_activationn}
                    onKeyDown={handleEnterKeyPress}
                    onChange={(e) => setCodeActivation(e.target.value)} 
                />
                {
                    timerEnd ? 
                        <div className="profile__timer">
                            <p style={{ width: '156px', marginLeft: '2%', marginBottom: '0' }}>Повторный запрос</p>
                            <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src={spinnerIcon} alt="Error" style={{width: '16px', color: 'rgba(192, 192, 192, 1)', marginRight: '5px'}} />
                                {`00:${time < 10 ? "0" : ""}${time}`}
                            </p>
                        </div> 
                        :
                        <button className="profile__checkNumber_btn" onClick={() => againStartTimer()}>Отправить код еще раз</button>
                }
            </div>
        </>
  )
};

export default Timer;
