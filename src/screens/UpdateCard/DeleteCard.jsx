// import React, { useState, useEffect } from "react";
import deleteImg from '../../assets/img/trash.svg'
import { PrimaryButton } from '../../components/Button/Button';
import { Button } from 'antd';
import '../ProfileLiked/profile_liked.scss';
import { deleteCard } from '../../store/slices/products/productSlice';
import { useDispatch } from 'react-redux';


const DeleteCard = ({ closeDeleteCard, id }) => {
  const dispatch = useDispatch();
  console.log(id);
  
  function deleteCardProduct() {
    dispatch(deleteCard({ closeDeleteCard, id }))
  }

  return (
        <div className="card__delete">
            <img src={deleteImg} alt="Error :(" width={130} />
            <p>Вы действительно хотите удалить данный товар?</p>
            <PrimaryButton onClick={deleteCardProduct}>Удалить</PrimaryButton>
            <Button shape="round" className="card__delete_btn" onClick={closeDeleteCard}>Отмена</Button>
        </div>
  )
};

export default DeleteCard;
