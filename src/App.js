import React from 'react';
import LandingPage from './components/00-Home/LandingPage';
import styled from 'styled-components';
import Header from './components/Header';
import { OuterWrapper } from './components/ReusableStyles';
import Moon from './components/01-Destinations/Moon';

const App = () => {
  return (
    <div>
      <Moon />
    </div>
  )
}

export default App;

/* const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
` */