import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Global from './global.styled';
import Button from './components/Button';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import DisplayNumber from './components/DisplayNumber';
import { increment, decrement, resetAsyncNumber } from './store/counter.actions';
import { RootState } from './store/root-reducer';

type handle=(e:React.MouseEvent<HTMLButtonElement>)=>void

const App:React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state:RootState) => state.counter.value);
  const handleIncrement : handle = (e) => {
    e.preventDefault();
    dispatch(increment());
  };

  const handleDecrement : handle = (e) => {
    e.preventDefault();
    dispatch(decrement());
  };

  const handleAsyncIncrement : handle = (e) => {
    e.preventDefault();
    dispatch(resetAsyncNumber());
  };

  return (
    <>
      <Global />
      <Container>
        <Wrapper>
          <DisplayNumber
            number={counter}
          />
          <Button onClick={handleIncrement}>
            Add 1
          </Button>
          <Button onClick={handleDecrement}>
            Minus 1
          </Button>
          <Button onClick={handleAsyncIncrement}>
            Reset
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default App;
