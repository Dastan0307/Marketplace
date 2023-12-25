import React, { useState } from "react";
import { Typography } from 'antd';
import Backdrop from '@mui/material/Backdrop';
import { HeartOutlined } from '@ant-design/icons';
import hugeIcon from '../../assets/img/more-vertical.svg';
import editIcon from '../../assets/img/Frame 851212066.svg'
import deleteIcon from '../../assets/img/Frame 8512120661.svg'
import './card.scss';
import EditCard from "../../screens/ProfileLiked/EditCard";
import DeleteCard from "../../screens/ProfileLiked/DeleteCard";

const { Paragraph } = Typography;

const ProductCard = () => {
  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);


  const handleClose = () => {
    setOpenEdit(false);
  };
  const handleOpen = () => {
    setOpenEdit(true);
  };

  const openCardEdit = () => {
    setOpen(false)
    handleOpen()
  }

  const openDeleteCard = () => {
    setOpenDelete(true);
  };

  const closeDeleteCard = () => {
    setOpenDelete(false)
  }

  const openCardDelete = () => {
    setOpen(false)
    openDeleteCard()
  }

  return (
        <div className="card">
            <img
            className="card__img"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            <p className="card__description" >BMW M4 Coupe: A Two-Door</p>
            <p className="card__description_price" >23 000 $</p>
            <div className="card__fuctional">
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
                  <HeartOutlined style={{width: '24px', cursor: 'pointer'}}/>
                  <Paragraph className="card__price">100</Paragraph>
                  </div>
                <img src={hugeIcon} alt="error" width={24} style={{cursor: 'pointer'}} onClick={() => setOpen(true)} />
            </div>
            {
              open ? 
              <div className="card__btns">
                <button  onClick={() => openCardEdit()}><img src={editIcon} alt="Error :(" />Изменить</button>
                <hr />
                <button onClick={() => openCardDelete()}><img src={deleteIcon} alt="Error :(" />Удалить</button>
              </div>
            :
              ''
            }
            {/* edit  */}
              <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={openEdit}
              >
                  <EditCard handleClose={handleClose} />
              </Backdrop>
              {/* delete  */}
              <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={openDelete}
              >
                  <DeleteCard closeDeleteCard={closeDeleteCard} />
              </Backdrop>
        </div>
  )
};

export default ProductCard;
