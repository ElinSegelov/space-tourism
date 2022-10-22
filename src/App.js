import React from 'react';
import LandingPage from './components/00 Home/LandingPage';
import styled from 'styled-components';
import Header from './components/00 Home/Header';
import { OuterWrapper } from './components/ReusableStyles';

const App = () => {
  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default App;

/* const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
` */