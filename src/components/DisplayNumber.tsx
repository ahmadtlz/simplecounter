import React from 'react';
import { Display } from './DisplayNumber.styled';

interface displayCounter {
  number:number
}
const DisplayNumber:React.FC<displayCounter> = ({ number }:displayCounter) => (
  <Display>
    {number}
  </Display>
);

export default DisplayNumber;
