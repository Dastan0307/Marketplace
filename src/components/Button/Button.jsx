import React from "react";
import { Button } from 'antd';
import './button.scss';

export const PrimaryButton = (props) => {
  return (
    <Button { ...props } type="primary" shape="round" className="primary__btn" >
        {props.children}
    </Button>
  )
};

export const GreyButton = (props) => {
  return (
    <button { ...props } shape="round" className="primary__btn_grey" >
        {props.children}
    </button>
  )
};

