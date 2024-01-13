import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { getMyProducts } from '../../store/slices/products/productSlice';
import profileIcon from '../../assets/img/Frame 851212073.svg';
import heartIcon from '../../assets/img/Frame 851212065.svg';
import productIcon from '../../assets/img/Frame 8512120651.svg';
import exitIcon from '../../assets/img/Frame 8512120652.svg';
import backIcon from '../../assets/img/Frame 851211999.svg';
import Card from '../../components/Card/Card';
import '../ProfileLiked/profile_liked.scss';


const MyProducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { my_products } = useSelector((state) => state.product);

    const userImg = localStorage.getItem('user_photo');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    useEffect(() => {
        dispatch(getMyProducts())
    }, [dispatch]);

  return (
        <div className="container" >
            <ToastContainer />
            <div className="profile__menu_list">
                <div className="profile__user_name" onClick={() => navigate('/profile')}>
                    {
                        userImg ?
                        <img src={userImg} alt="Error :(" style={{width: '60px', height: '60px', borderRadius: '100%'}} /> :
                        <img src={profileIcon} alt="Error :(" style={{width: '60px'}} />
                    }
                    {
                        username ? 
                        <p>{username}<br /><span>{email}</span></p> :
                        <p><br /><span></span></p>
                    }
                </div>
                <div className="profile__menu_btns">
                    <button 
                        onClick={() => navigate('/profile_liked')}>
                        <p>
                            <img src={heartIcon} alt="Error :(" style={{width: '30'}} />
                            Понравившиеся
                        </p> 
                        <ArrowForwardIosIcon />
                    </button>
                    <button>
                        <p>
                            <img src={productIcon} alt="Error :(" style={{width: '30'}} />
                            Мои товары
                        </p> 
                        <ArrowForwardIosIcon />
                    </button>
                    <button>
                        <p>
                            <img src={exitIcon} alt="Error :(" style={{width: '30'}} />
                            Выйти
                        </p> 
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
            <div className="profile__user">
                <div className="back__btn">
                    <button onClick={() => navigate('/profile')}><img src={backIcon} alt="Error :(" />Назад</button>
                    <p>Мои товары</p>
                </div>
                <div className="product__list">
                    {
                        my_products?.map((product) => 
                        <Card key={product.id} product={product} />
                        )
                    }
                </div>
            </div>
        </div>
  )
};

export default MyProducts;
