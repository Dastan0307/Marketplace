import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPhoneNumber } from "../../store/slices/auth/authSlice";
import phoneIcon from '../../assets/img/Frame 860.svg';

export const EditPhoneNumber = ({ editPhoneNumberclose }) => {
    const editPhone = localStorage.getItem('phone_number');
    const [phone_number, setEditNumber] = useState(editPhone);

    const dispatch = useDispatch();

    function handleEditPhoneNumber() {
        dispatch(editPhoneNumber({ phone_number, editPhoneNumberclose }))
    };

  return (
        <div className="profile__edit_number">
            <h3 className="profile__title">Изменить номер телефона</h3>
            <img src={phoneIcon} alt="Error :(" style={{width:'80px', marginBottom: '40px'}} />
            <h4>Введите номер телефона</h4>
            <p className="profile__contact_p">Мы отправим вам СМС с кодом подтверждения</p>
            <input 
                type="text" 
                placeholder="0(000) 000 000" 
                value={phone_number} 
                onChange={(e) => setEditNumber(e.target.value)} 
            />
            {
                phone_number !== null || undefined ? 
                <button onClick={handleEditPhoneNumber} style={{background: 'rgba(84, 88, 234, 1)'}} 
                >Далее</button> : 
                <button style={{background: 'rgba(247, 247, 248, 1)'}}>Далее</button>
            }
        </div>
  )
};
