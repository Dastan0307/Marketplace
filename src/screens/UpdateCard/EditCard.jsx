import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { editCardProduct } from "../../store/slices/products/productSlice";
import snikersPicture from '../../assets/img/image 2.png'
import { PrimaryButton } from '../../components/Button/Button';
import '../ProfileLiked/profile_liked.scss';

const EditCard = ({ handleClose, id }) => {
    const { about_product } = useSelector((state) => state.product);

    const dispatch = useDispatch();

    const [title, setTitle] = useState(about_product.title);
    const [price_card, setPrice] = useState(about_product.price);
    const [short_description, setShortDescription] = useState(about_product.short_description);
    const [long_description, setLongDescription] = useState(about_product.long_description);


    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    // function editProductCard() {
    //     const price = Number(price_card)
    //     dispatch(editCardProduct({ id, title, price,short_description, long_description }))
    // };
    

  return (
    <div>
        <ClearIcon className="card__icon" onClick={handleClose} />
        <ToastContainer />
        <div className="card__edit">
            <Carousel afterChange={onChange} className='card__carousel'>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
                <div>
                    <img src={snikersPicture} alt="Error :(" />
                </div>
            </Carousel>
            <input type="text" className='card__title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" className='card__price' value={price_card} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" className='card__brend' value={short_description} onChange={(e) => setShortDescription(e.target.value)} />
            <input type="text" className='card__edit_description' value={long_description} onChange={(e) => setLongDescription(e.target.value)} />
            <PrimaryButton >Сохранить</PrimaryButton>
        </div>
    </div>
  )
};

export default EditCard;
