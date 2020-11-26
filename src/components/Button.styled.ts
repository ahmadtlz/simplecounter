import styled from 'styled-components';

export const Button1 = styled.button`
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
  min-width: 90px;
  min-height: 30px;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px;

  &:focus {
    outline: none;
  }
  &:active {
    background-color: #a0f0f0;
  }
`;
