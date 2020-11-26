import React from 'react';
import { Button1 } from './Button.styled';

interface Props{
 onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void;
 children:string;
}

const Button:React.FC<Props> = ({ onClick, children }:Props) => (
  <Button1 onClick={onClick}>
    {children}
  </Button1>
);

export default Button;
