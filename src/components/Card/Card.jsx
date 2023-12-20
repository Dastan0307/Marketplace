import React, { useState } from "react";
import { Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import hugeIcon from '../../assets/img/more-vertical.svg';
import editIcon from '../../assets/img/Frame 851212066.svg'
import deleteIcon from '../../assets/img/Frame 8512120661.svg'
import './card.scss';

const { Paragraph } = Typography;

const ProductCard = () => {
  const [open, setOpen] = useState(false);

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
                <button  onClick={() => setOpen(false)}><img src={editIcon} alt="Error :(" />Изменить</button>
                <hr />
                <button onClick={() => setOpen(false)}><img src={deleteIcon} alt="Error :(" />Удалить</button>
              </div>
            :
              ''
            }
        </div>
  )
};

export default ProductCard;
