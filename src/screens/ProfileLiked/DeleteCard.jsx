// import React, { useState, useEffect } from "react";
import deleteImg from '../../assets/img/trash.svg'
import { PrimaryButton } from '../../components/Button/Button';
import { Button } from 'antd';
import './profile_liked.scss';


const DeleteCard = ({ closeDeleteCard }) => {

  return (
        <div className="card__delete">
            <img src={deleteImg} alt="Error :(" width={130} />
            <p>Вы действительно хотите удалить данный товар?</p>
            <PrimaryButton>Удалить</PrimaryButton>
            <Button shape="round" className="card__delete_btn" onClick={closeDeleteCard}>Отмена</Button>
        </div>
  )
};

export default DeleteCard;
