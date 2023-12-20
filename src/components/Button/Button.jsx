import React from "react";
import { Button } from 'antd';
import './button.scss';

const PrimaryButton = (props) => {
  return (
    <Button { ...props } type="primary" shape="round" className="primary__btn" >
        {props.children}
    </Button>
  )
};

export default PrimaryButton;
