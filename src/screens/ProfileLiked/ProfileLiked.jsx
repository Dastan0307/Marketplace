import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import { 
    profileIcon, 
    heartIcon,
    productIcon,
    exitIcon,
    backIcon 
} from '../../assets';
import Card from '../../components/Card/Card';
import './profile_liked.scss';


const ProfileLiked = () => {
    const navigate = useNavigate();

    const userImg = localStorage.getItem('user_photo');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

  return (
        <div className="container" >
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
                    <button>
                        <p>
                            <img src={heartIcon} alt="Error :(" style={{width: '30'}} />
                            Понравившиеся
                        </p>
                        <ArrowForwardIosIcon />
                    </button>
                    <button 
                        onClick={() => navigate('/my-products')}>
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
                    <button onClick={() => navigate('/profile')} ><img src={backIcon} alt="Error :(" />Назад</button>
                    <p>Понравившиеся</p>
                </div>
                <div className="product__list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
  )
};

export default ProfileLiked;
