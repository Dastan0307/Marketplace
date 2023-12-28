import React, { useState } from "react";
import PrimaryButton from "../../components/Button/Button";
import addFotoIcon from '../../assets/img/Frame 851212085.svg'

const AddCard = () => {
    const [btn, setBtn] = useState(false);
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [long_description, setLongDescription] = useState('');
    const [photo, setPhoto] = useState([]);
    let copy = Object.assign([], photo);

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        setPhoto([selectedFile])
    };



  return (
    <>
        <div className="card__add">
            <div className="card__add_img">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
            />
                <img src={photo} alt="Error :(" /> 
                <img src={addFotoIcon} alt="Error :(" /> 
                <img src={addFotoIcon} alt="Error :(" /> 
                <img src={addFotoIcon} alt="Error :(" /> 
            </div>
            <input type="text" placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Краткое описание" value={short_description} onChange={(e) => setShortDescription(e.target.value)} />
            <input type="text" placeholder="Полное описание" value={long_description} onChange={(e) => setLongDescription(e.target.value)} />
            {
                price.length === 0 || 
                title.length === 0 || 
                short_description.length === 0 || 
                long_description.length === 0 ? 
                <PrimaryButton>Добавить</PrimaryButton> :
                <PrimaryButton style={{background: ''}}>Добавить</PrimaryButton>
            }
        </div>
    </>
  )
};

export default AddCard;
