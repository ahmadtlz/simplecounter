import React from 'react';
import ContainerComponent from './Container.styled';

interface Props{
  children:React.ReactNode
};

const Container:React.FC<Props> = ({ children }:Props) => (
  <ContainerComponent>
    {children}
  </ContainerComponent>
);

export default Container;
