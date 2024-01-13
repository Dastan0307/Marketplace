import { useEffect, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { editCardProduct, getProductId } from "../../store/slices/products/productSlice";
import snikersPicture from '../../assets/img/image 2.png'
import { PrimaryButton } from '../../components/Button/Button';
import '../ProfileLiked/profile_liked.scss';

const EditCard = ({ handleClose, id }) => {
    const dispatch = useDispatch();
    const getProductById = useSelector(state => state.product.about_product);

    const [title, setTitle] = useState('');
    const [price_card, setPrice] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [long_description, setLongDescription] = useState('');

    useEffect(() => {
        setTitle(getProductById?.title);
        setPrice(getProductById?.price);
        setShortDescription(getProductById?.short_description);
        setLongDescription(getProductById?.long_description);
    }, [getProductById, id, ]);

    useEffect(() => {
        dispatch(getProductId(id))
    }, [dispatch, id ]);

    function editProductCard() {
        const price = Number(price_card)
        dispatch(
            editCardProduct(
                { id, title, price, short_description, long_description, handleClose }
            ))
    };
    
  return (
    <div>
        <ClearIcon className="card__icon" onClick={handleClose} />
        <ToastContainer />
        <div className="card__edit">
            <Carousel className='card__carousel'>
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
            <input 
                type="text" 
                className='card__title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text" 
                className='card__price' 
                value={price_card} 
                onChange={(e) => setPrice(e.target.value)} 
            />
            <input 
                type="text" 
                className='card__brend' 
                value={short_description} 
                onChange={(e) => setShortDescription(e.target.value)} 
            />
            <input 
                type="text" 
                className='card__edit_description' 
                value={long_description} 
                onChange={(e) => setLongDescription(e.target.value)} 
            />
            <PrimaryButton onClick={editProductCard}>Сохранить</PrimaryButton>
        </div>
    </div>
  )
};

export default EditCard;
