import React from 'react';
import WrapperComponent from './wrapper.styled';

interface Props{
  children:React.ReactNode
};

const Wrapper:React.FC<Props> = ({ children }:Props) => (
  <WrapperComponent>
    {children}
  </WrapperComponent>
);

export default Wrapper;
