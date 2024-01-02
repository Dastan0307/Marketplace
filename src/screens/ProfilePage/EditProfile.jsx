import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GreyButton, PrimaryButton } from "../../components/Button/Button";
import { editProfile } from "../../store/slices/profile/profileSlice";
import { ToastContainer } from "react-toastify";

const EditProfile = ({ editProfileClose }) => {
    const name_user = localStorage.getItem('name');
    const last_name_user = localStorage.getItem('last_name');
    const birth_date_user = localStorage.getItem('birth_date');
    
    const [name, setName] = useState(name_user);
    const [last_name, setLastName] = useState(last_name_user);
    const [birth_date, setBirthDate] = useState(birth_date_user);

    const dispatch = useDispatch();

    function handleEditProfile() {
        dispatch(editProfile({ name, last_name, birth_date, editProfileClose }));
        setName('');
        setLastName('');
        setBirthDate('');
    };

  return (
    <div className="profile__update">
        <ToastContainer />
        <h3>Изменить профиль</h3>
        <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Фамилия" value={last_name} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" placeholder="Дата рождения" value={birth_date} onChange={(e) => setBirthDate(e.target.value)} />
        {
            name != null | undefined || last_name != null | undefined || birth_date!= null | undefined ?
            <PrimaryButton onClick={handleEditProfile}>Изменить</PrimaryButton> :
            <GreyButton>Изменить</GreyButton> 
        }
    </div>
  )
};

export default EditProfile;
