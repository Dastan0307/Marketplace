import React, { useState } from "react";
import { Typography } from 'antd';
import Backdrop from '@mui/material/Backdrop';
import { HeartOutlined } from '@ant-design/icons';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { getProductId } from '../../store/slices/products/productSlice';
import AboutCard from "../../screens/UpdateCard/AboutCard";
import './card.scss';

const { Paragraph } = Typography;

const CardShow = ({ handleClickOpen, item } ) => {
  const [openAboutCard, setOpenAboutCard] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(99);
  const dispatch = useDispatch();

  const handleCloseAboutCard = () => {  
    setOpenAboutCard(false);
  };
  
  const handleOpenAboutCard = (id) => {
    setOpenAboutCard(true);
    dispatch(getProductId(id))
  };



  function handleDisLike() {
    setLike(false)
    setLikeCount(likeCount-1)
  };

  function handleLike() {
    setLike(true)
    setLikeCount(likeCount+1)
  };

  return (
        <div className="card" >
          <img
          className="card__img"
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          onClick={handleClickOpen}
          />
          <p className="card__description" onClick={() => handleOpenAboutCard(item.id)} >{item?.title}</p>
          <p className="card__description_price" >{item?.price} $</p>
          <div className="card__fuctional">
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
              {
                like ? 
                <FavoriteIcon style={{width: '20px', cursor: 'pointer', color: 'red', marginRight: '5px'}} onClick={() => handleDisLike()}/> : 
                <HeartOutlined style={{width: '24px', cursor: 'pointer' }} onClick={() => handleLike()}/>
              }
              <Paragraph className="card__price">{ likeCount }</Paragraph>
            </div>
          </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openAboutCard}
            >
                <AboutCard handleCloseAboutCard={handleCloseAboutCard} />
            </Backdrop>
        </div>
  )
};

export default CardShow;
