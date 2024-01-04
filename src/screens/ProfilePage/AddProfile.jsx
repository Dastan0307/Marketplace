import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GreyButton, PrimaryButton } from "../../components/Button/Button";
import { updateUserProfile } from "../../store/slices/profile/profileSlice";
import { ToastContainer } from "react-toastify";

const AddProfile = ({ addProfileClose }) => {
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [birth_date, setBirthDate] = useState('');

    const dispatch = useDispatch();

    function handleAddProfile() {
        dispatch(updateUserProfile({ name, last_name, birth_date, addProfileClose }));
        setName('');
        setLastName('');
        setBirthDate('');
    };

  return (
    <div className="profile__update">
        <ToastContainer />
        <h3>Изменить профиль</h3>
        <input 
          type="text" 
          placeholder="Имя" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Фамилия" 
          value={last_name} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Дата рождения" 
          value={birth_date} 
          onChange={(e) => setBirthDate(e.target.value)} 
        />
        {
            name.length === 0 || 
            last_name.length === 0 || 
            birth_date.length === 0 ? 
            <GreyButton>Изменить</GreyButton> :
            <PrimaryButton onClick={handleAddProfile}>Изменить</PrimaryButton> 
        }
    </div>
  )
};

export default AddProfile;
